<template>
	<!-- 
  <form @submit.prevent="actionSubmit()">
    <div class="leftmargin">
      <label for="username">id: </label>
      <input type="text" id="username" v-model="username"/>
      <br/>
      <label for="pwd">pwd: </label>
      <input type="password" id="pwd" v-model="pwd"/>
      <br/>  
      <br/>  
      <v-btn
        type="submit"
        color="accent"
        elevation="2"
        outlined
        plain
      >로그인 {{msg}} </v-btn>
    </div> 
  </form>  -->
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="actionSubmit" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="pwd">pw:</label>
					<input id="pwd" type="text" v-model="pwd" />
				</div>
				<button type="submit" class="btn">로그인 {{ msg }}</button>
			</form>
		</div>
	</div>
</template>

<script>
import { signup } from '@/api/index';
import { validateEmail } from '@/utils/validation';

export default {
	name: 'loginForm',
	data() {
		return {
			// form value
			username: '',
			pwd: '',

			// result value
			msg: '',
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		},
	},
	methods: {
		async actionSubmit() {
			const userData = {
				username: this.username,
				pwd: this.pwd,
			};

			const response = await signup(userData);
			console.log(response);

			let loginState = response.data;
			this.$store.commit('setLoginState', loginState); //store > mutaion
			this.$store.commit('setToken', 'asdasdasd');
			this.$router.push('/mainHome');
			// this.msg = `(${response.data})`;
			// this.initForm();
		},
		initForm() {
			this.username = '';
			this.pwd = '';
		},
	},
};
</script>

<style>
.leftmargin {
	margin-left: 20px;
	margin-top: 20px;
}
</style>
