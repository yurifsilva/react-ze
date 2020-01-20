import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import ZeApi from '../../Services/ZeApi';

export default function Products() {
	const Address = useSelector(state => state.Address);
	const [Categories, setCategories] = useState([]);
	const [Products, setProducts] = useState([]);
	const [IsLoading, setIsLoading] = useState(false);
	
	useEffect(() => {
		async function search() {
			try {
				setIsLoading(true);

				const resultCategoriesSearch = await ZeApi.getAllCategoriesSearch();
				setCategories(resultCategoriesSearch.data.allCategory);

				const resultProducts = await ZeApi.getProducts();
				setProducts(resultProducts.data.poc.products);

				console.log('resultCategoriesSearch', resultCategoriesSearch);
				console.log('resultProducts', resultProducts);
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false)
			}
			
		}
		
		search();

	}, [Address]);
	return (
		<div>
			{Categories && Categories.map((Category)=> {
			return <div key={Category.id}>{Category.title}</div>
			})}
			{Products && Products.map((Product)=> {
			return <div key={Product.id}>{Product.title}</div>
			})}
		</div>
	);
}
