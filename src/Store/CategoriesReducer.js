const INITIAL_STATE = []

const categories = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_CATEGORIES':
			return [...action.Categories];
		default:
			return state;
	}
}

export default categories;