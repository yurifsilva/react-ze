import { createStore, combineReducers } from "redux";
import Address from './AddressReducer';
import Categories from './CategoriesReducer';
import Products from './ProductsReducer';

const Reducers = combineReducers({
	Address,
	Categories,
	Products
})
const store = createStore(Reducers);

export default store;