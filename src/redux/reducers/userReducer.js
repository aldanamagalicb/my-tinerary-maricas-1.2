import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { login, reEnter, logout } = userActions;

const initialState = {
    name: "",
    lastName: "",
    photo: "",
    logged: false,
    token: "",
    role: "",
    id: ""
};

const usersReducers = createReducer(initialState, (builder) => {

    builder
        .addCase(login.fulfilled, (state, action) => {
            const { success, response } = action.payload
            if (success) {
                let { user, token } = response
                console.log(user)
                localStorage.setItem('token', JSON.stringify({ token: { user: token } }))
                let newState = {
                    ...state,
                    id: user.id,
                    name: user.name,
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
            console.log(action.payload.response)
            const { success, response } = action.payload
            if (success) {
                let { user, token } = response
                let newState = {
                    ...state,
                    name: user.name,
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

        .addCase(logout.fulfilled, (state, action) => {
            const { success,response } = action.payload
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

})

export default usersReducers