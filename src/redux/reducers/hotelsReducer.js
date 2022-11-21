import { createReducer } from "@reduxjs/toolkit";
import hotelsAction from "../actions/hotelsActions"

const { getHotels, getContinentHotels } = hotelsAction

const initialState = {
    hotels: [],
    order: '',
    name: ''
}

const hotelsReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(getHotels.fulfilled, (state, action) => {
            return {
                ...state,
                hotels: action.payload
            }
        })
        .addCase(getContinentHotels.fulfilled, (state, action) => {
            return {
                ...state,
                hotels: action.payload.response,
                name: action.payload.name,
                order: action.payload.order
            }
        })

});

export default hotelsReducer