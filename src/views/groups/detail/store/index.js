// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
//import axios from 'axios'

import MyRequest from '@src/utility/MyRequest'

export const getData = createAsyncThunk('api/groups/detail/', async (id) => {
  const response = await MyRequest('get', `/api/groups/detail/${id}`)
  return {
    allData: response
  }

})

export const GroupDetailsSlice = createSlice({
  name: 'overviewList',
  initialState: {
    allData: ''
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.allData = action.payload.allData
    })
  }
})

export default GroupDetailsSlice.reducer
