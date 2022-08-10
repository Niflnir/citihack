import { configureStore } from '@reduxjs/toolkit'
import personalDataReducer from './personalDataSlice'

export default configureStore({
  reducer: {
    personalData: personalDataReducer,
  },
})