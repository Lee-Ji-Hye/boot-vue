import axios from 'axios';
import { settingInterceptor } from './common/interceptors';

function createAxiosInstance() {
	const axiosInstance = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});

	return settingInterceptor(axiosInstance);
}

const api = createAxiosInstance();

// 회원가입
function signup(userData) {
	console.log(process.env);
	return api.post('signup', userData);
}

export { signup };
