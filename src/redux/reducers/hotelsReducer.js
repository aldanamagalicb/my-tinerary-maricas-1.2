import { createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsActions";

const { getHotels, getContinentHotels, getMyHotels, doHotel, deleteMyHotel, updateMyHotel } = hotelsActions

const initialState = {
    hotels: [],
    hotelsAdmin: [],
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
        .addCase(getMyHotels.fulfilled, (state, action) => {
            return { ...state, hotelsAdmin: action.payload }
        })
        .addCase(deleteMyHotel.fulfilled, (state, action) => {
            let hotel = state.hotelsAdmin.filter(hotel => hotel.id !== action.payload.data._id)
            return { ...state, hotelsAdmin: hotel }
        })

        .addCase(updateMyHotel.fulfilled, (state, action) => {       
            return { ...state}
        })

});

export default hotelsReducer