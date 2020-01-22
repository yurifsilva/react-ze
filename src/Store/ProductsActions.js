const setProducts = ({ Products }) => {
	return {type: 'SET_PRODUCTS', Products}
}

const setLoadingProducts = () => {
	return {type: 'REQUEST_PRODUCTS'};
}

const setFinishLoadingProducts = () => {
	return {type: 'FINISH_REQUEST_PRODUCTS'};
}

export default {
	setProducts,
	setLoadingProducts,
	setFinishLoadingProducts
}

