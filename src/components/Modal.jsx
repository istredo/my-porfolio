import React from 'react'
import ModalItem from './ModalItem'

const Modal = ({ open, setOpen }) => {

	const onClose = () => {
		setOpen(false)
	}

	const modalList = [
		{ id: 0, title: "allods", description: "Тестовое задание в astrum entertaiment", url: "https://allods.vercel.app/", img: '/img/allods.png' },
		{ id: 1, title: "shoes", description: "Магазин обуви. React, Axios, SCSS ", url: "", img: '/img/shoes.png' },
		{ id: 2, title: "pizza", description: "Крупное приложение по заказу пиццы. React, Axios, SCSS, Redux, Адаптивная верстка.", url: "https://my-pizza-istredo.vercel.app", img: '/img/pizza.png' },
		{ id: 3, title: "hotel", description: "Сайт-визитка отеля. С возможностью бронирования номеров. Вся информация о клиенте передается через телеграм-бота.", url: "https://hotel-app-mauve.vercel.app/", img: '/img/hotel.png' },
		{ id: 4, title: "parallax", description: "Верстка сайта с эффектом паралакс", url: "https://istredo.github.io/Magic-forest-parallax-/", img: '/img/forest.png' },
		{ id: 5, title: "gallery", description: "Шаблон галлереи с интересной механикой", url: "https://gallery-istredo.vercel.app", img: '/img/gallery.png' },
	]

	return (
		<div className='modal'>
			<div className={open ? 'modal__bg overlayActive' : 'modal__bg'} onClick={onClose}>
				<button className="modal__closeBtn" onClick={onClose} >
					<svg className="btn__close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
				</button>

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
