<template>
  <div>
    <div class="header">
      <p>{{info.mobile}}</p>
      <p>欢迎你使用网联客卡劵功能</p>
    </div>
    <router-link to="myphone">
      <div class="act_T_a">
        <span>我的充值卡</span>
        <span>{{info.storedCardCount}}张</span>
      </div>
    </router-link>
    <router-link to="mycoupon">
      <div class="act_T_c">
        <span>我的优惠券</span>
        <span>{{info.couponCount}}张></span>
      </div>
    </router-link>
    <router-link to="mypoints">
      <div class="act_T_e">
        <span>我的积分</span>
        <span>已有积分商铺</span>
        <span>{{info.pointCount}}家></span>
      </div>
    </router-link>
    <router-link to="totalcard">
      <div class="act_T_b">
        <span>我的会员卡</span>
        <span>{{info.memCardCount}}张></span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'home-view',
  created() {
    this.$http({ funCode: 6001 }).then(
      (data) => {
      this.info=data;
      console.log(data)
      }, (err) => {
        console.log("请求失败")
      }
    )
  },
  data() {
    return {
      info: {
        mobile: '',
        storedCardCount: "",
        couponCount: '',
        pointCount: "",
        memCardCount:""
      }
    }
  }
} 
</script>
<style  scoped>
a {
  width: 100%;
}



.header p:nth-of-type(1) {
  font-size: 46px;
  color: #ffffff;
  padding-top: 66px;
  text-align: center;
}

.header p:nth-of-type(2) {
  font-size: 32px;
  color: #ffffff;
  padding-top: 30px;
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
