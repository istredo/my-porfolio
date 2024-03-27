import React from 'react'
import { useLang } from '../utils/useLang'
import { getWindowWidth } from '../utils/windowWidth'
const Content = () => {
	const { lang, translations } = useLang()
	const contactBtn = () => {
		setTimeout(() => window.location = 'https://t.me/istredo', 1500);
	}
	const downloaBbtn = () => {
		setTimeout(() => window.location.href = '/Uvarov_Andrey_Frotend.pdf', 1500);
	}
	const { windowWidth } = getWindowWidth()
	return (
		<section className='content'>
			<div className="container">
				<div className="content__container">
					<div className="left">
						<div className="left__top">
							<h2>{translations[lang].main_page.content_hi}, {translations[lang].main_page.content_i} <span>{translations[lang].main_page.content_name}</span></h2>
							<h3>{translations[lang].main_page.content_fe}</h3>
						</div>
						{
							windowWidth <= 600
								? <a className='button__contact' target="_blank" rel="noopener noreferrer" onClick={() => contactBtn()} draggable='false'>
									{translations[lang].btn.mobile}
									<span className='button__line button__line--top'></span>
									<span className='button__line button__line--right'></span>
									<span className='button__line button__line--bottom'></span>
									<span className='button__line button__line--left'></span>
								</a>
								: <a className='button__contact' href='https://t.me/istredo' target="_blank" rel="noopener noreferrer">
									{translations[lang].btn.contact}
									<span className='button__line button__line--top'></span>
									<span className='button__line button__line--right'></span>
									<span className='button__line button__line--bottom'></span>
									<span className='button__line button__line--left'></span>
								</a>
						}
					</div>
					<div className="right">
						<h4 className='descVisible'>{translations[lang].main_page.content_info}<br />{translations[lang].main_page.content_rely}
						</h4>
						{
							windowWidth <= 600
								? <a className='download__CV' target="_blank" rel="noopener noreferrer" download onClick={() => downloaBbtn()} draggable='false'>
									{translations[lang].btn.cv}
									<svg className='download__svg' xmlns="http://www.w3.org/2000/svg" width='40' fill="none" viewBox="0 0 24 24">
										<path stroke="#009b77" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21H3m15-10-6 6m0 0-6-6m6 6V3" />
									</svg>
								</a>
								: <a className='download__CV' href="/Uvarov_Andrey_Frotend.pdf" target="_blank" rel="noopener noreferrer" download>
									{translations[lang].btn.cv}
									<svg className='download__svg' xmlns="http://www.w3.org/2000/svg" width='40' fill="none" viewBox="0 0 24 24">
										<path stroke="#009b77" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21H3m15-10-6 6m0 0-6-6m6 6V3" />
									</svg>
								</a>
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Content







