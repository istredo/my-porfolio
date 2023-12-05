import React from 'react'
import ModalItem from './ModalItem'

const Modal = ({ open, setOpen }) => {

	const onClose = () => {
		setOpen(false)
	}

	const modalList = [
		{ id: 0, title: "allods", description: "some allods description", url: "https://allods.vercel.app/", img: '/img/allods.png' },
		{ id: 1, title: "shoes", description: "some shoes description", url: "", img: '/img/shoes.png' },
		{ id: 2, title: "pizza", description: "some pizza description", url: "my-pizza-istredo.vercel.app", img: '/img/pizza.png' },
		{ id: 3, title: "hotel", description: "some hotel description", url: "https://hotel-app-mauve.vercel.app/", img: '/img/hotel.png' },
		{ id: 4, title: "parallax", description: "some parallax description", url: "https://istredo.github.io/Magic-forest-parallax-/", img: '/img/forest.png' },
	]

	return (
		<div className='modal'>
			<div className={open ? 'modal__bg overlayActive' : 'modal__bg'} onClick={onClose}>
				<svg className="btn__close" onClick={onClose} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>

				<div className={open ? 'modal__container itemActive' : 'modal__container'} onClick={e => e.stopPropagation()}>
					<div className='list__container'>
						{
							modalList.map((item) => (<ModalItem key={item.title} title={item.title} description={item.description} url={item.url} img={item.img} />))
						}
					</div>
				</div>

			</div>
		</div>
	)
}

export default Modal
