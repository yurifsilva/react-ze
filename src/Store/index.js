import { createStore, combineReducers } from "redux";
import Address from './AddressReducer';

const Reducers = combineReducers({
	Address
})
const store = createStore(Reducers);

export default store;