import axios from 'axios';
import query from './Query/ZeGraphQl';
const api = axios.create({
  baseURL: 'https://api.code-challenge.ze.delivery/public/graphql',
});

api.getAddress = async function (algorithm = 'NEAREST', lat = '-23.632919', long = '-46.699453', now = '2017-08-01T20:00:00.000Z' ) {
	try {
		const result = await api.post(``, {
			query: query.pocSearchMethod,
			variables: {
				algorithm,
				lat,
				long,
				now 
			}
		});
		return result.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

api.getProducts = async function (id = '532', search = '', categoryId = null) {
	try {
		const result = await api.post(``, {
			query: query.poc,
			variables: {
				id,
				search,
				categoryId
			}
		});
		return result.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

api.getAllCategoriesSearch = async function (algorithm = 'NEAREST', lat = '-23.632919', long = '-46.699453', now = '2017-08-01T20:00:00.000Z' ) {
	try {
		const result = await api.post(``, {
			query: query.allCategoriesSearch,
			variables: {
				algorithm,
				lat,
				long,
				now 
			}
		});
		return result.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}


export default api;
