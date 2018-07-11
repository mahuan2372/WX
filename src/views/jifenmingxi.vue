<template>
    <div>
        <div class="container_o">
            <div class="container_o_two">
                <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <li v-for="item in lables">
                        <div>
                            <img v-if="item.exchangeType==1" :src="item.goodsPicUrl">
                            <!--//默认礼金的图片 -->
                            <img v-if="item.exchangeType!=1 " src="../img/img-lijin.png">
                        </div>
                        <div>
                            <p v-if="item.blsign== -1">{{item.exchangeName}}</p>
                            <p v-if="item.blsign== 1">{{item.pointValue}}
                                <span>元礼金券</span>
                            </p>
                            <p v-if="item.blsign== -2">
                                <span>到期积分</span>
                            </p>
                            <p class="tb">{{item.pointValue}}
                                <span class="tc">积分</span>
                            </p>
                            <button class="Amt_err" v-if="item.blsign == 1">消费成功</button>
                            <button class="Amt_err" v-if="item.blsign == -1">兑换成功</button>
                            <button class="Amt_err" v-if="item.blsign == -2">已过期</button>
                            <p class="ta" v-if="item.exchangeType==0 &&item.validDay!=undefined">有效期至{{item.validDay}}</p>
                            <p class="ta" v-if="item.blsign == 1">{{item.rowCrtTs}}</p>
                        </div>
                    </li>
                    <!--<li>
                                                            <div><img src="../img/img-lijin.png"></div>
                                                            <div>
                                                                <p>30元礼金劵</p>
                                                                <p>-3000
                                                                    <span>积分</span>
                                                                </p>
                                                                <button class="Amt_err">兑换成功</button>
                                                                <p>有效期至</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div><img src="../img/img-lijin.png"></div>
                                                            <div>
                                                                <p>到期积分</p>
                                                                <p>-3000
                                                                    <span>积分</span>
                                                                </p>
                                                                <button class="Amt_err">已过期</button>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div><img src="../img/img-jin.png"></div>
                                                            <div>
                                                                <p>到期积分</p>
                                                                <p>-3000
                                                                    <span>积分</span>
                                                                </p>
                                                                <button class="Amt_err">消费成功</button>
                                                                <p>有效期至2018.12.31</p>
                                                            </div>
                                                        </li>-->
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'jifenmingxi-view',
    created() {
       let listcode=this.localStorageState.get('details');
        // let platCode = this.$route.query.platCode;
        // let merId = this.$route.query.merId;
        // let memId = this.$route.query.memId;
        this.platCode = listcode.platCode;
        this.merId = listcode.merId;
        this.memId =listcode.memId;
        //   this.$http({ funCode: 6009, platCode: platCode, merId: merId, memId: memId, currentPage: currentPage, pageSize: pageSize }).then(
        //         (data) => {
        //             console.log(data)
        //             this.lables = data.dataList;

        //         }, (err) => {
        //             console.log("请求失败")
        //         }
        //     )
    },
    data() {
        return {
            lables: [],
            platCode: "",
            memId: "",
            merId: "",
            currentPage: 0,
            pageSize: 10,
            judge: false,
            list: [],
        }
    },
    methods: {
        getlist(currentPage) {          
            this.$http({ funCode: 6009, platCode: this.platCode, merId: this.merId, memId: this.memId, currentPage: currentPage, pageSize: this.pageSize }).then((data) => {
                if (this.judge) {
                    return
                }
                if (data.dataList.length < 10) {                 
                    this.judge = true
                    this.loading = false;
                }             
                this.list.push.apply(this.list, data.dataList)               
                this.lables = this.list   
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
.container_o {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    overflow: scroll;
}

.container_o .container_o_one {
    width: 100%;
    height: calc(100% - 80px);
}

.container_o .container_o_one ul {
    width: 100%;
    background: white;
}

.container_o .container_o_one ul li {
    width: calc(100% - 80px);
    margin-left: 30px;
    height: 98px;
    border-bottom: 1Px solid #e0e0de;
    display: flex;
    font-size: 22px;
}

.container_o .container_o_one ul li div:nth-of-type(1) {
    width: 130px;
    height: 98px;
    line-height: 45px;
}

.container_o .container_o_one ul li div:nth-of-type(1) p:nth-of-type(1) {
    color: #999999;
}

.container_o .container_o_one ul li div:nth-of-type(1) p:nth-of-type(2) {
    color: #fe6f6c;
}

.container_o .container_o_one ul li div:nth-of-type(2),
.container_o .container_o_one ul li div:nth-of-type(3) {
    width: 250px;
    height: 98px;
    line-height: 45px;
}

.container_o .container_o_one ul li div:nth-of-type(2) p:nth-of-type(1),
.container_o .container_o_one ul li div:nth-of-type(3) p:nth-of-type(1) {
    color: #999999;
}

.container_o .container_o_one ul li div:nth-of-type(2) p:nth-of-type(2),
.container_o .container_o_one ul li div:nth-of-type(3) p:nth-of-type(2) {
    color: black;
}

.container_o .container_o_two {
    width: 100%;
    height: calc(100% - 80px);
}

.container_o .container_o_two ul {
    width: 100%;
    background: white;
}

.container_o .container_o_two ul li {
    width: 100%;
    height: 268px;
    background: white;
    display: flex;
    border-bottom: 1Px solid #e0e0de;
}

.container_o .container_o_two ul li div:nth-of-type(1) {
    width: 160px;
    height: 100%;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
}

.container_o .container_o_two ul li div:nth-of-type(1) img {
    width: 160px;
    height: 160px;
    border: 1Px solid #e0e0de;
}

.container_o .container_o_two ul li div:nth-of-type(2) {
    width: 450px;
    height: 100%;
}

.container_o .container_o_two ul li div:nth-of-type(2) p:nth-of-type(1) {
    font-size: 28px;
    color: #222222;
    padding-top: 48px;
}

.container_o .container_o_two ul li div:nth-of-type(2) p:nth-of-type(2) {
    font-size: 32px;
    color: #fe6f6c;
    padding-top: 18px;
}

.tb {
    font-size: 32px;
    color: #fe6f6c;
    padding-top: 18px;
}

.container_o .container_o_two ul li div:nth-of-type(2) p:nth-of-type(2) span {
    font-size: 24px;
    color: #999999;
}

.tc {
    font-size: 24px;
    color: #999999;
}

.container_o .container_o_two ul li div:nth-of-type(2) button {
    width: 120px;
    height: 38px;
    outline: none;
    border-radius: 10px;
    background: #999999;
    font-size: 24px;
    border: 0;
    color: white;
    display: block;
    margin-top: 50px;
}

.container_o .container_o_two ul li div:nth-of-type(2) p:nth-of-type(3) {
    font-size: 20px;
    color: #999999;
    text-align: right;
    margin-top: -40px;
}

.ta {
    font-size: 20px;
    color: #999999;
    text-align: right;
    margin-top: -40px;
}
</style>
