import { createSlice } from "@reduxjs/toolkit";

export const signupSlice = createSlice ({
    name: 'signup',
    initialState: {
        value: false
    },
    reducers: {
        toggle: (state) => {
            state.value = !state.value
        }
    }
})

export const selectSignupState = state => state.signup.value
export const { toggle } = signupSlice.actions
export default signupSlice.reducer