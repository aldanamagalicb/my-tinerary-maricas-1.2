import { createReducer } from "@reduxjs/toolkit";
import reactionActions from "../actions/reactionActions";

const { getUserReactions, deleteReaction } = reactionActions;

const initialState = {
    reaction: []
};

const reactionReducer = createReducer(initialState,
    (builder) => {
        builder

            .addCase(getUserReactions.fulfilled, (state, action) => {
                return { ...state, reaction: action.payload.response }
            })

            .addCase(deleteReaction.fulfilled, (state, action) => {
                let myreaction = state.reaction.filter(reaction => reaction._id !== action.payload._id)
                return { ...state, reaction: myreaction }
            })

    })

export default reactionReducer;