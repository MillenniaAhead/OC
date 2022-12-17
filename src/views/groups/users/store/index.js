// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import MyRequest from '@src/utility/MyRequest'

export const getData = createAsyncThunk('groupUsers/getData', async params => {
  const response = await MyRequest('get', 'groups/user/users', params)
  return {
    params,
    data: response.users,
    allData: response.allData,
    totalPages: response.total
  }
})

export const groupUserSlice = createSlice({
  name: 'groupUser',
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

export default groupUserSlice.reducer
