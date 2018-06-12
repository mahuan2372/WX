<template>
  <div>
    <div id="box">
      <div class="header">
        <p>金百万烤鸭(花乡店)</p>
        <p>
          <span>当前余额(元)</span>
          <span>累计储值(元)</span>
        </p>
        <p>
          <span>9264</span>
          <span>9264</span>
        </p>
      </div>
      <div class="act">
        <router-link to="/">
          <span>我的会员卡</span>
          <span><img src="../img/icon-jiantou-hei.png"></span>
        </router-link>
      </div>
      <div class="act_V_one">
        <ul class="get-select">
          <li>
            <span><img src="../img/img-xiaofei.png"></span>
            <span style="color:#fe6f6c">-500元</span>
            <span>2017-9-09-08</span>
            <span>22:26:33</span>
          </li>
          <li>
            <span><img src="../img/img-chuzhi.png"></span>
            <span>+500元</span>
            <span>2017-9-09-08</span>
            <span>22:26:33</span>
          </li>
          <li>
            <span><img src="../img/img-xiaofei.png"></span>
            <span style="color:#fe6f6c">-500元</span>
            <span>2017-9-09-08</span>
            <span>22:26:33</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'details-view',
  data() {
    return {}
  }
} 
</script>
<style  scoped>
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
  padding-top: 42px;
  text-align: center;
}

.header p:nth-of-type(2) {
  font-size: 28px;
  color: #ffffff;
  padding-top: 60px;
}

.header p:nth-of-type(2) span:nth-of-type(1) {
  padding-left: 99px;
}

.header p:nth-of-type(2) span:nth-of-type(2) {
  padding-left: 175px;
}

.header p:nth-of-type(3) {
  font-size: 40px;
  color: #ffffff;
  padding-top: 20px;
}

.header p:nth-of-type(3) span:nth-of-type(1) {
  margin-left: 132px;
}

.header p:nth-of-type(3) span:nth-of-type(2) {
  margin-left: 236px;
}

.act {
  width: 100%;
  height: 88px;
  background: white;
  font-size: 28px;
  line-height: 88px;
}

.act span:nth-of-type(1) {
  margin-left: 30px;
}

.act span:nth-of-type(2) {
  margin-left: 503px;
}

.act span:nth-of-type(2) img {
  width: 18px;
  height: 30px;
}

.act_V_one {
  width: 100%;
  height: calc(100% - 362px);
  overflow: scroll;
  background: white;
  margin-top: 20px;
}

.act_V_one ul {
  width: 100%;
  height: 900px;
}

.act_V_one ul li {
  width: 655px;
  height: 129px;
  border-bottom: 1px solid #e0e0de;
  line-height: 129px;
  margin-left: 30px;
  display: flex;
  align-items: center;
}

.act_V_one ul li span:nth-of-type(1) {
  margin-left: 15px;
}

.act_V_one ul li span:nth-of-type(1) img {
  width: 80px;
  display: block;
}

.act_V_one ul li span:nth-of-type(2) {
  text-align: right;
  margin-left: 20px;
  font-size: 40px;
}

.act_V_one ul li span:nth-of-type(3),
.act_V_one ul li span:nth-of-type(4) {
  margin-left: 30px;
  text-align: right;
  flex: 1;
  font-size: 26px;
  color: #999999;
}

.act_V_one ul li span:nth-of-type(4) {
  margin-left: 20px;
}
</style>
