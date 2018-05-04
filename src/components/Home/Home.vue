<template>
  <div class="page-navbar">  
    <!-- navbar -->  
    <mt-navbar class="page-part" v-model="selected">  
      <mt-tab-item id="1">全部</mt-tab-item>  
      <mt-tab-item id="2">岗位招聘</mt-tab-item>  
      <mt-tab-item id="3">项目招聘</mt-tab-item>  
    </mt-navbar>  
  
  
    <!-- tabcontainer -->  
    <mt-tab-container v-model="selected" style="height: 100%;">
    	<!--全部--->
      <mt-tab-container-item id="1">
      	<mt-index-list>
      		<!--测试链接-->
      		<mt-cell title="下一个页面" to="./companyDetails" is-link value="测试"></mt-cell>
      		<hr/>
				    <div class="list-body list-body-top">
				    	<div class="list-div">
		      			<div style="float: left;font-weight: bold;margin-left: 2%;">
		      				JAVA开发工程师 
		      			</div>
		      			<div style="float: right;width: 20%;margin-top: 1%;font-size: 12px;color: red;">
		      				8-15k
		      			</div>
      		    </div>
      		    <div class="list-div">
		      			<div style="float: left;font-size:12px;margin-left: 2%;color: red;">
		      			 &bull;&nbsp;&nbsp;nps/max  &nbsp;&nbsp; &clubs;北京
		      			</div>
		      			<div style="float: right;font-size: 12px;width: 20%;">
		      				12月15日
		      			</div>
      		    </div>
      		    <div >
      		    	<div style="float: left;width: 20%;">
		      				<div style="float: left;width: 100%;">
                      <img src="../../assets/log.jpg" style="width: 60px;"/>
		      			  </div>
      			    </div>
      			    <div style="float:right;width: 80%;margin-top:2%;">
      			    	 <div style="width: 100%;">
		      			    	<div style="font-weight:lighter;font-size: 14px;">
		      				      <span style="float: left;">上海红上金融服务有限公司</span>
		      			      </div>
		      			      <div style="font-weight:lighter;float: left;font-size: 12px;">
		      				      <span style="float: left;">上市公司 9000-10000人&nbsp;&darr; 高科技</span>
		      			      </div>
      			      </div>
      			    </div>
      		    </div>
				    </div>
				    <hr/>
				    <!--第二部分-->
				    	<div class="list-body">
				    	  <div class="list-div">
		      			<div style="float: left;font-weight: bold;margin-left: 2%;">
		      				JAVA开发工程师 
		      			</div>
		      			<div style="float: right;width: 20%;margin-top: 1%;font-size: 12px;color: red;">
		      				8-15k
		      			</div>
      		    </div>
      		    <div class="list-div">
		      			<div style="float: left;font-size:12px;margin-left: 2%;color: red;">
		      			 &bull;&nbsp;&nbsp;nps/max  &nbsp;&nbsp; &clubs;北京
		      			</div>
		      			<div style="float: right;font-size: 12px;width: 20%;">
		      				12月15日
		      			</div>
      		    </div>
      		    <div >
      		    	<div style="float: left;width: 20%;">
		      				<div style="float: left;width: 100%;">
                      <img src="../../assets/log.jpg" style="width: 60px;"/>
		      			  </div>
      			    </div>
      			    <div style="float:right;width: 80%;margin-top:2%;">
      			    	 <div style="width: 100%;">
		      			    	<div style="font-weight:lighter;font-size: 14px;">
		      				      <span style="float: left;">上海红上金融服务有限公司</span>
		      			      </div>
		      			      <div style="font-weight:lighter;float: left;font-size: 12px;">
		      				      <span style="float: left;">上市公司 9000-10000人&nbsp;&darr; 高科技</span>
		      			      </div>
      			      </div>
      			    </div>
      		    </div>
				    </div>
				    <hr />
				    <!--第三部分-->
				    	<div class="list-body">
				    	  <div class="list-div">
		      			<div style="float: left;font-weight: bold;margin-left: 2%;">
		      				JAVA开发工程师 
		      			</div>
		      			<div style="float: right;width: 20%;margin-top: 1%;font-size: 12px;color: red;">
		      				8-15k
		      			</div>
      		    </div>
      		    <div class="list-div">
		      			<div style="float: left;font-size:12px;margin-left: 2%;color: red;">
		      			 &bull;&nbsp;&nbsp;nps/max  &nbsp;&nbsp; &clubs;北京
		      			</div>
		      			<div style="float: right;font-size: 12px;width: 20%;">
		      				12月15日
		      			</div>
      		    </div>
      		    <div >
      		    	<div style="float: left;width: 20%;">
		      				<div style="float: left;width: 100%;">
                      <img src="../../assets/log.jpg" style="width: 60px;"/>
		      			  </div>
      			    </div>
      			    <div style="float:right;width: 80%;margin-top:2%;">
      			    	 <div style="width: 100%;">
		      			    	<div style="font-weight:lighter;font-size: 14px;">
		      				      <span style="float: left;">上海红上金融服务有限公司</span>
		      			      </div>
		      			      <div style="font-weight:lighter;float: left;font-size: 12px;">
		      				      <span style="float: left;">上市公司 9000-10000人&nbsp;&darr; 高科技</span>
		      			      </div>
      			      </div>
      			    </div>
      		    </div>
				    </div>
				    <hr />
				    <!--第四部分-->
				    <div class="list-body">
				    	<div class="list-div">
		      			<div style="float: left;font-weight: bold;margin-left: 2%;">
		      				JAVA开发工程师 
		      			</div>
		      			<div style="float: right;width: 20%;margin-top: 1%;font-size: 12px;color: red;">
		      				8-15k
		      			</div>
      		    </div>
      		    <div class="list-div">
		      			<div style="float: left;font-size:12px;margin-left: 2%;color: red;">
		      			 &bull;&nbsp;&nbsp;nps/max  &nbsp;&nbsp; &clubs;北京
		      			</div>
		      			<div style="float: right;font-size: 12px;width: 20%;">
		      				12月15日
		      			</div>
      		    </div>
      		    <div >
      		    	<div style="float: left;width: 20%;">
		      				<div style="float: left;width: 100%;">
                      <img src="../../assets/log.jpg" style="width: 60px;"/>
		      			  </div>
      			    </div>
      			    <div style="float:right;width: 80%;margin-top:2%;">
      			    	 <div style="width: 100%;">
		      			    	<div style="font-weight:lighter;font-size: 14px;">
		      				      <span style="float: left;">上海红上金融服务有限公司</span>
		      			      </div>
		      			      <div style="font-weight:lighter;float: left;font-size: 12px;">
		      				      <span style="float: left;">上市公司 9000-10000人&nbsp;&darr; 高科技</span>
		      			      </div>
      			      </div>
      			    </div>
      		    </div>
				    </div>
				    <hr />
				    <!--第五-->
				    <div class="list-body">
				    	<div class="list-div">
		      			<div style="float: left;font-weight: bold;margin-left: 2%;">
		      				JAVA开发工程师 
		      			</div>
		      			<div style="float: right;width: 20%;margin-top: 1%;font-size: 12px;color: red;">
		      				8-15k
		      			</div>
      		    </div>
      		    <div class="list-div">
		      			<div style="float: left;font-size:12px;margin-left: 2%;color: red;">
		      			 &bull;&nbsp;&nbsp;nps/max  &nbsp;&nbsp; &clubs;北京
		      			</div>
		      			<div style="float: right;font-size: 12px;width: 20%;">
		      				12月15日
		      			</div>
      		    </div>
      		    <div >
      		    	<div style="float: left;width: 20%;">
		      				<div style="float: left;width: 100%;">
                      <img src="../../assets/log.jpg" style="width: 60px;"/>
		      			  </div>
      			    </div>
      			    <div style="float:right;width: 80%;margin-top:2%;">
      			    	 <div style="width: 100%;">
		      			    	<div style="font-weight:lighter;font-size: 14px;">
		      				      <span style="float: left;">上海红上金融服务有限公司</span>
		      			      </div>
		      			      <div style="font-weight:lighter;float: left;font-size: 12px;">
		      				      <span style="float: left;">上市公司 9000-10000人&nbsp;&darr; 高科技</span>
		      			      </div>
      			      </div>
      			    </div>
      		    </div>
				    </div>
				    <hr />
        </mt-index-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">  
        <mt-index-list>
        	<!--招聘岗位-->
        	    <hr />
				    	<div class="list-body list-body-top">
				    	  <div class="list-div">
		      			<div style="float: left;font-weight: bold;margin-left: 2%;">
		      				JAVA开发工程师 
		      			</div>
		      			<div style="float: right;width: 20%;margin-top: 1%;font-size: 12px;color: red;">
		      				8-15k
		      			</div>
      		    </div>
      		    <div class="list-div">
		      			<div style="float: left;font-size:12px;margin-left: 2%;color: red;">
		      			 &bull;&nbsp;&nbsp;nps/max  &nbsp;&nbsp; &clubs;北京
		      			</div>
		      			<div style="float: right;font-size: 12px;width: 20%;">
		      				12月15日
		      			</div>
      		    </div>
      		    <div >
      		    	<div style="float: left;width: 20%;">
		      				<div style="float: left;width: 100%;">
                      <img src="../../assets/log.jpg" style="width: 60px;"/>
		      			  </div>
      			    </div>
      			    <div style="float:right;width: 80%;margin-top:2%;">
      			    	 <div style="width: 100%;">
		      			    	<div style="font-weight:lighter;font-size: 14px;">
		      				      <span style="float: left;">上海红上金融服务有限公司</span>
		      			      </div>
		      			      <div style="font-weight:lighter;float: left;font-size: 12px;">
		      				      <span style="float: left;">上市公司 9000-10000人&nbsp;&darr; 高科技</span>
		      			      </div>
      			      </div>
      			    </div>
      		    </div>
				    </div>
				    <hr />
        </mt-index-list>
      </mt-tab-container-item> 
      
      <mt-tab-container-item id="3">  
        <mt-index-list>
        	<!--招聘岗位-->
        	    <hr />
				    	<div class="list-body list-body-top">
				    	  <div class="list-div">
		      			<div style="float: left;font-weight: bold;margin-left: 2%;">
		      				JAVA开发工程师 
		      			</div>
		      			<div style="float: right;width: 20%;margin-top: 1%;font-size: 12px;color: red;">
		      				8-15k
		      			</div>
      		    </div>
      		    <div class="list-div">
		      			<div style="float: left;font-size:12px;margin-left: 2%;color: red;">
		      			 &bull;&nbsp;&nbsp;nps/max  &nbsp;&nbsp; &clubs;北京
		      			</div>
		      			<div style="float: right;font-size: 12px;width: 20%;">
		      				12月15日
		      			</div>
      		    </div>
      		    <div >
      		    	<div style="float: left;width: 20%;">
		      				<div style="float: left;width: 100%;">
                      <img src="../../assets/log.jpg" style="width: 60px;"/>
		      			  </div>
      			    </div>
      			    <div style="float:right;width: 80%;margin-top:2%;">
      			    	 <div style="width: 100%;">
		      			    	<div style="font-weight:lighter;font-size: 14px;">
		      				      <span style="float: left;">上海红上金融服务有限公司</span>
		      			      </div>
		      			      <div style="font-weight:lighter;float: left;font-size: 12px;">
		      				      <span style="float: left;">上市公司 9000-10000人&nbsp;&darr; 高科技</span>
		      			      </div>
      			      </div>
      			    </div>
      		    </div>
				    </div>
				    <hr />
        </mt-index-list>
      </mt-tab-container-item>  
    </mt-tab-container>  
  </div>  
</template>

<script>
export default {  
  name: 'Home',  
  data() {  
    return {  
      selected: '1'
    };  
  }  
};  
</script>
<style>
	.list-body{
		min-height: 19%;
	}
	.list-div{
		height: 25px;
	}
	.list-div-bottom{
		height: 50px;
	}
	.list-tile{
		float: left;
	}
	.list-body-top{
		margin-top: 7px;
	}
</style>
