/** 从 Redux Toolkit 引入 configureStore API */
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})