import { createSlice } from '@reduxjs/toolkit'

let parseStorage = function () {
	let mode = JSON.parse(localStorage.getItem('theme'))
	if (!mode) {
		return 'light'
	}
	return mode.type === "theme/themeDark" ? 'dark' : 'light'
}

const initialState = {
	theme: parseStorage(),
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		themeLight: (state) => {
			state.theme = 'light'
		},
		themeDark: (state) => {
			state.theme = 'dark'
		},
	},
})


export const selectTheme = (state) => state.theme
export const { themeLight, themeDark } = themeSlice.actions

export default themeSlice.reducer