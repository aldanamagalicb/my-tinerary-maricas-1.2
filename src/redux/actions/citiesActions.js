import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DB_LINK } from "../../url";

const getCities = createAsyncThunk("getCities",async ()=>{
    const response = await axios.get(`${DB_LINK}api/cities`);
    return response.data.response;
});

const getContinentCities = createAsyncThunk('getContinentCities', async (data) => {
    const response = await axios.get(`${DB_LINK}api/cities?${data.continents}&name=${data.search}`)
    let info = {
        response: response.data.response,
        search: data.search,
        checkBoxes: data.continents,
        check: data.continentChecked
    }
    return info
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

const citiesActions = {
    getCities,
    getContinentCities,
    doCity
}

export default citiesActions;