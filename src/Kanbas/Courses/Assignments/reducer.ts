import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Databases";

export type Assignment = {
  _id: string;
  title: string;
  description: string;
  points: number;
  dueDate: string;
  availableDate: string;
  availableUntil: string;
  course: string;
};

const initialState = {
  assignments: [] as Assignment[],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action: PayloadAction<Assignment[]>) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, action) => {
      state.assignments.push(action.payload); 
    },
    deleteAssignmentAction: (state, action) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== action.payload);
    },
    updateAssignmentAction: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: { id, data } }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === id ? { ...a, ...data } : a
      );
    },
  },
});
export const { addAssignment,deleteAssignmentAction ,updateAssignmentAction , editAssignment,setAssignments } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;