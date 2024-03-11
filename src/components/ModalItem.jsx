import React from 'react'
import { useDispatch } from 'react-redux'
import { descModalOpen } from '../redux/slices/descModalSlice'



const ModalItem = (props) => {

	const dispatch = useDispatch()


	return (
		<div className="modal__item" onClick={() => dispatch(descModalOpen(props.id))}>
			<img className='modal__img' src={props.img} alt={props.title} />
			<h4 className='modal__title'>{props.title}</h4>

		</div>
	)
}

export default ModalItem
