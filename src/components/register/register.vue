<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <mt-header fixed title="欢迎注册"></mt-header>
    <div class="content">
    	<mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    	<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
    	<mt-field label="发送验证码" v-model="captcha">
    		<!--
        	描述：颜色切换 primary-》default
        -->
    		<mt-button type="default" class="button-login-Send-code">剩余60s</mt-button>
    	</mt-field>
    </div>
    <div class="button-login">
    	<mt-button type="primary" size="large" v-on:click="submitInfo">确  认</mt-button>
    	<mt-cell title="下一个页面" to="./Home" is-link value="测试"></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      msg: '欢迎注册'
    }
  },
  methods: {
    submitInfo: function (event) {
      //alert('Hello ' + this.username + '!'+this.password)
    }
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
.button-login-Send-code{
	width: 100%;
}
</style>
