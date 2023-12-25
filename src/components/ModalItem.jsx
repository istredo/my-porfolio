import React from 'react'

const ModalItem = (props) => {

	return (
		<a className="modal__item" href={props.url} target="_blank" rel="noopener noreferrer">
			<img className='modal__img' src={props.img} alt={props.title} />
			<h4 className='modal__title'>{props.title}</h4>
			<h5 className='modal__desc'>{props.description}</h5>
		</a>
	)
}

export default ModalItem
