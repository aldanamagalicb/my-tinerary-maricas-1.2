import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";

const { getCities, getContinentCities, doCity, getMyCities, deleteMyCity, updateMyCity, getMyTineraries, deleteMyTineraries, updateMyTineraries } = citiesActions;

const initialState = {
    myCities: [],
    myTineraries: [],
    allCities: [],
    continentCities: [],
    searchInput: "",
    checkBoxes: "",
    checkedCities: []
};

const citiesReducer = createReducer(initialState,
    (builder) => {

        builder
            .addCase(getCities.fulfilled, (state, action) => {
                let check = [...new Set(action.payload.map(city => city.continent))]
                return { ...state, 
                    allCities: action.payload, 
                    continentCities: check }
            })

            .addCase(getContinentCities.fulfilled, (state, action) => {
                return {
                    ...state, 
                    allCities: action.payload.response,
                    searchInput: action.payload.search,
                    checkBoxes: action.payload.checkBoxes,
                    checkedCities: action.payload.check
                }
            })

            .addCase(doCity.fulfilled, (state, action) => {
                if (action.payload.success) {
                    state.allCities.push(action.payload.response)
                } 
            })

            .addCase(getMyCities.fulfilled, (state, action) => {
                return { ...state, myCities: action.payload }
            })

            .addCase(deleteMyCity.fulfilled, (state, action) => {
                let mycity = state.myCities.filter(city => city._id !== action.payload._id)
                return { ...state, myCities: mycity }
            })

            .addCase(updateMyCity.fulfilled, (state, action) => {
                let mycity = state.myCities.filter(city => city._id !== action.payload._id)
                return { ...state, myCities: [...mycity, action.payload] }
            })

            .addCase(getMyTineraries.fulfilled, (state, action) => {
                return { ...state, myTineraries: action.payload }
            })

            .addCase(deleteMyTineraries.fulfilled, (state, action) => {
                let mytinerary = state.myTineraries.filter(tinerary => tinerary._id !== action.payload.response._id)
                return { ...state, myTineraries: mytinerary }
            })

            .addCase(updateMyTineraries.fulfilled, (state, action) => {
                let mytinerary = state.myTineraries.filter(tinerary => tinerary._id !== action.payload._id)
                return { ...state, myTineraries: [...mytinerary, action.payload] }
            })
    })
export default citiesReducer;