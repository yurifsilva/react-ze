import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsActions from '../../Store/ProductsActions';
import Categories from '../Categories/Categories';
import ProductComponent from './Components/Product';
import ZeApi from '../../Services/ZeApi';
import Loading from '../Loading/Loading';

import './Products.scss'

export default function Products() {
	const Products = useSelector(state => {
		return state.Products;
	});
	const HasProducts = Products.Items && Products.Items.length > 0;
	const dispatch = useDispatch();
	
	useEffect(() => {
		async function search() {
			try {
				dispatch(ProductsActions.setLoadingProducts());

				const resultProducts = await ZeApi.getProducts();
				
				dispatch(ProductsActions.setProducts({Products: resultProducts.data.poc.products}));
				
			} catch (error) {
				console.error(error);
			} finally {
				dispatch(ProductsActions.setFinishLoadingProducts());
			}
			
		}
		
		search();

	}, [dispatch]);
	return (
		<>
			<Categories />

			{ Products && Products.IsLoading ? <Loading /> : null }
			<ul className="products">
				{HasProducts ?  Products.Items.map((Product)=> {
					return <li key={Product.id}><ProductComponent Product={Product} /> </li>
				}) : null}
			</ul>
			
			
		</>
	);
}
