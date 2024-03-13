import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modalOpen } from '../redux/slices/modalSlice'
import { selectTheme } from '../redux/slices/themeSlice'
const Header = () => {
	const { theme } = useSelector(selectTheme)
	const dispatch = useDispatch()

	return (
		<header>
			<div className="container">
				<div className="header__container">
					<svg className='logo' xmlns="http://www.w3.org/2000/svg" height='50' viewBox="0 -2 30 30"><path fill={theme === 'light' ? '#232323' : '#dadee1'} fillRule="evenodd" d="m29.717 12.531-5.991-4.843c-.394-.384-1.033-.384-1.426 0-.394.384-.394 1.006 0 1.391l5.191 4.197-5.191 4.198a.965.965 0 0 0 0 1.39c.393.385 1.032.385 1.426 0l5.991-4.843c.21-.205.299-.477.285-.745.014-.268-.075-.541-.285-.745ZM7.7 17.473l-5.191-4.197L7.7 9.079c.394-.385.394-1.008 0-1.391-.393-.385-1.032-.385-1.426 0L.283 12.531c-.21.204-.299.477-.285.745-.014.268.075.54.285.745l5.991 4.843c.394.385 1.033.385 1.426 0a.9662.9662 0 0 0 0-1.391ZM21.96.123c-.479-.271-1.09-.11-1.366.358l-12.5 24.087c-.277.469-.162 1.186.366 1.339.645.187 1.09.111 1.366-.358l12.5-24.088c.276-.469.112-1.067-.366-1.338Z" /></svg>
					<a href="mailto:uvarov6799@gmail.com" className="mail" style={{ color: `${theme === 'light' ? '#232323' : '#dadee1'}` }}>uvarov6799@gmail.com</a>
					<div className="nav" onClick={() => dispatch(modalOpen())}>my works</div>
				</div>
				{/* <div className='header__circle'></div> */}
			</div>
		</header>
	)
}

export default Header
