import React from 'react'

const Content = () => {
	return (
		<section className='content'>
			<div className="container">
				<div className="content__container">
					<div className="left">
						<h2>Hi,<br /> I'm <span>Andrey</span></h2>
						<h3>Front-end developer</h3>
						<a className='button__contact' href="#" target="_blank" rel="noopener noreferrer">
							Contact me
							<span className='button__line button__line--top'></span>
							<span className='button__line button__line--right'></span>
							<span className='button__line button__line--bottom'></span>
							<span className='button__line button__line--left'></span>
						</a>

					</div>
					<div className="right">
						<h4 className='descVisible'>Are you looking for developer to your projects?<br />You can rely on me!</h4>

						<a className='download__CV' href="#" target="_blank" rel="noopener noreferrer">
							Download CV
							<svg className='download__svg' xmlns="http://www.w3.org/2000/svg" width='40' fill="none" viewBox="0 0 24 24">
								<path stroke="#009b77" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21H3m15-10-6 6m0 0-6-6m6 6V3" />
							</svg>
						</a>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Content
