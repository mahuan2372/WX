<template>
  <div>
    <div id="box">
      <div class="header">
      </div>
      <div class="nth_one">
        <p>
          <span>已积分商铺(家)</span>
        </p>
        <p>
          <span>{{info.totalCount}}</span>
        </p>
      </div>
      <div class="content" id="scrolldiv">
        <div class="nth_two">
          <ul class="set-select" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="item in lables">
              <div>
                <p>{{item.merName}}</p>
                <p>{{item.merAddress}}</p>
              </div>
              <div @click="getlink(item.platCode, item.memId,item.merId )">
                <p class="poin">当前积分:
                  <span>{{item.point}}</span>分</p>
                <p>查看详情></p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mypoints-view',
  created() {
    // this.$http({ funCode: 6007, currentPage: 1, pageSize: 10 }).then(
    //   (data) => {
    //     this.info = data;
    //     this.labels = data.dataList;
    //   }, (err) => {
    //     console.log("请求失败")
    //   }
    // )
  },
  data() {
    return {
      info: {
        totalCount: ""
      },
      lables: [],
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
      this.$http({ funCode: 6007, currentPage: currentPage, pageSize: this.pageSize }).then((data) => {
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
    getlink: function(platCode, memId, merId) {
      this.$http({ funCode: 6008, platCode: platCode, merId: merId, memId: memId }).then(
        (data) => {
          if (data.exchangeType == 0) {
            this.$router.push({ path: '/jifenlijin', query: { point: data.point, ruleId: data.ruleId, dataList: data.dataList, platCode: platCode, merId: merId, memId: memId } })
          } else {
            this.$router.push({ path: '/jifenlipin', query: { point: data.point, ruleId: data.ruleId, validDay: data.validDay, dataList: data.dataList, platCode: platCode, merId: merId, memId: memId } })
          }
        }, (err) => {
          console.log("请求失败")
        }
      )
    },

  }
}
</script>
<style  scoped>
.poin {
  cursor: pointer
}

.header {
  width: 100%;
  height: 120px;
  background: #2396ff;
}

.nth_one {
  width: 672px;
  height: 180px;
  background: white;
  border-radius: 10px;
  margin-top: -87px;
  margin: -87px auto;
  margin-bottom: 20px;
}

.nth_one p:nth-of-type(1) {
  font-size: 28px;
  color: #222222;
  padding-top: 50px;
  text-align: center;
}

.nth_one p:nth-of-type(2) {
  font-size: 40px;
  color: #ff5339;
  text-align: center;
}


.content {
  width: 100%;
  height: calc(100% - 240px);
  overflow: scroll;
  position: absolute;
}

.content .nth_two {
  width: 670px;
  height: 644px;
  margin: 20px auto;
}

.content .nth_two ul li {
  width: 100%;
  height: 200px;
  border-radius: 10px;
  background: white;
  display: flex;
  margin-bottom: 20px;
}

.content .nth_two ul li div:nth-of-type(1) {
  width: 350px;
  height: 162px;
  margin-top: 20px;
  margin-left: 20px;
  float: left;
  border-radius: 10px;
  background-image: url("../img/img-tupian.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.content .nth_two ul li div:nth-of-type(1) p:nth-of-type(1) {
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  padding-top: 40px;
}

.content .nth_two ul li div:nth-of-type(1) p:nth-of-type(2) {
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  padding-top: 25px;
}

.content .nth_two ul li div:nth-of-type(2) {
  width: 348px;
  height: 100%;
  float: left;
  position: relative;
}

.content .nth_two ul li div:nth-of-type(2) p:nth-of-type(1) {
  font-size: 28px;
  line-height: 200px;
  padding-left: 36px;
}

.content .nth_two ul li div:nth-of-type(2) p:nth-of-type(2) {
  color: #999999;
  font-size: 18px;
  margin-top: -40px;
  padding-left: 200px;
}

.content .nth_three {
  width: 100%;
  height: 644px;
}

.content .nth_three ul li {
  width: 100%;
  height: 200px;
  display: flex;
  border-radius: 10px;
  background: white;
  margin-bottom: 20px;
}

.content .nth_three ul li div:nth-of-type(1) {
  width: 300px;
  height: 162px;
  margin-top: 20px;
  margin-left: 20px;
  float: left;
  border-radius: 10px;
  background-image: url("../img/img-tupian.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.content .nth_three ul li div:nth-of-type(1) p:nth-of-type(1) {
  font-size: 24px;
  color: #ffffff;
  text-align: center;
  padding-top: 48px;
}

.content .nth_three ul li div:nth-of-type(1) p:nth-of-type(2) {
  font-size: 18px;
  color: #ffffff;
  text-align: center;
  padding-top: 32px;
}

.poin {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.content .nth_three ul li div:nth-of-type(2) {
  width: 348px;
  height: 100%;
  float: left;
}

.content .nth_three ul li div:nth-of-type(2) p {
  font-size: 24px;
  padding-left: 62px;
}

.content .nth_three ul li div:nth-of-type(2) p:nth-of-type(1) {
  padding-top: 30px;
  padding-left: 86px;
}

.content .nth_three ul li div:nth-of-type(2) p:nth-of-type(2),
.content .nth_three ul li div:nth-of-type(2) p:nth-of-type(3) {
  padding-top: 22px;
}

.content .nth_three ul li div:nth-of-type(2) p:nth-of-type(4) {
  color: #999999;
  font-size: 18px;
  padding-top: 18px;
  padding-left: 246px;
}
</style>
