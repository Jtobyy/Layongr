import { createSlice } from "@reduxjs/toolkit";

// Contents of a product item
// itemPrototype = {
//     id, image, company, rating, price, delivery_time,
// }
let initialState = {}

const productsWishlistSlice = createSlice({
    name: 'productsWishlist',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // action.payload contains the product's id, The wishlist dictionary stores these ids in
            // some form of redundant way, the key is the same as the value. That's how
            // it determines which items are in the wishlist
            state[action.payload] = action.payload
        },
        removeItem: (state, action) => {
            // here also, action.payload contains the product's id.
            // Using the idea that the numbers of keys in an object is the same as the numbers of values in it,
            const itemValues = Object.values(state)
            const itemKeys = Object.keys(state)

            // get the index of the element that contains the id
            let indexOfPayload = itemValues.indexOf(action.payload)

            // Get the property to delete
            let keyOfPayload = itemKeys[indexOfPayload]
            delete state[keyOfPayload]
        }
    }
})

export const { addItem, removeItem } = productsWishlistSlice.actions
export default productsWishlistSlice.reducer