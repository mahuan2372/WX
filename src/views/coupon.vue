<template>
  <div>
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

.youhui {
  width: 100%;
  overflow: scroll;
  position: absolute;
  margin-top:20px;
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
