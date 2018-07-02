<template>
    <div>
        <div class="Mask" v-show="exchange_success_show">
            <div class="err_no">
                <img src="../img/img-tanchuang.png">
                <button @click="getming(platCode,merId,memId)">点击查看</button>
            </div>
        </div>
        <div class="Mask" v-show="exchange_show">
            <div class="err_off">
                <p>提示</p>
                <div>
                    <span>你兑换的{{point}}元礼金劵将于{{validDay | validDay }}到期，请确认是否兑换？</span>
                    <span v-show="false">{{id}}</span>
                </div>
                <div>
                    <button class="web_yes" @click="confirm_exchange(id,platCode,merId,memId)">确认兑换</button>
                    <button @click="cancel_exchange">取消兑换</button>
                </div>
            </div>
        </div>
        <div class="header">
            <p>{{point}}分</p>
            <div class="header_a">
                <div>
                    <p>积分明细</p>
                    <router-link :to="{path:'jifenmingxi',query:{platCode:platCode,merId: merId,memId:memId}}">
                        <p>查看积分明细</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="scroll">
            <div class="big_box" v-for="item in dataList">
                <div class="container">
                    <div><img :src="item.goodsPicUrl"></div>
                    <div>
                        <p>{{item.memo}}</p>
                        <p>{{item.point}}
                            <span>积分</span>
                        </p>
                        <button class="Amt_err" @click="exchange(item.id,item.point,item.validDay)">立即兑换</button>

                    </div>
                </div>
                <div class="Amt_zin">
                    <ul>
                        <li>1.积分永久有效，随时可兑换礼金</li>
                        <li>2.每{{item.point}}积分可兑换1元礼金劵</li>
                        <li>3.兑换后的礼金劵本年度内有效</li>
                        <li>4.礼金劵与优惠券不可同时使用</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'jifenlijin-view',
    data() {
        return {
            isChoose: false,
            exchange_show: false,
            exchange_success_show: false,
            dataList: [],
            point: '',
            ruleId: "",
            platCode: "",
            merId: "",
            memId: "",
            id: "",
            validDay: '',
        }
    },
   
    created: function mounted() {
        let point = this.$route.query.point;
        let ruleId = this.$route.query.ruleId;
        let dataList = this.$route.query.dataList;
        let platCode = this.$route.query.platCode;
        let merId = this.$route.query.merId;
        let memId = this.$route.query.memId;
        this.point = point;
        this.ruleId = ruleId;
        this.platCode = platCode;
        this.merId = merId;
        this.memId = memId;
        this.dataList = dataList;
    },
    methods: {
        togglePay: function(index) {
            if (this.lastIndex !== index) {
                //首次点击
                this.labels[index].detailsshow = true;//上一次点击还原
            } else if (this.lastIndex == index) {
                //二次点击以上
                this.handleClike(index)
            }
            this.lastIndex = index;

        },
        handleClike(index) {
            this.labels[index].detailsshow = !this.labels[index].detailsshow;
        },
        exchange: function(id, point,validDay) {
            this.exchange_show = true
            this.point = point
            this.id = id
            this.validDay = validDay;
            console.log(validDay)
        },
        confirm_exchange: function(id, platCode, merId, memId) {
            this.exchange_show = false
            this.$http({ funCode: 6010, platCode: platCode, merId: merId, memId: memId, exchangeId: id }).then(
                (data) => {
                    this.exchange_success_show = true
                }, (err) => {
                    console.log("兑换失败")
                }
            )
        },
        cancel_exchange: function() {
            this.exchange_show = false
        },
        See_success: function() {
            this.exchange_success_show = false
        },
        getming: function(platCode, merId, memId) {
            this.$router.push({ path: '/jifenmingxi', query: { platCode: platCode, merId: merId, memId: memId } })
        }
    },
     filters: {
        validDay:function(val) {
            // 转成年底时间
            if (val == 0) {
                var date = new Date;
                var year = date.getFullYear();
                return year + '年12月31日'
            } else {
                // 转成一年后的时间
                var date = new Date;
                var year = date.getFullYear() + 1;
                var month = date.getMonth() + 1;
                var day = date.getDate();
                return year + "年" + month + "月" + day + "日"
            }
        }
    },
} 
</script>
<style  scoped>
.big_box {
    width: 100%;
    /*height: 100%;*/
}
.Mask {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: fixed;
    height: 100%;
    top: 0;
    z-index: 200;
}

.header {
    width: 100%;
    height: 280px;
    background-image: url("../img/img-tupian2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.header p:nth-of-type(1),
.header p:nth-of-type(2) {
    font-size: 52px;
    color: #ffffff;
    text-align: center;
    padding-top: 30px;
}

.header p:nth-of-type(2) {
    font-size: 20px;
    padding-top: 20px;
}

.header .header_a {
    display: flex;
}

.header .header_a div {
    width: 320px;
    height: 90px;
    border-radius: 10px;
    border: 1Px solid white;
    margin-left: 30px;
    margin: 30px auto;
}

.header .header_a div p:nth-of-type(1) {
    font-size: 20px;
    padding-top: 10px;
}

.header .header_a div p:nth-of-type(2) {
    font-size: 30px;
    padding-top: 10px;
}

.scroll {
    width: 100%;
    height: calc(100% - 280px);
    position: absolute;
    top: 280px;
    overflow: scroll;
}

.container {
    width: 100%;
    height: 268px;
    background: white;
    display: flex;
}

.container div:nth-of-type(1) {
    width: 160px;
    height: 100%;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
}

.container div:nth-of-type(1) img {
    width: 160px;
    height: 160px;
    border: 1Px solid #e0e0de;
    border-radius: 10px;
}

.container div:nth-of-type(2) {
    width: 450px;
    height: 100%;
}

.container div:nth-of-type(2) p:nth-of-type(1) {
    font-size: 28px;
    color: #222222;
    padding-top: 48px;
}

.container div:nth-of-type(2) p:nth-of-type(2) {
    font-size: 32px;
    color: #fe6f6c;
    padding-top: 18px;
}

.container div:nth-of-type(2) p:nth-of-type(2) span {
    font-size: 24px;
    color: #999999;
}

.container div:nth-of-type(2) button {
    width: 120px;
    height: 38px;
    outline: none;
    border-radius: 10px;
    background: #2396ff;
    font-size: 24px;
    border: 0;
    color: white;
    display: block;
    margin-top: 40px;
}

.container div:nth-of-type(2) p:nth-of-type(3),
.container div:nth-of-type(2) p:nth-of-type(4) {
    font-size: 20px;
    color: #999999;
    text-align: right;
    margin-top: -40px;
}

.container div:nth-of-type(2) p:nth-of-type(4) {
    margin-top: 10px;
}

.Amt_zin {
    width: 100%;
    height: 274px;
    border-top: 1px solid #e0e0de;
    background: white;
    font-size: 24px;
    color: #999999;
}

.Amt_zin ul {
    width: calc(100% - 100px);
    height: 100%;
    margin-left: 50px;
    margin-top: 20px;
}

.Amt_zin ul li {
    line-height: 40px;
}

.err_no {
    width: 50%;
    height: 6rem;
    position: absolute;
    top: 2.8rem;
    text-align: center;
    z-index: 100;
    margin: 25%;
}

.err_no img {
    width: 100%;
    height: auto;
}

.err_no button {
    width: 2rem;
    height: 0.6rem;
    outline: none;
    background: #fe2828;
    border-radius: 0.4rem;
    font-size: 0.2rem;
    text-align: center;
    color: #ffffff;
    position: absolute;
    top: 3rem;
    left: 0.9rem;
}

.err_off {
    width: calc(100% - 160px);
    height: 260px;
    border-radius: 10px;
    margin-left: 80px;
    background: white;
    font-size: 24px;
    position: absolute;
    top: 348px;
    z-index: 100;
}

.err_off p {
    font-size: 32px;
    text-align: center;
    padding-top: 30px;
}

.err_off div:nth-of-type(1) {
    width: calc(100% - 60px);
    margin-left: 30px;
    line-height: 40px;
}

.err_off div:nth-of-type(2) {
    width: 100%;
    height: 89px;
    margin-top: 20px;
    display: flex;
}

.err_off div:nth-of-type(2) button {
    width: 50%;
    height: 100%;
    border: none;
    border-top: 1px solid #d6d6d6;
    border-right: 1px solid #d6d6d6;
    background: white;
    font-size: 32px;
    text-align: center;
}

.err_off div:nth-of-type(2) button:nth-of-type(1) {
    color: #2396ff;
}

.reg img {
    width: 30px;
    height: 18px;
}

.tag_ger {
    transition-duration: 0.2s;
    transform: rotate(180deg);
    -webkit-transform: rotate(180deg);
}
</style>
