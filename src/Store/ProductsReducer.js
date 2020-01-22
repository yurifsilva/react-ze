const INITIAL_STATE = {
	Items: [],
	IsLoading: false
};

const products = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'REQUEST_PRODUCTS':
			return Object.assign({}, state, {IsLoading: true});
		case 'FINISH_REQUEST_PRODUCTS':
			return Object.assign({}, state, {IsLoading: false});
		case 'SET_PRODUCTS':
			console.log(action.Products);
			return {Items: [...action.Products]};
		default:
			return state;
	}
}

export default products;