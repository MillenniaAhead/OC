// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
//import axios from 'axios'

import MyRequest from '@src/utility/MyRequest'

export const getData = createAsyncThunk('overview/chartdata', async () => {
  const response = await MyRequest('get', 'overview/chartdata')
  return {
    allData: response
  }

})

export const OverviewSlice = createSlice({
  name: 'overviewList',
  initialState: {
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.allData = action.payload.allData
    })
  }
})

export default OverviewSlice.reducer
