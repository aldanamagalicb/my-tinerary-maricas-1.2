import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DB_LINK } from "../../url";

const getCities = createAsyncThunk("getCities",async ()=>{
    const response = await axios.get(`${DB_LINK}api/cities`);
    return response.data.response;
});

const getContinentCities = createAsyncThunk('getContinentCities', async (data) => {
    try {
        const response = await axios.get(`${DB_LINK}api/cities?${data.continents}&name=${data.search}`)
        let info = {
            response: response.data.response,
            search: data.search,
            checkBoxes: data.continents,
            check: data.continentChecked
        }
        return info
    } catch (error) {
        console.log(error)
        let info = {
            response: [],
            search: data.search,
            checkBoxes: data.continents,
            check: data.continentChecked
        }
        return info
    }
})

const doCity = createAsyncThunk('doCity', async (data) => {
    try{
        const response = await axios.post(`${DB_LINK}api/cities`, data)
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
})

const getMyCities = createAsyncThunk("getMyCities",async (id)=>{
    try{
        const response = await axios.get(`${DB_LINK}api/cities?userId=${id}`);
    return response.data.response;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});

const deleteMyCity = createAsyncThunk("deleteMyCity",async (id)=>{
    try{
        const response = await axios.delete(`${DB_LINK}api/cities/${id}`);
    return response.data;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});

const updateMyCity = createAsyncThunk("updateMyCity",async (data)=>{
    try{
        const response = await axios.put(`${DB_LINK}api/cities/${data.id}`, data.citie);
    return response.data.response;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});
const getMyTineraries = createAsyncThunk("getMyTineraries",async (id)=>{
    try{
        const response = await axios.get(`${DB_LINK}api/itineraries?userId=${id}`);
    return response.data.response;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});

const deleteMyTineraries = createAsyncThunk("deleteMyTineraries",async (id)=>{
    try{
        const response = await axios.delete(`${DB_LINK}api/itineraries/${id}`);
    return response.data;
}
    catch(error){
        return {
            payload: 'An error has ocurred'
        }
    }
    
});

const updateMyTineraries = createAsyncThunk("updateMyTineraries",async (data)=>{
    try{
        const response = await axios.put(`${DB_LINK}api/itineraries/${data.id}`, data.tinerarie);
    return response.data.response;
}
    catch(error){
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
    
});





const citiesActions = {
    getCities,
    getContinentCities,
    doCity,
    getMyCities,
    deleteMyCity,
    updateMyCity,
    getMyTineraries,
    deleteMyTineraries,
    updateMyTineraries
}

export default citiesActions;