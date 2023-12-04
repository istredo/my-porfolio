import React from 'react';
import './scss/index.scss';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Modal from './components/Modal';



function App() {
	const [open, setOpen] = React.useState(false);


	return (
		<div className="App">
			<Header open={open} setOpen={setOpen} />
			<Content />
			<Footer />
			<Modal open={open} setOpen={setOpen} />
		</div>
	);
}

export default App;
