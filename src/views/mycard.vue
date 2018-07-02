<template>
    <div>
        <div>
            <div class="header">
                <p>{{merName}}</p>
                <p>{{merAddress}}</p>
            </div>
            <router-link to="phonenumber">
                <div class="act_T_a">
                    <span>手机号</span>
                    <span>{{mobile}}></span>
                </div>
            </router-link>
            <router-link :to="{path:'phonedetails',query:{accountId:accountId}}">
                <div class="act_T_b">
                    <span>我的充值</span>
                    <span>余额:{{balance}}元></span>
                </div>
            </router-link>
            <router-link :to="{path:'coupondetails',query:{platCode:platCode,merId:merId,memId:memId,merName:merName,}}">
                <div class="act_T_c">
                    <span>我的优惠券</span>
                    <span>{{coupon}}张></span>
                </div>
            </router-link>
                <div class="act_T_e" @click="getlink(platCode,memId,merId)">
                    <span>我的积分</span>
                    <span>{{point}}分></span>
                </div>
            <router-link :to="{path:'coupon',query:{merId:merId,memId:memId,platCode:platCode}}">
                <div class="act_T_f">
                    <span>我的礼金</span>
                    <span>{{giftCard}}元></span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mycard-view',
    created() {
        let balance = this.$route.query.balance;
        let coupon = this.$route.query.coupon;
        let point = this.$route.query.point;
        let mobile = this.$route.query.mobile;
        let giftCard = this.$route.query.giftCard;
        let merName = this.$route.query.merName;
        let merAddress = this.$route.query.merAddress;
        let merId = this.$route.query.merId;
        let memId = this.$route.query.memId;
        let platCode = this.$route.query.platCode;
        let accountId = this.$route.query.accountId;
        this.balance = balance;
        this.coupon = coupon;
        this.point = point;
        this.mobile = mobile;
        this.giftCard = giftCard;
        this.merName = merName;
        this.merAddress = merAddress;
        this.merId = merId;
        this.memId = memId;
        this.platCode = platCode;
        this.accountId = accountId;
    },
    data() {
        return {
            lables: [],
            balance: "",
            coupon: "",
            point: "",
            mobile: "",
            giftCard: "",
            merAddress: "",
            merName: "",
            memId: "",
            merId: "",
            platCode: "",
            accountId: ""
        }
    },
    methods: {
        getlink: function(platCode, memId, merId) {
            this.$http({ funCode: 6008, platCode: platCode, merId: merId, memId: memId }).then(
                (data) => {
                    if (data.exchangeType == 0) {
                        this.$router.push({ path: '/jifenlijin', query: { point: data.point, ruleId: data.ruleId, validDay: data.validDay, dataList: data.dataList, platCode: platCode, merId: merId, memId: memId } })
                    } else {
                        this.$router.push({ path: '/jifenlipin', query: { point: data.point, ruleId: data.ruleId, validDay: data.validDay, dataList: data.dataList, platCode: platCode, merId: merId, memId: memId } })
                    }
                }, (err) => {
                    console.log("请求失败")
                }
            )
        }
    }
} 
</script>
<style  scoped>
a {
    width: 100%;
}

.header {
    width: 100%;
    height: 280px;
    background-image: url("../img/img-tupian2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
}

.header p:nth-of-type(1) {
    font-size: 46px;
    color: #ffffff;
    padding-top: 66px;
    text-align: center;
}

.header p:nth-of-type(2) {
    font-size: 32px;
    color: #ffffff;
    padding-top: 30px;
    text-align: center;
}

.act_T_a,
.act_T_b,
.act_T_c,
.act_T_d,
.act_T_e,
.act_T_f {
    width: 100%;
    height: 88px;
    background: white;
    font-size: 28px;
    margin-bottom: 20px;
    line-height: 88px;
}

.act_T_a span:nth-of-type(1),
.act_T_b span:nth-of-type(1),
.act_T_c span:nth-of-type(1),
.act_T_d span:nth-of-type(1),
.act_T_e span:nth-of-type(1),
.act_T_f span:nth-of-type(1) {
    margin-left: 30px;
}

.act_T_a span:nth-of-type(2),
.act_T_b span:nth-of-type(2),
.act_T_c span:nth-of-type(2),
.act_T_d span:nth-of-type(2),
.act_T_e span:nth-of-type(2),
.act_T_f span:nth-of-type(2) {
    float: right;
    margin-right: 30px;
}
</style>
