<template>
  <div>
    <div class="youhui" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <div class="juan" v-for="item in lables">
        <div class="juan_ion" :class="{'Highlight': Highlight(item.state) , 'gray': !Highlight(item.state) }">
          <div>
            <span>礼金劵</span>
            <span>{{item.giftCardAmt}}</span>
            <!--<img src="../img/img-yiguoqi.png" height="70" width="70" v-show="!Highlight(item.state)">-->
            <img src="../img/img-yishiyong.png" v-if="item.state == 1 ">
            <img src="../img/img-yiguoqi.png" v-if="item.state == 2 ">
            <span>元</span>
          </div>
          <div>
            <span>{{item.validDay}}</span>
          </div>
        </div>
      </div>
      <!-- <div class="juan_sav">
                  <div class="juan_ion">
                    <img src="../img/img-yishiyong.png">
                    <div style="color:#999999">
                      <span>老用户大回馈折扣劵</span>
                      <span>95</span>
                      <span>折</span>
                    </div>
                    <div>
                      <span>有效日期至2108.06.11</span>
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
                    </div>
                  </div>
                </div> -->

    </div>
  </div>
</template>

<script>
export default {
  name: 'coupondetails-view',
  created() {
    let merId = this.$route.query.merId;
    let memId = this.$route.query.memId;
    let platCode = this.$route.query.platCode;
    this.merId = merId;
    this.memId = memId;
    this.platCode = platCode;
    // this.$http({ funCode: 6015, merId: merId, memId: memId, platCode: platCode, currentPage: 1, pageSize: 10 }).then(
    //   (data) => {
    //     this.lables = data.dataList;
    //     console.log(data.dataList)
    //   }, (err) => {
    //     console.log(err)
    //   }
    // )
  },
  data() {
    return {
      lables: [],
      memId: "",
      merId: "",
      platCode: "",
      currentPage: 0,
      pageSize: 10,
      judge: false,
      list: [],
    }
  },
  mounted: function() {

  },
  methods: {
    getlist(currentPage) {
      this.$http({ funCode: 6015, platCode: this.platCode, merId: this.merId, memId: this.memId, currentPage: currentPage, pageSize: this.pageSize }).then((data) => {
        if (this.judge) {
          return
        }
        if (data.dataList.length < 10) {
          this.judge = true;
          this.loading = false;
        }
        this.list.push.apply(this.list, data.dataList);
        this.lables = this.list;
      })
    },
    loadMore() {
      if (this.judge) {
        return
      }
      this.loading = true;
      this.currentPage++
      this.getlist(this.currentPage)
    },
    Highlight: function(state) {
      if (state == 0) {
        return true
      }
      return false
    },

  },
} 
</script>
<style  scoped>
.youhui {
  width: 100%;
  overflow: scroll;
  position: absolute;
  margin-top: 20px;
}

img {
  width: 50px;
  height: 50px;
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

.Highlight {
  width: 640px;
  height: 218px;
  border: 1Px dashed red;
  position: absolute;
  margin-left: 16px;
  margin-top: 15px;
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
  top: 30px;
}

.juan .juan_ion div:nth-of-type(1) span:nth-of-type(3) {
  position: absolute;
  top: 100px;
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
  margin: 0 auto;
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

.gray {
  width: 640px;
  height: 218px;
  border: 1Px dashed #b5b5b5;
  position: absolute;
  top: 15px;
  left: 15px;
  border-radius: 10px;
  color: #999999;
}

.gray span {
  color: #999999 !important;
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
  margin-top: 30px;
}

.juan_sav .juan_ion div:nth-of-type(1) span:nth-of-type(3) {
  position: absolute;
  top: 100px;
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
