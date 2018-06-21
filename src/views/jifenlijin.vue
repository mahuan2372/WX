<template>
    <div>
        <div class="Mask" v-show="exchange_success_show" >
            <div class="err_no"  >
                <img src="../img/img-tanchuang.png">
                <button @click="See_success">点击查看</button>
            </div>
        </div>
        <div class="Mask" v-show="exchange_show"  >
            <div class="err_off">
                <p>提示</p>
                <div>
                    <span>你兑换的30元礼金劵将于2018年5月14日到期，请确认是否兑换？</span>
                </div>
                <div>
                    <button class="web_yes" @click="confirm_exchange">确认兑换</button>
                    <button @click="cancel_exchange">取消兑换</button>
                </div>
            </div>
        </div>
        <div class="header">
            <p>2765分</p>
            <div class="header_a">
                <div>
                    <p>积分明细</p>
                    <p>查看积分明细</p>
                </div>
            </div>
        </div>
        <div class="big_box">
            <div class="container">
                <div><img src="../img/img-lijin.png"></div>
                <div>
                    <p>30元礼金劵</p>
                    <p>3000
                        <span>积分</span>
                    </p>
                    <button class="Amt_err" @click="exchange">立即兑换</button>
                    <p>有效期至2018.12.31</p>
                    <p class="reg" @click="togglePay" >查看详情<img src="../img/icon-jiantou-xia.png" :class="{'tag_ger':isChoose}" ></p>
                </div>
            </div>
            <div class="Amt_zin" v-show="detailsshow">
                <ul>
                    <li>1.积分永久有效，随时可兑换礼金</li>
                    <li>2.每100积分可兑换1元礼金劵</li>
                    <li>3.兑换后的礼金劵本年度内有效</li>
                    <li>4.礼金劵与优惠券不可同时使用</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'jifenlijin-view',
    data() {
        return {
            isChoose : false  ,
            detailsshow: false ,
            exchange_show: false ,
            exchange_success_show: false ,
        }
    },
    methods:{  
        togglePay:function(){  
            this.isChoose = !this.isChoose  
            this.detailsshow = !this.detailsshow 

        }  ,
        exchange: function () {
            this.exchange_show = true
        } ,
        confirm_exchange: function () {
            this.exchange_show = false
            this.exchange_success_show = true 
        },
        cancel_exchange:function () {
            this.exchange_show = false
        },
        See_success:function () {
            this.exchange_success_show = false 
        },
    }  
} 
</script>
<style  scoped>
.big_box {
    width: 100%;
    height: 100%;
}
.Mask{
    width: 100%;
    background: rgba(0,0,0,0.3);
    overflow: hidden;
    position: fixed;
    height: 100%;
    top: 0;
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
    height: 110px;
    border-radius: 10px;
    border: 1Px solid white;
    margin-left: 30px;
    margin: 30px auto;
}

.header .header_a div p:nth-of-type(1) {
    font-size: 20px;
    padding-top: 18px;
}

.header .header_a div p:nth-of-type(2) {
    font-size: 30px;
    padding-top: 10px;
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
.err_no img{
    width: 100% ;
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
.reg img{
    width:30px;
    height:18px;
}
.tag_ger{
     transition-duration: 0.2s;
            transform: rotate(180deg);
            -webkit-transform: rotate(180deg);

}
</style>
