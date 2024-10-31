import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    enrollments: [] as { user: string; course: string }[], // Type inference for the enrollments array
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
                (enrollment) => !(enrollment.user === action.payload.user && enrollment.course === action.payload.course)
            );
        },
    },
});

export const { enrollCourse, unenrollCourse } = enrollmentSlice.actions;

export default enrollmentSlice.reducer;
