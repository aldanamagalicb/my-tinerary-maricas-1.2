import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";

const { getCities, getContinentCities, doCity, getMyCities, deleteMyCity, updateMyCity } = citiesActions;

const initialState = {
    myCities: [],
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
                let mycity = state.myCities.filter(city => city.id !== action.payload.data._id)
                return { ...state, myCities: mycity }
            })

            .addCase(updateMyCity.fulfilled, (state, action) => {
                let mycity = state.myCities.filter(city => city.id !== action.payload.data._id)
                mycity.push(action.payload.data)
                return { ...state, myCities: mycity }
            })
    })

export default citiesReducer;