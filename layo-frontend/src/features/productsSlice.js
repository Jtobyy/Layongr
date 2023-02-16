import { createSlice } from "@reduxjs/toolkit";
import testpic1 from '../images/womencat-testpic1.png';
import testpic2 from '../images/womencat-testpic2.png';
import testpic3 from '../images/womencat-testpic3.png';
import testpic4 from '../images/womencat-testpic4.png';
import testpic5 from '../images/womencat-testpic5.png';
import testpic6 from '../images/womencat-testpic6.png';

// Contents of a product item
// itemPrototype = {
//     id, title, image, company, rating, price, delivery_time,
// }
let initialState = {
    products: [
        {id: 6, title: "Traditional Iwo and Buba", image: testpic1, company: 'Tobi Store', rating: '4.32', price: 7000, delivery_time: '7 - 9 Days'}, 
        {id: 1, title: "C V Neck Iwo and Buba", image: testpic2, company: 'Tobi Store', rating: '4.32', price: 7000, delivery_time: '7 - 9 Days'},
        {id: 2, title: "Iwo and Buba -Twist on the buba", image: testpic3, company: 'Tobi Store', rating: '4.32', price: 7000, delivery_time: '7 - 9 Days'}, 
        {id: 3, title: "Iwo and Buba -Twist on the buba", image: testpic4, company: 'Tobi Store', rating: '4.32', price: 7000, delivery_time: '7 - 9 Days'}, 
        {id: 4, title: "Iwo and Buba -Twist on the buba", image: testpic5, company: 'Tobi Store', rating: '4.32', price: 7000, delivery_time: '7 - 9 Days'}, 
        {id: 5, title: "Iwo and Buba -Twist on the buba", image: testpic6, company: 'Tobi Store', rating: '4.32', price: 7000, delivery_time: '7 - 9 Days'}, 
    ],
    currentSelect: 0
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        selectCurrent: (state, action) => {
            state.currentSelect = action.payload;
        }
    }
})

export const { selectCurrent } = productsSlice.actions
export default productsSlice.reducer