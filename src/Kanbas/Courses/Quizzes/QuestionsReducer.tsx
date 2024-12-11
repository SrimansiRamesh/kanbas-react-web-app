import {  createSlice } from "@reduxjs/toolkit";

const initialState:{ questions:any } = {
  questions: [],
};
const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addQuestion: (state, action) => {
      state.questions.push(action.payload); 
    },
    deleteQuestionAction: (state, action) => {
      state.questions = state.questions.filter(
        (a: any) => a._id !== action.payload);
    },
    updateQuestionAction: (state, { payload: quiz }) => {
      state.questions = state.questions.map((a: any) =>
        a._id === quiz._id ? quiz : a
      ) as any;
    },
    editQuestion: (state, { payload: { id, data } }) => {
      state.questions = state.questions.map((a:any) =>
        a._id === id ? { ...a, ...data } : a
      );
    },
  },
});
export const { addQuestion, deleteQuestionAction , updateQuestionAction , editQuestion ,setQuestions } =
questionSlice.actions;
export default questionSlice.reducer;