import React from 'react'
import { useDispatch } from 'react-redux'
import { testOpen } from '../redux/slices/testSlice'



const ModalItem = (props) => {

	const dispatch = useDispatch()


	return (
		<div className="modal__item" onClick={() => dispatch(testOpen(props.id))}>
			<img className='modal__img' src={props.img} alt={props.title} />
			<h4 className='modal__title'>{props.title}</h4>

		</div>
	)
}

export default ModalItem
