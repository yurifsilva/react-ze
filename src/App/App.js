import React from 'react';
import { Provider } from 'react-redux';
import Store from '../Store/index';
import Routes from './Routes'
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import './App.scss'

export default function App() {

	return (
		<Provider store={Store}>
			<div className="app">
				<Header />
				<Routes />
				<Footer />
			</div>
		</Provider>
	);
}
