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
			dispatch(ProductsActions.setLoadingProducts());
			const resultProducts = await ZeApi.getProducts('532', '', Category.id);

			dispatch(ProductsActions.setProducts({Products: resultProducts.data.poc.products}));
		} catch (error) {
			console.error(error);
		} finally {
			dispatch(ProductsActions.setFinishLoadingProducts());
		}
	};

	useEffect(() => {
		async function getCategories() {
			try {
				setIsLoading(true);

				const resultCategoriesSearch = await ZeApi.getAllCategoriesSearch();

				dispatch(CategoriesActions.setCategories({Categories: resultCategoriesSearch.data.allCategory}));

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
			<div className="categories">
				{HasCategories ?  Categories.map((Category)=> {
					return (
						<div key={Category.id} onClick={() => handleSetProducts(Category)}><CategoryComponent  Category={Category} /> </div>
					)
				}) : null}
				{HasCategories ? <div onClick={() => handleSetProducts({id: null})}><CategoryComponent  Category={{title: 'Limpar'}}/> </div> : null}
			</div>
			
			{ IsLoading ? <Loading /> : null }
		</>
	);
}
