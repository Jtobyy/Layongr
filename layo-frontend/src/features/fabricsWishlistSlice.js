import { createSlice } from "@reduxjs/toolkit";

// Contents of a product item
// itemPrototype = {
//     id, image, company, price,
// }
let initialState = {}

const fabricsWishlistSlice = createSlice({
    name: 'fabricsWishlist',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state[action.payload] = action.payload
        },
        removeItem: (state, action) => {
            // Using the idea that the numbers of keys in an object is the same as the numbers of values in it,
            const itemValues = Object.values(state)
            const itemKeys = Object.keys(state)
            let indexOfPayload = itemValues.indexOf(action.payload)

            // Get the property to delete
            let keyOfPayload = itemKeys[indexOfPayload]
            delete state[keyOfPayload]
        }
    }
})

export const { addItem, removeItem } = fabricsWishlistSlice.actions
export default fabricsWishlistSlice.reducer