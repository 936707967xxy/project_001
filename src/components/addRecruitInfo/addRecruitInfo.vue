<template>
	<!--
    	描述：添加学历信息
    -->
    <div class="body-title">
    	<mt-cell title="下一个页面" to="./addCompanyInfo" is-link value="测试"></mt-cell>
    	<mt-field label="招聘职位：" placeholder="请输入招聘职位" v-model="RecruitmentPosition"></mt-field>
		<mt-field label="学历要求：" placeholder="请选择学历要求"  v-model="EduRequirements"></mt-field>
		<mt-field label="上班形式：" placeholder="请输入上班形式"  v-model="FormOfWork"></mt-field>
		<mt-field label="薪资待遇：" placeholder="请输入薪资待遇"  v-model="Salary"></mt-field>
		<hr class="hr1" />
		<mt-field label="要求：" placeholder="" type="textarea" rows="4" v-modal="Requirement"></mt-field>
		<mt-field label="福利待遇：" placeholder="请输入福利待遇"  v-model="FringeBenefits"></mt-field>
		<hr class="hr1" />
		<mt-field label="工作内容：" placeholder="" type="textarea" rows="4" v-modal="WorkContext"></mt-field>
		<mt-field label="工作时间：" placeholder="请输入工作时间"  v-model="WorkTime"></mt-field>
		<div class="margin-top-10">
		 <mt-button type="primary">提交</mt-button>
		</div>
    </div>
</template>

<script>
export default {
  name: 'addRecruitInfo', 
  data() {
     return { 
      
    };
  }
};
</script>

<style>
	@import 'addRecruitInfo.css';
</style>