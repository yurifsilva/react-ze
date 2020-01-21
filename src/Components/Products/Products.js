import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductsActions from '../../Store/ProductsActions';
import Categories from '../Categories/Categories';
import ProductComponent from './Components/Product';
import ZeApi from '../../Services/ZeApi';
import Loading from '../Loading/Loading';

export default function Products() {
	const Products = useSelector(state => {
		return state.Products;
	});
	const [IsLoading, setIsLoading] = useState(false);
	const HasProducts = Products && Products.length > 0;
	const dispatch = useDispatch();
	
	useEffect(() => {
		async function search() {
			try {
				setIsLoading(true);

				
				const resultProducts = await ZeApi.getProducts();

				dispatch(ProductsActions.setProducts({Products: resultProducts.data.poc.products}));

				console.log('resultProducts', resultProducts.data.poc.products);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false)
			}
			
		}
		
		search();

	}, [dispatch]);
	return (
		<>
			<Categories />

			{HasProducts ?  Products.map((Product)=> {
				return <ProductComponent key={Product.id} Product={Product} /> 
			}) : null}
			
			{ IsLoading ? <Loading /> : null }
		</>
	);
}
