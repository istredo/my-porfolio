import React from 'react';
import { useSelector } from 'react-redux'

import './scss/index.scss';
import './scss/animation.scss';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Modal from './components/Modal';
import ModalDetails from './components/ModalDetails';
import Animation from './components/Animation';
import { selectTheme } from './redux/slices/themeSlice'


function App() {

	const { theme } = useSelector(selectTheme)
	return (
		<div className="App" id={theme}>
			<Header />
			<Content />
			<Footer />
			<Modal />
			<ModalDetails />
			<Animation />
		</div>
	);
}

export default App;
