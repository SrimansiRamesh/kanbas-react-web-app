import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer"
import EnrollmentsReducer from "./Dashboard/EnrollmentsSlice";
import quizzesReducer from "./Courses/Quizzes/reducer"
import QuestionsReducer from "./Courses/Quizzes/QuestionsReducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    EnrollmentsReducer,
    quizzesReducer,
    QuestionsReducer,
  },
});
// store.subscribe(() => {
//   localStorage.setItem("enrollments", JSON.stringify(store.getState().EnrollmentsReducer.enrollments));
// });
export default store;

