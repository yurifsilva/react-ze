import { createStore, combineReducers } from "redux";
import Address from './AddressReducer';
import Categories from './CategoriesReducer';

const Reducers = combineReducers({
	Address,
	Categories
})
const store = createStore(Reducers);

export default store;