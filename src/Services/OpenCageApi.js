import axios from 'axios';
const api = axios.create({
  baseURL: 'https://api.opencagedata.com/geocode/v1/json',
});

api.getAddressParams = async function (PlaceName) {
	const params = {
		q: PlaceName,
		key: 'd75c8fb7f8d74e039afd3ed148012678'
	}
	const result = await api.get(``, {params});
	return result.data;
}

export default api;
