import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { themeLight, themeDark } from '../redux/slices/themeSlice'
import { selectTheme } from '../redux/slices/themeSlice'
import { useLang } from '../utils/useLang'
import { getWindowWidth } from '../utils/windowWidth'

const Footer = () => {
	let toggleRef = React.useRef();
	const { theme } = useSelector(selectTheme)
	const { lang, translations } = useLang()
	const dispatch = useDispatch()
	const fillTheme = theme === 'light' ? '#232323' : '#dadee1'

	const themesHandler = () => {
		const newTheme = theme === 'light' ? dispatch(themeDark()) : dispatch(themeLight());
		localStorage.setItem('theme', JSON.stringify(newTheme));
		return newTheme
	}
	const { windowWidth } = getWindowWidth()
	return (
		<footer className={windowWidth <= 600 ? 'footer__mobile' : ''}>
			<div className="container">
				<div className="footer__container">
					<div className="footer__icons">
						<a href="https://t.me/istredo" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"><path fill={fillTheme} d="m64 13-9 41c-1 4-4 6-6 6l-4-1h-1L27 45l-1 8c0 2-2 3-4 3a4 4 0 0 1-3-2l-3-9a2 2 0 0 1 0-1 2 2 0 0 1 2-2 2 2 0 0 1 2 1l2 8 1-5a5 5 0 0 1 5-4l2 1 17 12 2 1c1 0 2-1 2-3l9-41-2-4h-2L7 28c-4 1-4 3-1 4l8 3a2 2 0 0 0 2-1l22-13a4 4 0 0 1 5 1 4 4 0 0 1 0 5L31 38a2 2 0 0 1-1 1 2 2 0 0 1-2-2l1-2 11-11-22 14a6 6 0 0 1-5 0l-8-2c-4-1-5-5-5-6s1-4 5-6L55 5a7 7 0 0 1 3-1l5 2 1 7zM30 50a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" /></svg>
						</a>
						<a href="https://github.com/istredo" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill={fillTheme} d="M192 368a16 16 0 1 1 32 0 16 16 0 0 1-32 0zm157 126-13 2c-27 0-48-21-48-48v-58c0-20 13-37 31-43 34-12 65-41 65-75v-32c0-15-6-29-16-41v-36c0-18-14-24-32-14l-25 14c-7-2-15-3-23-3h-64c-8 0-16 1-23 3l-25-14c-18-10-32-4-32 13v37a66 66 0 0 0-16 41v32c0 23 14 44 35 59a16 16 0 1 1-21 24c-27-20-46-50-46-83v-32c0-19 6-36 16-51v-48c0-35 29-47 64-27l27 16 21-2h64l21 2 27-16c35-20 64-8 64 27v48c10 15 16 32 16 51v32c0 48-39 88-86 104v1c-6 2-10 8-10 15v56c0 9 7 16 16 16h4a224 224 0 1 0-159 3h1a10 10 0 0 0 0-19c-53-2-53-64-70-64a16 16 0 1 1 0-32h8c32 0 27 64 72 64 18 0 32 14 32 32v28c0 15-13 28-28 28l-5-1a256 256 0 1 1 158-9z" /></svg>
						</a>
						<a href="https://wa.me/79996796799" target="_blank" rel="noopener noreferrer">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66" ><path fill={fillTheme} d="m45 40-6-1-2-2 2-2 7 1a4 4 0 0 1 4 6l-2 3c-4 5-15 4-24-4-9-7-13-17-8-22l4-3h1a4 4 0 0 1 4 3l3 6-1 3-3-1-2-6a1 1 0 0 0-1-1 5 5 0 0 0-2 1c-3 4 0 12 7 17s16 8 19 4h1a1 1 0 0 0 0-1 1 1 0 0 0-1-1zM6 42a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm26 22a32 32 0 0 1-14-3 5 5 0 0 0-4-1l-6 2a5 5 0 0 1-3 0 5 5 0 0 1-3-6l2-6a2 2 0 1 1 4 0v1l-2 6a1 1 0 0 0 1 1l6-2a9 9 0 0 1 6 1 28 28 0 0 0 13 3A28 28 0 1 0 4 34a2 2 0 1 1-4 0 30 30 0 0 1 0-2 32 32 0 1 1 32 32z" /></svg>
						</a>

					</div>
					<div className="switch">
						<input ref={toggleRef} onClick={themesHandler} type="checkbox" id="toggle__button" className="toggle__button" checked={theme === 'light' ? '' : 'checked'} onChange={() => { }} draggable='false' />
						<label htmlFor="toggle__button" className="text">{translations[lang].footer.switch}</label>
					</div>

				</div>

			</div>
		</footer>
	)
}

export default Footer

