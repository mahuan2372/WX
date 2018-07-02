<template>
  <div>

    <div class="header">
      <p>{{merName}}</p>
      <p>
        <span>有效(张)</span>
        <span>已使用(张)</span>
        <span>已过期(张)</span>
      </p>
      <p>
        <span>{{info.unusedNum}}</span>
        <span>{{info.usedNum}}</span>
        <span>{{info.overTimeNum}}</span>
      </p>
    </div>
    </router-link>
    <div class="youhui" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
      <div class="juan" v-for="item in lables" :key="item.name">
        <div class="juan_ion" :class="{'Highlight': Highlight(item.state) , 'gray': !Highlight(item.state) }">
          <img src="../img/img-yishiyong.png" v-if="item.state == 1 ">
          <img src="../img/img-yiguoqi.png" v-if="item.state == 3 ">
          <div>
            <span>{{item.name}}</span>
            <span>{{item.disAmt}}</span>
            <span>{{item.type | judgeType}}</span>
          </div>
          <div>
            <span>有效日期至{{item.validDay}} </span>
            <span v-if="item.limitAmt != '' ">满{{item.limitAmt}}元可用</span>
          </div>
        </div>       
      </div>
      <!--<div class="juan_sav">
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
                    </div>-->
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let merId = this.$route.query.merId;
    let memId = this.$route.query.memId;
    let platCode = this.$route.query.platCode;
    let merName = this.$route.query.merName;
    this.merName = merName;
    this.memId = memId;
    this.merId = merId;
    this.platCode = platCode;
    // this.$http({ funCode: 6006, merId: merId, memId: memId, platCode: platCode, currentPage: 1, pageSize: 10 }).then(
    //   (data) => {
    //     this.info = data;
    //     this.lables = data.dataList;
    //     console.log(data.dataList.length)
    //   }, (err) => {
    //     console.log(err)
    //   }
    // )
  },

  data() {
    return {
      info: {
        unusedNum: "",
        usedNum: "",
        overTimeNum: ""
      },
      lables: [],
      platCode:"",
      merId:"",
      memId:"",
      merName: "",
      currentPage: 0,
      pageSize: 10,
      judge: false,
      list: [],
    }
  },
  methods: {
    getlist(currentPage,memId,merId,platCode) {
      this.$http({ funCode: 6006,merId: this.merId,memId:this.memId, platCode:this.platCode, currentPage: currentPage, pageSize: this.pageSize,}).then((data) => {
        if (this.judge) {
          return
        }
        if (data.dataList.length < 10) {
          this.judge = true;
          this.loading = false;
        }
        this.list.push.apply(this.list, data.dataList);
        this.info = data;
        this.lables = this.list;
        console.log(this.list)
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
  filters: {
    judgeType: function(value) {
      if (!value) return ''
      if (value == 1 || value == 2) {
        return "元"
      }
      return "折"
    },

  },

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

.juan img {
  width: 50px;
  height: 50px;
}

.act span:nth-of-type(2) img {
  width: 18px;
  height: 30px;
}

.youhui {
  width: 100%;
  height: calc(100% - 300px);
  overflow: scroll;
  position: absolute;
  top: 300px;
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

.Highlight {
  width: 640px;
  height: 218px;
  border: 1Px dashed red;
  position: absolute;
  margin-left: 16px;
  margin-top: 15px;
  border-radius: 10px;
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
  margin-right: 40px;
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
