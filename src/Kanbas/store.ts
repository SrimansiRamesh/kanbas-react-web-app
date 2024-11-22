import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer"
import EnrollmentsReducer from "./Dashboard/EnrollmentsSlice";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    EnrollmentsReducer,
  },
});
// store.subscribe(() => {
//   localStorage.setItem("enrollments", JSON.stringify(store.getState().EnrollmentsReducer.enrollments));
// });
export default store;

