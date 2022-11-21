import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DB_LINK } from "../../url";

const getCities = createAsyncThunk("getCities",async ()=>{
    const response = await axios.get(`${DB_LINK}api/cities`);
    return response.data.response;
});

const getContinentCities = createAsyncThunk('getContinentCities', async (data) => {
    const respuesta = await axios.get(`${DB_LINK}api/cities?${data.continents}&name=${data.search}`)
    let info = {
        response: respuesta.data.response,
        search: data.search,
        checkBoxes: data.continents,
        check: data.continentChecked
    }
    return info
})

const citiesActions = {
    getCities,
    getContinentCities
}

export default citiesActions;