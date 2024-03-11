import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	open: false,
	id: 0,
}

export const descModalSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		descModalOpen: (state, action) => {
			state.id = action.payload
			state.open = true

		},
		descModalClose: (state) => {
			state.open = false
		},
	},
})


export const selectModalDetails = (state) => state.desc
export const { descModalOpen, descModalClose } = descModalSlice.actions

export default descModalSlice.reducer