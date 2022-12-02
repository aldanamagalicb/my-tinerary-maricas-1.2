import { createReducer } from "@reduxjs/toolkit";
import commentsAction from "../actions/commentsAction";

const { getComment, createComment, deleteComment, editComment } = commentsAction;

const initialState = {
  comments: [],
};

const commentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getComment.fulfilled, (state, action) => {
      return { ...state, comments: action.payload.comments };
    })

    .addCase(createComment.fulfilled, (state, action) => {
      return {
        ...state,
        comments: action.payload.comments,
      };
    })

    .addCase(deleteComment.fulfilled, (state, action) => {
      let newComment = state.comments.filter(
        (newComment) => newComment._id !== action.payload.data._id
      );
      return {
        ...state,
        comments: newComment,
      };
    })
    .addCase(editComment.fulfilled, (state, action) => {
     let  newComments = state.comments.map((e) => {
      console.log(action.payload.id);
        if(e._id === action.payload.id){
          return {
            ...e,
            comment: action.payload.comment,
          }
        }else{
          return e
        }
      })
      console.log(newComments);
      return {
        ...state,
        comments: newComments,
       
      };
    });
});

export default commentReducer;