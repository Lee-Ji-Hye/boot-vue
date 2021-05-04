import axios from 'axios';

const api = axios.create({
  baseURL : process.env.VUE_APP_API_URL
});

// 회원가입
function signup(userData) {
  console.log(process.env);
  return api.post('signup', userData);
}

export { signup }