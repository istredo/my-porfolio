import React from 'react'
import ModalItem from './ModalItem'
import { useSelector, useDispatch } from 'react-redux'
import { modalClose } from '../redux/slices/modalSlice'
import { modalList } from '../utils/modalList'


const Modal = () => {

	const modal = useSelector((state) => state.modal.open)
	const dispatch = useDispatch()

	return (
		<div className='modal'>
			<div className={modal ? 'modal__bg overlayActive' : 'modal__bg'} onClick={() => dispatch(modalClose())}>
				<button className="modal__closeBtn" onClick={() => dispatch(modalClose())} >
					<svg className="btn__close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
				</button>

				<div className={modal ? 'modal__container itemActive' : 'modal__container'} onClick={e => e.stopPropagation()}>
					<div className='list__container'>
						{
							modalList.map((item) => (<ModalItem key={item.title} id={item.id} title={item.title} description={item.description} url={item.url} img={item.img} />))
						}
					</div>
				</div>

			</div>

		</div >
	)
}

export default Modal
