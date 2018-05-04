<template>
	<div style="height: 100%;">
		<mt-cell title="下一个页面" to="./addRecruitInfo" is-link value="测试"></mt-cell>
		<div class="body-title-second">
			<div style="height: 20%;">
				<div style="float: right;">
					<img src="../../assets/1187081.png" style="width: 20px;"/>
					&nbsp;&nbsp;
					<img src="../../assets/1200960.png" style="width: 20px;"/>
					&nbsp;&nbsp;
				</div>
			</div>
			<div class="cell-height-55">
				<div class="float-left cell-width-30 cell-height-100">
					<img src="../../assets/log.jpg" class="company-img"/>
				</div>
				<div class="float-left cell-width-70">
					<div class="company-title">
		      			<span class="float-left"><b>上海红上金融服务有限公司</b></span>
		      	    </div>
		      	    <div class="company-title-details">
		      			<span class="float-left">
		      				<span style="color:green;">&diams;</span>实名认证
		      				&nbsp;&nbsp;&nbsp;
		      				50关注>
		      				&nbsp;&nbsp;&nbsp;
		      				50浏览量>
		      			</span>
		      	    </div>
				</div>
			</div>
			<div class="mint-button-tabbar">
				<div>  
					<mt-button size="small" class="mint-button-small mint-button-default" @click.native.prevent="active = 'tab-container1'">公司简介</mt-button>  
				    <mt-button size="small" class="mint-button-small mint-button-default" @click.native.prevent="active = 'tab-container2'">重点项目</mt-button>  
				    <mt-button size="small" class="mint-button-small mint-button-default" @click.native.prevent="active = 'tab-container3'">职位需求</mt-button>
				    <mt-button size="small" class="mint-button-small mint-button-default" @click.native.prevent="active = 'tab-container4'">联&nbsp;&nbsp;系</mt-button>
			    </div> 
			</div>
		</div>
		
		<!--
        	描述：context
        -->
		<div class="mint-context-tabbar">
			<mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>  
             <!--
             	描述：公司简介
             -->
             <mt-tab-container-item id="tab-container1">  
              <div class="cell-width-100 text-align-left margin-text-left-2">
              	公司信息
              </div>
              <div class="margin-top-20 text-align-left margin-text-left-2 font-size-12">
              	上海红上金融服务有限公司
              </div>
              <div class="company-body-div">
              	<span style="font-size: 22px;color:green;">&diams;</span>实名认证
              </div>
              <div class="company-body-div-10">
              	属性：股份制
              </div>
              <div class="company-body-div-10">
              	行业：IT行业
              </div>
              <div class="company-body-info">
              	红上公司是一家创立于2012年，致力于为高净值人群提供多元化金融服务的综合财富管理公司，
              	业务范围覆盖财富管理、资产管理、海外资产配置、互联网金融等。
                                               截止2017年四季度，红上已在中国大陆拥有超过100家分支机构，在职员工逾5000人，
                                               管理资产规模突破100亿元人民币，且业务已辐射至美国、新加坡、马耳他、
                                               澳大利亚等海外市场，成为近年来中国金融市场上快速崛起的行业新星。
              </div>
             </mt-tab-container-item> 
            
            <!--
             	描述：重点项目
             -->
            <mt-tab-container-item id="tab-container2">  
             <div class="company-body-project">
              	红上公司是一家创立于2012年，致力于为高净值人群提供多元化金融服务的综合财富管理公司，
              	业务范围覆盖财富管理、资产管理、海外资产配置、互联网金融等。
              </div>
              <div style="background-color: #4CAF50;" class="margin-top-20">
              	<img src="../../assets/1200960.png" />
              </div>
            </mt-tab-container-item>  
            
            <!--
             	描述：职位需求
            -->
            <mt-tab-container-item id="tab-container3">
            	<div style="min-height: 100%;">
            		<div style="height: 30%; width: 100%;text-align: left;">
            			<hr class="hr1" />
            		 <div style="margin-left: 2%;">
	            	  	网站设计
	            	  </div>
	            	  <div class="company-work">
	            	  	大专/全职
	            	  </div>
	            	  <div style="color: red;" class="company-work">
	            	  	8k-15k
	            	  </div>
	            	  <div class="company-apply">
	            	  	2018-05-01  &nbsp;&nbsp;&nbsp;已申请100人
	            	  </div>
	            	  <hr class="hr2" />
            		</div>
            		
            		
            		<div class="cell-height-30 cell-width-100 text-align-left">
            		 <div class="company-work">
	            	  	<b>职位：</b>平面设计
	            	 </div>
	            	 <div class="company-work">
	            	  	<b>要求：</b>精通PS等相关软件
	            	 </div>
	            	 <div class="company-work">
	            	  	<b>福利：</b>
	            	  	<label class="work-welfare">五险一金</label>
	            	  	<label class="work-welfare">交通补助</label>
	            	 </div>
	            	 <hr class="hr2" />
            		</div>
            		
            		<div class="cell-height-40 cell-width-100 text-align-left">
            		 <div class="company-work">
	            	  	<b>工作内容：</b>平面设计
	            	 </div>
	            	 <div class="company-work">
	            	  	<b>工作时间：</b>朝九晚六
	            	 </div>
	            	 <hr class="hr1" />
            		</div>
            	</div>
            </mt-tab-container-item>
            
            <!--
             	描述：联系
            -->
            <mt-tab-container-item id="tab-container4">
            	<div style="min-height: 100%;">
            		<div class="cell-height-70 cell-width-100 text-align-left">
            			<hr class="hr1" />
            		  <div class="company-work">
	            	  	<b>总机电话：</b>0000-628895
	            	  </div>
	            	  <div class="company-work">
	            	  	<b>人力资源邮箱：</b>123456789@sina.com
	            	  </div>
	            	  <hr class="hr2" />
            		</div>
            		
            		<div class="cell-height-30 cell-width-100 text-align-left">
            			<div class="company-work">
	            	  	 <b>地址：</b>上海市虹桥车站20栋
	            	    </div>
            			<hr class="hr1"/>
            		</div>
            	</div>
            </mt-tab-container-item>
          </mt-tab-container>
		</div>
	
	   </div>
</template>

<script>
export default {
  name: 'companyDetails', 
  data() {
     return { 
      active: 'tab-container1'
    };
  }
};
</script>
<style>
@import 'companyDetails.css';
</style>
