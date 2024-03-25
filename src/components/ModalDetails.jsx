import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalList } from '../utils/modalList'
import { descModalClose, selectModalDetails } from '../redux/slices/descModalSlice'
import { useLang } from '../utils/useLang'


const ModalDetails = () => {
	const { id, open } = useSelector(selectModalDetails)
	const { lang, translations } = useLang()
	const dispatch = useDispatch()
	let list = modalList[id]
	const description = lang === 'ru' ? list.description_ru : list.description_en
	return (
		<div className="details__modal">
			<div className={open ? "details__bg details__active" : "details__bg"} onClick={() => dispatch(descModalClose())}>
				<button className="modal__closeBtn" onClick={() => dispatch(descModalClose())} >
					<svg className="btn__close" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#009b77" strokeWidth="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#009b77" strokeWidth="1.5" strokeLinecap="round"></path> </g></svg>
				</button>
				<div className="details__container" >
					<div className="details__picture" style={{ backgroundImage: `url(${list.img})` }}></div>
					<h5 className='details__desc'>{description}</h5>
					<div className="details__refs">
						{
							list.url ? <a className='details__url' href={list.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>{translations[lang].modal.project}</a> : ''
						}
						{
							list.git ? <a className='details__url' href={list.git} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>{translations[lang].modal.git}</a> : ''
						}
					</div>
				</div>

			</div>
		</div >
	)
}

export default ModalDetails

