import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		theme: themeReducer,
	},
})