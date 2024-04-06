import React from 'react'
import { useSelector } from 'react-redux'
import { selectTheme } from '../redux/slices/themeSlice'

const Animation = () => {
	const { theme } = useSelector(selectTheme)
	// let styles
	// React.useEffect(() => {
	// 	styles = theme
	// 	console.log(styles)
	// }, [theme])
	return (
		<div className='wrapper'>
			<div className={theme === 'dark' ? `star` : `star-${theme}`} />
			<div className={theme === 'dark' ? `starTwo` : `starTwo-${theme}`} />
			<div className={theme === 'dark' ? `starThree` : `starThree-${theme}`} />
			<div className={theme === 'dark' ? `starFour` : `starFour-${theme}`} />
		</div>
	)
}

export default Animation
