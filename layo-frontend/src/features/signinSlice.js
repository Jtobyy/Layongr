import { createSlice } from "@reduxjs/toolkit";

export const signinSlice = createSlice ({
    name: 'signin',
    initialState: {
        value: false,
        signedIn: false // Indicates whether a user is already signed in
    },
    reducers: {
        toggle: (state, action) => {
            state.value = !state.value
        },
        signInUser: (state, action) => {
            state.signedIn = true
        }
    }
})

export const selectSigninState = state => state.signin.value
export const selectSignedinState = state => state.signin.signedIn
export const { toggle, signInUser } = signinSlice.actions
export default signinSlice.reducer