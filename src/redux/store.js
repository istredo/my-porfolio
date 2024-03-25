import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice'
import themeReducer from './slices/themeSlice'
import descReducer from './slices/descModalSlice';
import langReducer from './slices/langSlice'

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		theme: themeReducer,
		desc: descReducer,
		lang: langReducer,
	},
})