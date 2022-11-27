import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { login, reEnter, logout, updateMyProfile, doUser } = userActions;

const initialState = {
    name: "",
    age: "",
    lastName: "",
    photo: "",
    logged: false,
    token: "",
    role: "",
    id: "",
    myUser: {}
};

const usersReducers = createReducer(initialState, (builder) => {

    builder
        .addCase(login.fulfilled, (state, action) => {
            const { success, response } = action.payload
            if (success) {
                let { user, token } = response
                localStorage.setItem('token', JSON.stringify({ token: { user: token } }))
                let newState = {
                    ...state,
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    age: user.age,
                    role: user.role,
                    photo: user.photo,
                    logged: true,
                    token: token
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    message: response
                }
                return newState
            }
        })

        .addCase(reEnter.fulfilled, (state, action) => {
            const { success, response, token } = action.payload
            if (success) {
                let { user} = response
                let newState = {
                    ...state,
                    name: user.name,
                    photo: user.photo,
                    role: user.role,
                    id: user.id,
                    logged: true,
                    token: token    
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    message: response
                }
                return newState
            }
        })

        .addCase(logout.fulfilled, (state, action) => {
            const { success, response } = action.payload
            if (success) {
                localStorage.removeItem('token')
                let newState = {
                    ...state,
                    name: '',
                    photo: '',
                    logged: false,
                    token: '',
                    role: ''
                }
                return newState
            } else {
                let newState = {
                    ...state,
                    mensaje: response
                }
                return newState
            }
        })

        .addCase(updateMyProfile.fulfilled, (state, action) => {
            return { ...state, myUser: action.payload }
        })

        .addCase(doUser.fulfilled, (state, action) => {
            console.log(action.payload.response)
            return {
                ...state,
                myUser: action.payload.response,
            };
        })
})

export default usersReducers;