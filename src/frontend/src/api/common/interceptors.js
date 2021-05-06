import store from '@/store/index';

export function settingInterceptor(instance) {
	instance.interceptors.request.use(
		function (config) {
			//inserceptors user token 설정
			config.headers.Authorization = store.state.token;
			return config;
		},
		function (error) {
			return Promise.reject(error);
		},
	);

	// Add a response interceptor
	instance.interceptors.response.use(
		function (response) {
			return response;
		},
		function (error) {
			return Promise.reject(error);
		},
	);

	return instance;
}
