import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	open: false,
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		modalOpen: (state) => {
			state.open = true
		},
		modalClose: (state) => {
			state.open = false
		},
	},
})


export const { modalOpen, modalClose } = modalSlice.actions

export default modalSlice.reducer