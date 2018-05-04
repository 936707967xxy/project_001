<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <mt-header fixed title="欢迎登录"></mt-header>
    <div class="content">
    	<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    	<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    </div>
    <div class="button-login">
    	<mt-button type="primary" size="large" v-on:click="submitForm('loginForm')">登录</mt-button>
    	<mt-cell title="下一个页面" to="./register" is-link value="测试"></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: '欢迎登录'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
}
.button-login{
	margin-top: 15%;
}
</style>
