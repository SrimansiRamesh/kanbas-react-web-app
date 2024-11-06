import { createSlice } from '@reduxjs/toolkit';
import { enrollments } from '../Databases';
const initialState = {
    enrollments: enrollments 
};

const enrollmentSlice = createSlice({
    name: 'enrollment',
    initialState,
    reducers: {
        enrollCourse(state, action) {
            state.enrollments.push(action.payload);
        },
        unenrollCourse(state, action) {
            state.enrollments = state.enrollments.filter(
                (e:any) => !(e.user === action.payload.user && e.course === action.payload.course)
            );
        },
    },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;