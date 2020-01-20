const INITIAL_STATE = {}

const address = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SET_ADDRESS':
			return { ...action.Address };
		default:
			return state;
	}
}

export default address;