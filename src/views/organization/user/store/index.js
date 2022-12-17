// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import MyRequest from '@src/utility/MyRequest'

export const getData = createAsyncThunk('organization/users', async params => {
  const response = await MyRequest('get', 'organization/users', params)
  return {
    params,
    data: response.lists,
    allData: response.allData,
    totalPages: response.total
  }
})

export const organizationListSlice = createSlice({
  name: 'grouopList',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: []
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.data = action.payload.data
      state.allData = action.payload.allData
      state.total = action.payload.totalPages
      state.params = action.payload.params
    })
  }
})

export default organizationListSlice.reducer
