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
});

const logout = createAsyncThunk('salir', async(token) => {
    let headers = {headers: {'Authorization': `Bearer ${token}`}}
    try {
        let user = await axios.put(`${DB_LINK}api/auth/sign-out`,null,headers)
        //console.log(user.data)
        return {
            success: true,
            response: user.data.message
        }
    } catch (error) {
        console.log(error.response)
        return {
            success: false,
            response: error.response.data.message
        }
    }
});

const updateMyProfile = createAsyncThunk("updateMyProfile",async (data)=>{
    try{
        const response = await axios.patch(`${DB_LINK}api/auth/me/${data.id}`, data.user);
        console.log(response.data.response)
    return response.data.response; 
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});

const doUser = createAsyncThunk("doUser", async (id) => {   
    try {
      let res = await axios.get(`${DB_LINK}api/auth/me/${id}`);
      console.log(res.data.response)
      return {       
        success: true,
        response: res.data.response,

      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        response: "An error has ocurred",
      };
    }
  });

const userActions = {
    login,
    reEnter,
    logout,
    updateMyProfile,
    doUser
}

export default userActions