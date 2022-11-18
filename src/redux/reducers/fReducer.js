import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    f: [],
};

const fReducer = createReducer(initialState, 
    (builder)=>{
        builder.addCase()
    })