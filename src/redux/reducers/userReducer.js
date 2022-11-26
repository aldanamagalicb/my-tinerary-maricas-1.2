import { createReducer } from "@reduxjs/toolkit";
import userActions from "../actions/userActions";

const { login, reEnter } = userActions;

const initialState = {
    name: "",
    lastName: "",
    photo: "",
    logged: false,
    token: "",
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


})

export default usersReducers