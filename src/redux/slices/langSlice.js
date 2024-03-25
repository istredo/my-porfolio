import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	language: 'ru',
}

export const langSlice = createSlice({
	name: 'lang',
	initialState,
	reducers: {
		toggleLang: (state) => {
			state.language = state.language === 'ru' ? 'en' : 'ru'
		},
	},
})


export const selectLanguage = (state) => state.lang
export const { toggleLang } = langSlice.actions

export default langSlice.reducer