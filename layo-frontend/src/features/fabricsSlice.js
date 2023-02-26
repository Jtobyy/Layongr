import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchColors = createAsyncThunk('fabrics/fetchColors', async () => {  
  let response = await axios.get(`http://127.0.0.1:8000/api/products/colors`)
  return response
})

export const fetchTags = createAsyncThunk('fabrics/fetchTags', async () => {
  let response = await axios.get(`http://127.0.0.1:8000/api/products/tags?cat=F`)
  return response
})


export const fetchFabrics = createAsyncThunk('fabrics/fetchFabrics', async (qStrings) => {
  const {cat, tags, price, colors} = qStrings
  let query = ''
  query += `cat=${cat}`
  if (tags !== undefined) query += `&tags=${tags}`
  if (price !== undefined) query += `&price=${price}`
  if (colors !== undefined) query += `&colors=${colors}`

  let response = await axios.get(`http://127.0.0.1:8000/api/products/?${query}`)
  return response
})

export const fetchRelatedFrabrics = createAsyncThunk('fabrics/fetchRelatedFabrics', async (qStrings) => {
  const {cat, tags, price, colors} = qStrings
  let query = ''
  query += `cat=${cat}`
  if (tags != undefined) query += `&tags=${tags}`
  if (price != undefined) query += `&price=${price}`
  if (colors != undefined) query += `&colors=${colors}`

  let response = await axios.get(`http://127.0.0.1:8000/api/products/?${query}`)
  return response
})

export const fetchMoreFromStore = createAsyncThunk('fabrics/fetchMoreFromStore', async (qStrings) => {
  const {cat, store} = qStrings
  let query = `cat=${cat}&store=${store}`
  
  let response = await axios.get(`http://127.0.0.1:8000/api/products/?${query}`)
  return response
})


let tags = [ {id: 0, name: 'fabric', 'category': 'F'} ]
let colors = [ {id: 0, name: 'red'} ]

let initialState = {
    fabrics: [],
    currentSelect: 0,
    relatedToCurrent: [],
    moreFromStore: [],
    colors: colors,
    currentColor: 0,
    tags: tags,
    currentTag: 0,
    status: 'idle',
    tagStatus: 'idle',
    colorStatus: 'idle',
    relatedFabricStatus: 'idle',
    moreFromStoreStatus: 'idle',
    error: null,
    tagError: null,
    colorError: null,
    relatedFabricError: null,
    moreFromStoreError: null,
}

const fabricsSlice = createSlice({
    name: 'fabrics',
    initialState,
    reducers: {
        selectCurrent: (state, action) => {
            state.currentSelect = action.payload;
        },
        selectTag: (state, action) => {
            state.currentTag = action.payload;
      }
    },
    extraReducers(builder) {
        builder
          .addCase(fetchFabrics.pending, (state, action) => {
            state.fabrics = []
            state.status = 'loading'
            // console.log('loading')
          })
          .addCase(fetchFabrics.fulfilled, (state, action) => {
            state.status = 'succeeded'
            // console.log('success')
            state.fabrics = action.payload.data
          })
          .addCase(fetchFabrics.rejected, (state, action) => {
            state.status = 'failed'
            // console.log('failed')
            state.error = action.error.message
          })

          .addCase(fetchTags.pending, (state, action) => {
          state.tagStatus = 'loading'
          })
          .addCase(fetchTags.fulfilled, (state, action) => {
            state.tagStatus = 'succeeded'
            state.tags = action.payload.data
          })
          .addCase(fetchTags.rejected, (state, action) => {
            state.tagStatus = 'failed'
            state.tagError = action.error.message
          })

          .addCase(fetchColors.pending, (state, action) => {
            state.colorStatus = 'loading'
          })
          .addCase(fetchColors.fulfilled, (state, action) => {
            state.colorStatus = 'succeeded'
            state.colors = action.payload.data
          })
          .addCase(fetchColors.rejected, (state, action) => {
            state.colorStatus = 'failed'
            state.tagError = action.error.message
          })          

          .addCase(fetchRelatedFrabrics.pending, (state, action) => {
            state.relatedFabricStatus = 'loading'
          })
          .addCase(fetchRelatedFrabrics.fulfilled, (state, action) => {
            state.relatedFabricStatus = 'succeeded'
            state.relatedToCurrent = action.payload.data
          })
          .addCase(fetchRelatedFrabrics.rejected, (state, action) => {
            state.relatedFabricStatus = 'failed'
            state.relatedFabricError = action.error.message
          })          

          .addCase(fetchMoreFromStore.pending, (state, action) => {
            state.moreFromStoreStatus = 'loading'
          })
          .addCase(fetchMoreFromStore.fulfilled, (state, action) => {
            state.moreFromStoreStatus = 'succeeded'
            // console.log(action.payload.data)
            state.moreFromStore = action.payload.data
          })
          .addCase(fetchMoreFromStore.rejected, (state, action) => {
            state.moreFromStoreStatus = 'failed'
            state.moreFromStoreError = action.error.message
          })          
      }
})

export const { selectCurrent, selectTag } = fabricsSlice.actions
export default fabricsSlice.reducer