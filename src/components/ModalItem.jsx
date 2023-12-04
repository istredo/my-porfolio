import React from 'react'

const ModalItem = (props) => {
	return (
		<div className="modal__item"  >
			<img className='modal__img' src={props.img} alt={props.title} />
			<h4 className='modal__title'>{props.title}</h4>
			<h5 className='modal__desc'>{props.description}</h5>
		</div>
	)
}

export default ModalItem
