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
						<span></span>

						<h3>Based in Moscow <br />I'm developer and a little bit designer</h3>
						<h4>Are you looking for developer to your projects?<br />You can rely on me!</h4>

						<a href="#" target="_blank" rel="noopener noreferrer">
							Download CV
							{/* svg download */}
						</a>
					</div>
				</div>
			</div>

		</section>
	)
}

export default Content
