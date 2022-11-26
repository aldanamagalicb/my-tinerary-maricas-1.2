import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import { DB_LINK } from "../../url";

const login = createAsyncThunk('login user', async (data) => {
    try {
        let user = await axios.post(`${DB_LINK}api/auth/sign-in`, data)
        console.log(user)
        if (user.data.success) {
            return { 
                success: true, 
                response: user.data.response
            }
        } else {
            return { 
                success: false, 
                response: user.data.message
            }
        }
    } catch (error) {
        console.log(error)
        return { 
            success: false, 
            response: error.message 
        }
    }
    
})

const reEnter = createAsyncThunk('reEnter', async (token) => {
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
    try {
        let user = await axios.post(`${DB_LINK}api/auth/token`, null, headers)
        console.log(user)
        return {
            success: true,
            response: user.data.response,
            token: token,
        }

    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
})



const userActions = {
    login,
    reEnter
}

export default userActions