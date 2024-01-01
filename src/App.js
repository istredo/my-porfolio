import React from 'react';
import './scss/index.scss';
import { useSelector } from 'react-redux'


import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Modal from './components/Modal';


function App() {

	const themes = useSelector((state) => state.theme.theme)

	return (
		<div className="App" id={themes}>
			<Header />
			<Content />
			<Footer />
			<Modal />
		</div>
	);
}

export default App;
