import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { modalList } from '../utils/modalList'
import { testClose } from '../redux/slices/testSlice'



const ModalDetails = () => {
	const dispatch = useDispatch()
	const testId = useSelector((state) => state.test.id)
	const testOpen = useSelector((state) => state.test.open)
	let list = modalList[testId]

	return (
		<div className="details__modal">
			<div className={testOpen ? "details__bg details__active" : "details__bg"} onClick={() => dispatch(testClose())}>
				<div className="details__container" >
					<div className="details__picture" style={{ backgroundImage: `url(${list.img})` }}></div>
					<h5 className='details__desc'>{list.description}</h5>
					{
						list.url ? <a className='details__url' href={list.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>К проекту</a> : ''
					}
				</div>

			</div>
		</div >
	)
}

export default ModalDetails
