
<template>
    <div>
        <div id="box">
            <div class="header">
            </div>
            <div class="nth_one">
                <p>
                    <span>当前余额汇总(元)</span>
                    <span>对应商铺(家)</span>
                </p>
                <p>
                    <span>{{info.totalBalance}}</span>
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
                            <div>
                                <router-link :to="{path:'phonedetails',query:{accountId:item.accountId}}">
                                    <p class="web_siz">当前余额:
                                        <span>{{item.balance}}</span>元</p>
                                    <p>累计充值:
                                        <span>{{item.totalStored}}</span>元</p>
                                    <p class="qing">查看详情></p>
                                </router-link>
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
    name: 'myphone-view',
    created() {

    },
    data() {
        return {
            info: {
                totalBalance: "",
                totalCount: ""
            },
            lables: [],
            currentPage: 0,
            pageSize: 10,
            judge: false,
            list: [],
        }
    },
    methods: {
        // golist(accountId) {
        //     this.$router.push({ path: 'phonedetails', query: { accountId:accountId}})
        // },
        getlist(currentPage) {
            this.$http({ funCode: 6003, currentPage: currentPage, pageSize: this.pageSize }).then((data) => {
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
    }
} 
</script>
<style  scoped>
.header {
    width: 100%;
    height: 120px;
    background: #2396ff;
}

#box {
    width: 100%;
    height: 100%;
    position: absolute;
}

.nth_one {
    width: 672px;
    height: 180px;
    background: white;
    border-radius: 10px;
    margin: -87px auto;
    margin-bottom: 20px;
}

.nth_one p:nth-of-type(1) {
    font-size: 28px;
    color: #222222;
    padding-left: 64px;
    padding-top: 50px;
}

.nth_one p:nth-of-type(1) span:nth-of-type(2) {
    margin-left: 154px;
}

.nth_one p:nth-of-type(2) {
    font-size: 40px;
    color: #ff5339;
    display: flex;
}

.nth_one p:nth-of-type(2) span {
    width: 50%;
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
    margin-top: 20px;
    margin: 0 auto;
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
}

.content .nth_two ul li div:nth-of-type(2) p {
    font-size: 28px;
    padding-left: 30px;
}

.web_siz {
    padding-top: 45px;
}

.content .nth_two ul li div:nth-of-type(2) p:nth-of-type(2) {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 20px;
}

.content .nth_two ul li div:nth-of-type(2) p:nth-of-type(3) {
    color: #999999;
    font-size: 18px;
    padding-top: 10px;
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

.qing {
    /*padding-top: 10px;*/
    /*margin-left: 140px;*/
}

.content .nth_three ul li div:nth-of-type(1) p:nth-of-type(2) {
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    padding-top: 32px;
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
