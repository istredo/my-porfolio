import React from 'react';
import './scss/index.scss';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Modal from './components/Modal';



function App() {
	const [open, setOpen] = React.useState(false);
	const [theme, setTheme] = React.useState(() => {
		const mode = JSON.parse(localStorage.getItem('theme'))
		return mode || 'light'
	});

	return (
		<div className="App" id={theme}>
			<Header open={open} setOpen={setOpen} />
			<Content />
			<Footer theme={theme} setTheme={setTheme} />
			<Modal open={open} setOpen={setOpen} />
		</div>
	);
}

export default App;
