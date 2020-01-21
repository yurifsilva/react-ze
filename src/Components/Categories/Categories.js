import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategoriesActions from '../../Store/CategoriesActions';
import ProductsActions from '../../Store/ProductsActions';
import ZeApi from '../../Services/ZeApi';
import Loading from '../Loading/Loading';
import CategoryComponent from './Components/Category';

import './Categories.scss';

export default function Categories() {
	const Categories = useSelector(state => state.Categories);
	const [IsLoading, setIsLoading] = useState(false);
	const HasCategories = Categories && Categories.length > 0;
	const dispatch = useDispatch();

	const handleSetProducts = async (Category) => {
		try {
			const resultProducts = await ZeApi.getProducts('532', '', Category.id);

			dispatch(ProductsActions.setProducts({Products: resultProducts.data.poc.products}));
			console.log('new', resultProducts.data.poc.products)
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		async function getCategories() {
			try {
				setIsLoading(true);

				const resultCategoriesSearch = await ZeApi.getAllCategoriesSearch();
				dispatch(CategoriesActions.setCategories({Categories: resultCategoriesSearch.data.allCategory}));

				console.log('resultCategoriesSearch', resultCategoriesSearch);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false)
			}
			
		}
		
		getCategories();

	}, [dispatch]);


	return (
		<>
			{HasCategories ?  Categories.map((Category)=> {
				return <div key={Category.id} onClick={() => handleSetProducts(Category)}><CategoryComponent  Category={Category} /> </div>
			}) : null}
			{ IsLoading ? <Loading /> : null }
		</>
	);
}
