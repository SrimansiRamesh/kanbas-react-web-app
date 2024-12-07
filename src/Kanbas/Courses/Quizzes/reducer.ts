import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Quiz = {
    _id: string;
    title: string;
    description: string;
    //course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
    type: string;
    points: number;
    assignmentGroup: string;
    shuffleAnswers: boolean;
    timeLimit: number; // Minutes
    multipleAttempts: boolean;
    maxAttempts: number;
    showCorrectAnswers: string; // Example: 'After Due Date'
    accessCode: string;
    oneQuestionAtATime: boolean;
    webcamRequired: boolean;
    lockQuestionsAfterAnswering:boolean;
    dueDate: Date;
    availableDate: Date;
    untilDate: Date;
    published: boolean; // Quiz status
};

const initialState = {
  quizzes: [] as Quiz[],
};
const quizSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    setQuizzes: (state, action: PayloadAction<Quiz[]>) => {
      state.quizzes = action.payload;
    },
    addQuiz: (state, action) => {
      console.log('Action:',action.payload);
      state.quizzes.push(action.payload); 
    },
    deleteQuizAction: (state, action) => {
      state.quizzes = state.quizzes.filter(
        (a: any) => a._id !== action.payload);
    },
    updateQuizAction: (state, { payload: quiz }) => {
      state.quizzes = state.quizzes.map((a: any) =>
        a._id === quiz._id ? quiz : a
      ) as any;
    },
    editQuiz: (state, { payload: { id, data } }) => {
      state.quizzes = state.quizzes.map((a) =>
        a._id === id ? { ...a, ...data } : a
      );
    },
  },
});
export const { addQuiz, deleteQuizAction , updateQuizAction , editQuiz ,setQuizzes } =
quizSlice.actions;
export default quizSlice.reducer;