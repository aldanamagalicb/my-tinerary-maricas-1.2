import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionActions";

const { getReaction, updateReaction } = reactionActions;

const initialState = {
    // allReactions: [],
    // reaction: {},
    // reqId: ''
};

const reactionReducer = createReducer(initialState,
    (builder) => {

    //     builder
    //         .addCase(getReaction.fulfilled, (state, action) => {
    //             console.log(action.payload)
    //             return { ...state, 
    //                 allReactions: action.payload.response,
    //                 reqId: action.payload.reqId
    //         }})

    //         .addCase(updateReaction.fulfilled, (state, action) => {
    //             return { ...state, reaction: action.payload }})
            })

export default reactionReducer;