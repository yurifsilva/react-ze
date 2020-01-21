const INITIAL_STATE = [];

const products = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_PRODUCTS':
			return [...action.Products];
		default:
			return state;
	}
}

export default products;