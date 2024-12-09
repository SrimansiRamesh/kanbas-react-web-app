import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Question = {
  _id: string;
  type: string; 
  questionText: string;
  points: number;
  choices?: { text: string; isCorrect: boolean }[]; 
  correctAnswer: string ;
};

const initialState = {
  questions: [] as Question[],
};
const questionSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuestions: (state, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    addQuestion: (state, action) => {
      console.log('Action:',action.payload);
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
      state.questions = state.questions.map((a) =>
        a._id === id ? { ...a, ...data } : a
      );
    },
  },
});
export const { addQuestion, deleteQuestionAction , updateQuestionAction , editQuestion ,setQuestions } =
questionSlice.actions;
export default questionSlice.reducer;