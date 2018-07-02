<template>
    <div>
        <div class="header_a">
            <div>
                <span>当前余额</span>
                <span>累计充值</span>
                <span>累计赠送</span>
                <span>累计消费</span>
                <span>累计退款</span>
            </div>
            <div>
                <span>￥{{info.balance}}</span>
                <span>￥{{info.totaStored}}</span>
                <span>￥{{info.totalGive}}</span>
                <span>￥{{info.totalPay}}</span>
                <span>￥{{info.totalRefund}}</span>
            </div>
        </div>
        <div class="act_V_one">
            <ul class="get-select" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <li v-for="item in lables">
                    <span>
                        <img src="../img/img-chongzhi.png" v-if="item.adType == 0 ">
                        <img src="../img/img-xiaofei.png" v-if="item.adType == 1 ">
                        <img src="../img/img-tuikuan.png" v-if="item.adType == 2 ">
                        <img src="../img/img-zengsong.png" v-if="item.adType == 3">
                    </span>
                    <span>余额：
                        <span>{{item.balance}}元</span>
                    </span>
                    <div>
                        <p v-if="item.adType == 0 ">+{{item.amt}}元</p>
                        <p class="red" v-if="item.adType == 1 ">-{{item.amt}}元</p>
                        <p class="red" v-if="item.adType == 2 ">-{{item.amt}}元</p>
                        <p v-if="item.adType == 3">+{{item.amt}}元</p>
                        <span>{{item.rowCrtTs}}</span>
                    </div>
                </li>
                <!--<li>
                                <span><img src="../img/img-xiaofei.png"></span>
                                <span>余额：
                                    <span>500元</span>
                                </span>
                                <div>
                                    <p style="color:#ff7070">-500元</p>
                                    <span>2017/05/16&nbsp;17:15:23 </span>
                                </div>
                            </li>
                            <li>
                                <span><img src="../img/img-zengsong.png"></span>
                                <span>余额：
                                    <span>500元</span>
                                </span>
                                <div>
                                    <p>+500元</p>
                                    <span>2017/05/16&nbsp;17:15:23 </span>
                                </div>
                            </li>
                            <li>
                                <span><img src="../img/img-tuikuan.png"></span>
                                <span>余额：
                                    <span>500元</span>
                                </span>
                                <div>
                                    <p style="color:#ff7070">-500元</p>
                                    <span>2017/05/16&nbsp;17:15:23</span>
                                </div>
                            </li>-->
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'details-view',
    created() {
        let accountId = this.$route.query.accountId;
        this.accountId = accountId;
        // this.$http({ funCode: 6004, currentPage: 1, pageSize: 10, accountId: accountId }).then(
        //     (data) => {
        //         this.info = data;
        //         this.lables = data.dataList;
        //         console.log(data)
        //     }, (err) => {
        //         console.log(err, 313213)
        //     }
        // )
    },
    data() {
        return {
            info: {
                balance: '',
                totaStored: "",
                totalGive: "",
                totalPay: "",
                totalRefund: "",
                totalCount: ""
            },
            lables: [],
            accountId: "",
            currentPage: 0,
            pageSize: 10,
            judge: false,
            list: [],
        }
    },
    methods: {
        getlist(currentPage) {
            this.$http({ funCode: 6004, currentPage: currentPage, pageSize: this.pageSize, accountId: this.accountId }).then((data) => {
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
.red {
    color: red !important;
}

.header_a {
    width: 100%;
    height: 162px;
    background: white;
}

.header_a div:nth-of-type(1) {
    width: calc(100% - 60px);
    height: 80px;
    border-bottom: 1px solid #e0e0de;
    font-size: 24px;
    color: #999999;
    line-height: 80px;
    margin-left: 30px;
}

.header_a div:nth-of-type(1) span {
    display: inline-block;
    width: 100px;
    margin-left: 30px;
}

.header_a div:nth-of-type(2) {
    width: calc(100% - 60px);
    height: 80px;
    border-top: 1Px solid #f1f1f0;
    font-size: 24px;
    line-height: 80px;
    margin-left: 30px;
}

.header_a div:nth-of-type(2) span {
    width: 100px;
    overflow: hidden;
    /* white-space: nowrap;
    text-overflow: ellipsis; */
    display: inline-block;
    margin-left: 30px;
}

.header_a div:nth-of-type(2) span:nth-of-type(1) {
    color: #2196f3;
}

.header_a div:nth-of-type(2) span:nth-of-type(4) {
    color: #ff7070;
}

.act_V_one {
    width: 100%;
    height: calc(100% - 170px);
    overflow: scroll;
    background: white;
    margin-top: 20px;
    position: absolute;
}

.act_V_one ul {
    width: 100%;
}

.act_V_one ul li {
     width: calc(100% - 60px);
    height: 129px;
    border-bottom: 1Px solid #e0e0de;
    line-height: 129px;
    margin-left: 30px;
    display: flex;
    align-items: center;
}

.act_V_one ul li span:nth-of-type(1) {
    /*margin-left: 15px;*/
}

.act_V_one ul li span:nth-of-type(1) img {
    width: 80px;
    display: block;
}

.act_V_one ul li span:nth-of-type(2) {
    width: 35%;
    height: 100%;
    text-align: left;
    margin-left: 42px;
    font-size: 26px;
    color: #999999;
}

.act_V_one ul li span:nth-of-type(2) span {
    margin-left: 0;
    color: #2196f3;
}

.act_V_one ul li div {
    width: 50%;
    height: 100%;
    line-height: 20px;
    text-align: right;
}

.act_V_one ul li div p {
    font-size: 26px;
    color: #222222;
    margin-top: 30px;
}

.act_V_one ul li div span {
    font-size: 20px;
    color: #999999;
    display: block;
    margin-top: 30px;
    margin-right: 0;
}
</style>
