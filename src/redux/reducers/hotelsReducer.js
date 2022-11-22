import { createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsActions";
import hotelsAction from "../actions/hotelsActions"

const { getHotels, getContinentHotels, doHotel } = hotelsActions

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

        .addCase(doHotel.fulfilled, (state, action) => {
            if (action.payload.success) {
                state.hotels.push(action.payload.response)
            } 
        })

});

export default hotelsReducer