import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DB_LINK } from "../../url";

const getReaction = createAsyncThunk("getReaction", async (id) => {

    try{
    const response = await axios.get(`${DB_LINK}api/reactions?itineraryId=${id}`);
    return {
        success: true,
        response: response.data,
        reqId: response.data.id
    };
    } catch(error){
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});

const getUserReactions = createAsyncThunk("getUserReactions", async (id, token) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try{
    const response = await axios.get(`${DB_LINK}api/reactions?userId=${id}`, headers);
    return {
        success: true,
        response: response.data.data,
    };
    } catch(error){
        return {
        success: false,
        response: error.response.data.data,
        }
    }
});

const updateReaction = createAsyncThunk("updateReaction", async ( datos ) => {
    let headers = { headers: { Authorization: `Bearer ${datos.token}` } };
    try {
        const response = await axios.put(`${DB_LINK}api/reactions?itineraryId=${datos.id}&name=${datos.name}`,null, headers);
        return response.data.response;
    }
    catch (error) {
        console.log(error)
        return {
            payload: 'An error has ocurred'
        }
    }
});

const deleteReaction = createAsyncThunk("deleteReaction", async ( {id, token }) => {
    let headers = { headers: { Authorization: `Bearer ${token}` } };
    try {
        const response = await axios.put(`${DB_LINK}api/reactions/${id}`, null, headers);
        return response.data.response;
    }
    catch (error) {
        console.log(error)
        return {    
            payload: 'An error has ocurred'
        }
    }
});

const reactionActions = {
    getReaction,
    getUserReactions,
    updateReaction,
    deleteReaction
}

export default reactionActions;