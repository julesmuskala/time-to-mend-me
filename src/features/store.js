import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'

import resolutionReducer from './resolutionSlice'

const reducers = combineReducers({
  resolution: resolutionReducer
})

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store