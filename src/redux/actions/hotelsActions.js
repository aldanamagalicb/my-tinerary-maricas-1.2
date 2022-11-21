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
        console.log(error)
        return {
            payload: 'error'
        }
    }
})


const hotelsAction = {
    getHotels,
    getContinentHotels
}

export default hotelsAction;