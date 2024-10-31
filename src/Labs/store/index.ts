import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
import TodosReducer from "../Lab4/ReduxExamples/Todos/TodosReducer";
const store = configureStore({
  reducer: { 
    helloReducer,
    counterReducer,
    addReducer,
    Todos:TodosReducer,
   },

});
export default store;