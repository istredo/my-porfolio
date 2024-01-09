import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	open: false,
	id: 0,
}

export const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		testOpen: (state, action) => {
			state.id = action.payload
			state.open = true

		},
		testClose: (state) => {
			state.open = false
		},
	},
})


export const { testOpen, testClose } = testSlice.actions

export default testSlice.reducer