// ** Redux Imports
import rootReducer from './rootReducer'
import { configureStore } from '@reduxjs/toolkit'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = configureStore({
  reducer: rootReducer,
  composeWithDevTools: composeWithDevTools,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export { store }
