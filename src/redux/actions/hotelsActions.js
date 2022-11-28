import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DB_LINK } from "../../url";

const getHotels = createAsyncThunk('getHotels', async () => {
    try {
        const response = await axios.get(`${DB_LINK}api/hotels`)
        return response.data.response
    } catch (error) {
        console.log(error)
        return {
            payload: 'error'
        }
    }
})

const getContinentHotels = createAsyncThunk('getContinentHotels', async (data) => {
    try {
        const response = await axios.get(`${DB_LINK}api/hotels?name=${data.name}&order=${data.order}`)
        let info = {
            response: response.data.response,
            name: data.name,
            order: data.order
        }
        return info
    } catch (error) {
        let info = {
            response: error.response.data.response,
            name: data.name,
            order: data.order
        }
        return info
    }
})

const doHotel = createAsyncThunk('doHotel', async (data) => {
    try{
        const response = await axios.post(`${DB_LINK}api/hotels`, data)
    if (response.data.id) {
        let info = {
            id: response.data.id,
            success: true,
            response: data
        }
        return info
    }else{
        let info = {
            success: false,
            messages: response.data.message
        }
        return info
    }
}
    catch(error){
        return {
            success: false,
            response: 'An error has ocurred'
        }
    }
});

const getMyHotels = createAsyncThunk("getMyHotels",async (id)=>{
    try{
        const response = await axios.get(`${DB_LINK}api/hotels?userId=${id}`);
    return response.data.response;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});

const deleteMyHotel = createAsyncThunk("deleteMyHotel",async ({id, token})=>{
    let headers = {headers: { Authorization: `Bearer ${token}`}};
    try{
        const response = await axios.delete(`${DB_LINK}api/hotels/${id}`, headers);
    return response.data.response;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});

const updateMyHotel = createAsyncThunk("updateMyHotel",async ({data, token})=>{
    let headers = {headers: { Authorization: `Bearer ${token}`}};
    try{
        const response = await axios.patch(`${DB_LINK}api/hotels/${data.id}`, data.hotels, headers);
    return response.data.response;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});
const getMyShow = createAsyncThunk("getMyShow",async (id)=>{
    try{
        const response = await axios.get(`${DB_LINK}api/shows?userId=${id}`);
    return response.data.data;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});

const deleteMyShow = createAsyncThunk("deleteMyShow",async ({id, token})=>{
    let headers = {headers: { Authorization: `Bearer ${token}`}};
    try{
        const response = await axios.delete(`${DB_LINK}api/shows/${id}`, headers);
    return response.data;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});

const updateMyShow = createAsyncThunk("updateMyShow",async ({data, token})=>{
    let headers = {headers: { Authorization: `Bearer ${token}`}};
    try{
        const response = await axios.patch(`${DB_LINK}api/shows/${data.id}`, data.shows, headers);
    return response.data.response;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});



const hotelsActions = {
    getHotels,
    getContinentHotels,
    doHotel,
    getMyHotels,
    deleteMyHotel,
    updateMyHotel,
    getMyShow,
    deleteMyShow,
    updateMyShow
}

export default hotelsActions;