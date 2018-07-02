<template>
    <div>
        <div class="Mask" v-show="act_success_show">
            <div class="err_no" @click="getming(platCode,merId,memId)">
                <img src="../img/img-tanchuang.png">
                <button>点击查看</button>
            </div>
        </div>
        <div class="Mask" v-show="act_change_show">
            <div class="err_off">
                <p>提示</p>
                <div>
                    <span>此商品不支持快递发送，请您到店后再兑换，请确认立即兑换？</span>
                    <span v-show="false">{{id}}</span>
                </div>
                <div>
                    <button class="web_yes" @click="change_confirm(id,platCode,merId,memId)">确认兑换</button>
                    <button @click="change_cancel">取消兑换</button>
                </div>
            </div>
        </div>
        <div class="header">
            <p>{{num}}分</p>
            <p v-if="!!validDay">有效期至{{validDay}}</p>
            <div class="header_a">
                <div>
                    <p>积分明细</p>
                    <router-link :to="{path:'jifenmingxi',query:{platCode:platCode,merId: merId,memId:memId}}">
                        <p>查看积分明细</p>
                    </router-link>
                </div>
            </div>
        </div>
        <div class="container">
            <ul>
                <li v-for="item in labels">
                    <div><img :src="item.goodsPicUrl"></div>
                    <div>
                        <p>{{item.goodsName}}</p>
                        <p>{{item.point}}
                            <span>积分</span>
                        </p>
                        <button class="Amt_err" @click="change_tag(item.id)">立即兑换</button>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'jifenlipin-view',

    data() {
        return {
            dataList: [],
            effective: '',
            num: '',
            point: '',
            ruleId: "",
            validDay: "",
            platCode: "",
            merId: "",
            memId: "",
            id: "",
            labels: [],
            act_change_show: false,
            act_success_show: false,
        }
    },
    created: function mounted() {
        let point = this.$route.query.point;
        let ruleId = this.$route.query.ruleId;
        let validDay = this.$route.query.validDay;
        let dataList = this.$route.query.dataList;
        let platCode = this.$route.query.platCode;
        let merId = this.$route.query.merId;
        let memId = this.$route.query.memId;
        this.num = point;
        this.ruleId = ruleId;
        this.validDay = validDay;
        this.labels = dataList;
        this.platCode = platCode;
        this.merId = merId;
        this.memId = memId;
        console.log(validDay)
        console.log(this.dataList)
    },
    methods: {
        change_tag: function(id) {
            this.id = id
            this.act_change_show = true
        },
        change_confirm: function(id, platCode, merId, memId) {
            this.exchange_show = false
            this.$http({ funCode: 6010, platCode: platCode, merId: merId, memId: memId, exchangeId: id }).then(
                (data) => {
                    //alert("兑换成功")
                    this.exchange_success_show = true
                    this.act_change_show = false
                    this.act_success_show = true
                }, (err) => {
                    console.log("兑换失败")
                }
            )
        },
        change_cancel: function() {
            this.act_change_show = false
        },
        getming: function(platCode, merId, memId) {
            this.$router.push({ path: '/jifenmingxi', query: { platCode: platCode, merId: merId, memId: memId } })
        }
    }
} 
</script>
<style  scoped>
.Mask {
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    position: fixed;
    height: 100%;
    top: 0;
    z-index: 1;
}

.header {
    width: 100%;
    height: 280px;
    background-image: url("../img/img-tupian2.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
}

.header p:nth-of-type(1),
.header p:nth-of-type(2) {
    font-size: 52px;
    color: #ffffff;
    text-align: center;
    padding-top: 20px;
}

.header p:nth-of-type(2) {
    font-size: 20px;
    padding-top: 10px;
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
    margin: 20px auto;
}

.header .header_a div p:nth-of-type(1) {
    font-size: 20px;
    padding-top: 10px;
}

.header .header_a div p:nth-of-type(2) {
    font-size: 30px;
    padding-top: 10px;
}

.container {
    width: 100%;
    height: calc(100% - 280px);
    background: white;
    position: absolute;
    top: 280px;
    overflow: scroll;
}

.container ul {
    width: 100%;
    height: calc(100% - 280px);
}

.container ul li {
    width: 100%;
    height: 268px;
    display: flex;
    border-bottom: 1Px solid #e0e0de;
}

.container ul li div:nth-of-type(1) {
    width: 160px;
    height: 100%;
    margin-left: 50px;
    margin-right: 50px;
    display: flex;
    align-items: center;
}

.container ul li div:nth-of-type(1) img {
    width: 160px;
    height: 160px;
    border: 1Px solid #e0e0de;
    border-radius: 10px;
}

.container ul li div:nth-of-type(2) {
    width: 450px;
    height: 100%;
}

.container ul li div:nth-of-type(2) p:nth-of-type(1) {
    font-size: 28px;
    color: #222222;
    padding-top: 48px;
}

.container ul li div:nth-of-type(2) p:nth-of-type(2) {
    font-size: 32px;
    color: #fe6f6c;
    padding-top: 18px;
}

.container ul li div:nth-of-type(2) p:nth-of-type(2) span {
    font-size: 24px;
    color: #999999;
}

.container ul li div:nth-of-type(2) button {
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









/*.err_no {
    width: 100%;
    height: 600px;
    position: absolute;
    top: 280px;
    text-align: center;
    z-index: 100;
}

.err_no button {
    width: 320px;
    height: 80px;
    outline: none;
    background: #fe2828;
    border-radius: 40px;
    font-size: 36px;
    text-align: center;
    color: #ffffff;
    position: absolute;
    top: 340px;
    left: 200px;
}*/

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
</style>
