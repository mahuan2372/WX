<template>
  <div>

    <div class="header">
      <p>金百万烤鸭(花乡店)</p>
      <p>
        <span>有效(张)</span>
        <span>已使用(张)</span>
        <span>已过期(张)</span>
      </p>
      <p>
        <span>8</span>
        <span>12</span>
        <span>24</span>
      </p>
    </div>
       <router-link to="mycard">
    <div class="act"> 
        <span>我的会员卡</span>
        <span><img src="../img/icon-jiantou-hei.png"></span>
    </div>
     </router-link>
    <div class="youhui">
      <div class="juan">
        <div class="juan_ion">
          <div>
            <span>新用户特色代金券</span>
            <span>15</span>
            <span>元</span>
          </div>
          <div>
            <span>有效日期至2108.06.11</span>
            <span>满15元可用</span>
          </div>
        </div>
      </div>
      <div class="juan">
        <div class="juan_ion">
          <div>
            <span>新用户特色代金券</span>
            <span>15</span>
            <span>元</span>
          </div>
          <div>
            <span>有效日期至2108.06.11</span>
            <span>满15元可用</span>
          </div>
        </div>
      </div>
      <div class="juan">
        <div class="juan_ion">
          <div>
            <span>新用户特色代金券</span>
            <span>15</span>
            <span>元</span>
          </div>
          <div>
            <span>有效日期至2108.06.11</span>
            <span>满15元可用</span>
          </div>
        </div>
      </div>
      <div class="juan_sav">
        <div class="juan_ion">
          <img src="../img/img-yishiyong.png">
          <div style="color:#999999">
            <span>老用户大回馈折扣劵</span>
            <span>95</span>
            <span>折</span>
          </div>
          <div>
            <span>有效日期至2108.06.11</span>
            <span>满299元可用</span>
          </div>
        </div>
      </div>

      <div class="juan_sav">
        <div class="juan_ion">
          <img src="../img/img-yiguoqi.png">
          <div style="color:#999999">
            <span>老用户大回馈折扣劵</span>
            <span>95</span>
            <span>折</span>
          </div>
          <div>
            <span>有效日期至2108.06.11</span>
            <span>满299元可用</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'coupondetails-view',
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
  padding-left: 68px;
}

.header p:nth-of-type(2) span:nth-of-type(2) {
  padding-left: 128px;
}

.header p:nth-of-type(2) span:nth-of-type(3) {
  padding-left: 108px;
}

.header p:nth-of-type(3) {
  font-size: 40px;
  color: #ffffff;
  padding-top: 20px;
}

.header p:nth-of-type(3) span:nth-of-type(1) {
  margin-left: 110px;
}

.header p:nth-of-type(3) span:nth-of-type(2) {
  margin-left: 204px;
}

.header p:nth-of-type(3) span:nth-of-type(3) {
  margin-left: 188px;
}

.act {
  width: 100%;
  height: 88px;
  background: white;
  font-size: 28px;
  line-height: 88px;
  margin-bottom: 20px;
}

.act span:nth-of-type(1) {
  margin-left: 30px;
}

.act span:nth-of-type(2) {
  float: right;
  margin-right: 30px;
}

.act span:nth-of-type(2) img {
  width: 18px;
  height: 30px;
}

.youhui {
  width: 100%;
  height: calc(100% - 396px);
  overflow: scroll;
  position: absolute;
  top:396px;
}

.juan {
  width: 672px;
  height: 248px;
  margin-bottom: 18px;
  margin: 0 auto;
  margin-bottom: 20px;
  background: white;
  border-radius: 10px;
  position: relative;
}

.juan img {
  position: absolute;
  top: 0;
  right: 0;
}

.juan .juan_ion {
  width: 640px;
  height: 218px;
  border: 1px dashed #b5b5b5;
  position: absolute;
  margin:15px auto;
  border-radius: 10px;
}

.juan .juan_ion div:nth-of-type(1) {
  width: 630px;
  height: 145px;
  position: relative;
}

.juan .juan_ion div:nth-of-type(1) span:nth-of-type(1) {
  position: absolute;
  top: 50px;
  left: 24px;
  font-size: 32px;
  display: inline-block;
}

.juan .juan_ion div:nth-of-type(1) span:nth-of-type(2) {
  position: absolute;
  right: 74px;
  font-size: 96px;
  color: #ff5339;
  display: inline-block;
}

.juan .juan_ion div:nth-of-type(1) span:nth-of-type(3) {
  position: absolute;
  top: 80px;
  font-size: 24px;
  right: 30px;
  color: #ff5339;
  display: inline-block;
}

.juan .juan_ion div:nth-of-type(2) {
  width: 100%;
  height: 75px;
  display: flex;
  font-size: 22px;
}

.juan .juan_ion div:nth-of-type(2) span:nth-of-type(1) {
  color: #999999;
  margin-left: 20px;
}

.juan .juan_ion div:nth-of-type(2) span:nth-of-type(2) {
  color: #222222;
  flex: 1;
  text-align: right;
  margin-left: 20px;
}

.juan_sav {
  width: 672px;
  height: 248px;
  margin:0 auto;
  margin-bottom: 18px;
  background: white;
  border-radius: 10px;
  position: relative;
}

.juan_sav img {
  position: absolute;
  top: 0;
  right: 0;
}

.juan_sav .juan_ion {
  width: 640px;
  height: 218px;
  border: 1px dashed #b5b5b5;
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 10px;
}

.juan_sav .juan_ion img {
  width: 50px;
  height: 50px;
}

.juan_sav .juan_ion div:nth-of-type(1) {
  width: 630px;
  height: 145px;
  position: relative;
}

.juan_sav .juan_ion div:nth-of-type(1) span:nth-of-type(1) {
  position: absolute;
  top: 50px;
  left: 24px;
  font-size: 32px;
  display: inline-block;
}

.juan_sav .juan_ion div:nth-of-type(1) span:nth-of-type(2) {
  position: absolute;
  right: 74px;
  font-size: 96px;
  color: #999999;
  display: inline-block;
}

.juan_sav .juan_ion div:nth-of-type(1) span:nth-of-type(3) {
  position: absolute;
  top: 80px;
  font-size: 24px;
  right: 30px;
  color: #999999;
  display: inline-block;
}

.juan_sav .juan_ion div:nth-of-type(2) {
  width: 100%;
  height: 75px;
  font-size: 22px;
  display: flex
}

.juan_sav .juan_ion div:nth-of-type(2) span:nth-of-type(1) {
  color: #999999;
  margin-left: 24px;
}

.juan_sav .juan_ion div:nth-of-type(2) span:nth-of-type(2) {
  color: #999999;
  flex: 1;
  text-align: right;
  margin-left: 2px;
}
</style>
