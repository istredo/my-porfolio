import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slices/modalSlice'
import themeReducer from './slices/themeSlice'
import testReducer from './slices/testSlice';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		theme: themeReducer,
		test: testReducer,
	},
})