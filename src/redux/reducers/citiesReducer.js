import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/citiesActions";

const { getCities, getContinentCities } = citiesActions;

const initialState = {
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
    })

export default citiesReducer;