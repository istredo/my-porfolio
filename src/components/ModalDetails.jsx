import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalList } from '../utils/modalList'
import { descModalClose, selectModalDetails } from '../redux/slices/descModalSlice'



const ModalDetails = () => {
	const { id, open } = useSelector(selectModalDetails)
	const dispatch = useDispatch()
	let list = modalList[id]

	return (
		<div className="details__modal">
			<div className={open ? "details__bg details__active" : "details__bg"} onClick={() => dispatch(descModalClose())}>
				<div className="details__container" >
					<div className="details__picture" style={{ backgroundImage: `url(${list.img})` }}></div>
					<h5 className='details__desc'>{list.description}</h5>
					<div className="details__refs">
						{
							list.url ? <a className='details__url' href={list.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>К проекту</a> : ''
						}
						{
							list.git ? <a className='details__url' href={list.git} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>Github</a> : ''
						}
					</div>
				</div>

			</div>
		</div >
	)
}

export default ModalDetails
