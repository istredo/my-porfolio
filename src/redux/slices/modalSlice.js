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
		modalToggle: (state) => {
			state.open = !state.open
		},
	},
})

export const selectModal = (state) => state.modal
export const { modalOpen, modalClose, modalToggle } = modalSlice.actions

export default modalSlice.reducer