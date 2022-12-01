import { createReducer } from "@reduxjs/toolkit";
import hotelsActions from "../actions/hotelsActions";

const { getHotels, getShows, getContinentHotels, getMyHotels, doHotel, deleteMyHotel, updateMyHotel, getMyShow, updateMyShow, deleteMyShow } = hotelsActions

const initialState = {
    hotels: [],
    hotelsAdmin: [],   
    myShows: [],
    order: '',
    name: '',
    allShows: []
}

const hotelsReducer = createReducer(initialState, (builder) => {

    builder
        .addCase(getHotels.fulfilled, (state, action) => {
            return {
                ...state,
                hotels: action.payload
            }
        })

        .addCase(getShows.fulfilled, (state, action) => {
            return { ...state, allShows: action.payload }
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
            console.log(action.payload)
            let hotel = state.hotelsAdmin.filter(hotel => hotel._id !== action.payload._id)
            return { ...state, hotelsAdmin: hotel }
        })

        .addCase(updateMyHotel.fulfilled, (state, action) => {   
            let myhotel = state.hotelsAdmin.filter(hotel => hotel._id !== action.payload._id)    
            return { ...state, hotelsAdmin: [...myhotel, action.payload] }
        })
        .addCase(getMyShow.fulfilled, (state, action) => {
            return { ...state, myShows: action.payload }
        })
        .addCase(deleteMyShow.fulfilled, (state, action) => {
            let myshow = state.myShows.filter(show => show._id !== action.payload.data._id)
            return { ...state, myShows: myshow }
        })

        .addCase(updateMyShow.fulfilled, (state, action) => {   
            let myshow = state.myShows.filter(show => show._id !== action.payload._id)    
            return { ...state, myShows: [...myshow, action.payload] }
        })

});

export default hotelsReducer