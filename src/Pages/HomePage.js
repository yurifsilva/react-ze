import React from 'react';
import { useSelector } from 'react-redux';
import AddressComponent from '../Components/Address/Address';
import ProductsComponent from '../Components/Products/Products';

import './HomePage.scss'

export default function HomePage() {
	const Address = useSelector(state => state.Address);

	return (
		<div className="home">
			{ Address && Address.geometry ? <ProductsComponent /> : <AddressComponent /> }
		</div>
	);
}
