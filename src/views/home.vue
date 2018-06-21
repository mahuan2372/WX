<template>
  <div>
    <div class="header">
      <p>18653467693</p>
      <p>欢迎你使用网联客卡劵功能</p>
    </div>
    <router-link to="myphone">
      <div class="act_T_a">
        <span>我的充值卡</span>
        <span>5张</span>
      </div>
    </router-link>
    <router-link to="mycoupon">
      <div class="act_T_c">
        <span>我的优惠券</span>
        <span>5张></span>
      </div>
    </router-link>
    <router-link to="mypoints">
      <div class="act_T_e">
        <span>我的积分</span>
        <span>已有积分商铺</span>
        <span>7家></span>
      </div>
    </router-link>
     <router-link to="totalcard">
    <div class="act_T_b">    
        <span>我的会员卡</span>
        <span>2张></span>      
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home-view',
  data() {
    return {}
  }
} 
</script>
<style  scoped>
a{
  width:100%;
}
.header {
  width: 100%;
  height: 280px;
  background-image: url("../img/img-tupian2.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.header p:nth-of-type(1) {
  font-size: 36px;
  color: #ffffff;
  padding-top: 66px;
  text-align: center;
}

.header p:nth-of-type(2) {
  font-size: 32px;
  color: #ffffff;
  padding-top: 68px;
  text-align: center;
}

.act_T_a,
.act_T_b,
.act_T_c,
.act_T_e {
  width: 100%;
  height: 88px;
  background: white;
  font-size: 28px;
  margin-bottom: 20px;
  line-height: 88px;
}

.act_T_a span:nth-of-type(1),
.act_T_b span:nth-of-type(1),
.act_T_c span:nth-of-type(1) {
  margin-left: 30px;
}

.act_T_a span:nth-of-type(2),
.act_T_b span:nth-of-type(2),
.act_T_c span:nth-of-type(2) {
  float: right;
  margin-right: 30px;
}

.act_T_e span:nth-of-type(1) {
  margin-left: 30px;
}

.act_T_e span:nth-of-type(2) {
  margin-left: 300px;
  color: #999999;
}

.act_T_e span:nth-of-type(3) {
  float: right;
  margin-right: 30px;
}
</style>
