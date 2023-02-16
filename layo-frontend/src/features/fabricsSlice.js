import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import testpic1 from '../images/fabrics-testpic1.png';
// import testpic2 from '../images/fabrics-testpic2.png';
// import testpic3 from '../images/fabrics-testpic3.png';
// import testpic4 from '../images/fabrics-testpic4.png';
// import testpic5 from '../images/fabrics-testpic5.png';
// import testpic6 from '../images/fabrics-testpic6.png';
// import testpic7 from '../images/fabrics-testpic7.png';
// import testpic8 from '../images/fabrics-testpic8.png';
// import testpic9 from '../images/fabrics-testpic9.png';
// import testpic10 from '../images/fabrics-testpic10.png';
// import testpic11 from '../images/fabrics-testpic11.png';
// import testpic12 from '../images/fabrics-testpic12.png';

// Contents of a product item
// itemPrototype = {
//     id, title, image, company, rating, price, delivery_time,
// }
export const fetchFabrics = createAsyncThunk('fabrics/fetchFabrics', async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/products/?tags=1')
    return response
})

let initialState = {
    fabrics: [],
    currentSelect: 0,
    status: 'idle',
    error: null
}

const fabricsSlice = createSlice({
    name: 'fabrics',
    initialState,
    reducers: {
        // addItem: (state) => {

        // }
        selectCurrent: (state, action) => {
            state.currentSelect = action.payload;
        }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchFabrics.pending, (state, action) => {
            state.status = 'loading'
            console.log('loading')
          })
          .addCase(fetchFabrics.fulfilled, (state, action) => {
            state.status = 'succeeded'
            console.log('success')
            state.fabrics = action.payload.data
          })
          .addCase(fetchFabrics.rejected, (state, action) => {
            state.status = 'failed'
            console.log('failed')
            state.error = action.error.message
          })
      }
})

export const { selectCurrent } = fabricsSlice.actions
export default fabricsSlice.reducer