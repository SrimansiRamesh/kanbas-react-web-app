import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Databases";
import { title } from "process";
const initialState = {
  assignments: assignments,
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      // const newAssignment: any = {
      //     _id: assignment._id, // Use the _id passed from the formData
      //     title: assignment.title,
      //     description: assignment.description, // Make sure to include this field
      //     course: assignment.course,
      //     availableDate: assignment.availableDate,
      //     dueDate: assignment.dueDate,
      //     points: assignment.points,
      //     assignmentGroup: assignment.assignmentGroup, // Add any other necessary fields
      //     displayGradeAs: assignment.displayGradeAs,
      //     submissionType: assignment.submissionType,
      //     onlineEntryOptions: assignment.onlineEntryOptions,
      // };
      state.assignments.push(action.payload); 
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== action.payload);
    },
    updateAssignment: (state, { payload: assignment }) => {
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
export const { addAssignment,deleteAssignment ,updateAssignment , editAssignment } =
  assignmentsSlice.actions;
export default assignmentsSlice.reducer;