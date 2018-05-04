
<template>
	<!--
    	描述：添加企业信息
    -->
    <div style="min-height: 100%;">
    	<div style="min-height: 30%;">
    		<div style="float: left;">
    			<img src="../../assets/log.jpg" style="width: 100px;margin-left: 4%;rgin-top: 4%;"/>
    			
    		</div>
    	</div>
    	<div class="company-project-details">
    		<hr class="hr1" />
	    	<mt-field label="企业名称" placeholder="请输入企业名称" v-model="RecruitmentPosition"></mt-field>
			<mt-field label="企业规模" placeholder="请输入企业规模"  v-model="EduRequirements"></mt-field>
			<mt-field label="属       性" placeholder="请输入属性"  v-model="FormOfWork"></mt-field>
			<mt-field label="行       业" placeholder="请输入行业"  v-model="FormOfWork"></mt-field>
			<hr class="hr1" />
    	</div>
    	<div class="company-project-info">
    		<mt-cell title="企业简介" to="./companyDetails" is-link value=""></mt-cell>
    		<mt-cell title="重点项目" to="./addCompanyInfo" is-link value=""></mt-cell>
    		<hr class="hr1" />
    	</div> 
    	<div style="min-height: 20%;">
    		<mt-button type="primary">提交</mt-button>
    	</div>
    </div>
</template>

<script>
export default {
  name: 'addCompanyInfo', 
  data() {
     return { 
      
    };
  }
};
</script>
<style>
   .company-project-info{
   	min-height: 20%;
   	text-align: left;
   }
   .company-project-details{
   	min-height: 40%;
   	margin-top: 30%;
   	text-align: left;
   }
</style>
