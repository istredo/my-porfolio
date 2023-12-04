import React from 'react'

const Modal = ({ open, setOpen }) => {

	const onClose = () => {
		setOpen(false)
	}
	return (
		<div className='modal'>
			<div className={open ? 'modal__bg overlayActive' : 'modal__bg'} onClick={onClose}>
				<div className={open ? 'modal__item itemActive' : 'modal__item'} onClick={e => e.stopPropagation()}>
					<svg className="btn__close" onClick={onClose} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>



				</div>
			</div>
		</div>
	)
}

export default Modal
