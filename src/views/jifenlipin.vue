<template>
    <div>
        <div class="Mask" v-show="act_success_show" >
            <div class="err_no" >
                <img src="../img/img-tanchuang.png">
                <button>点击查看</button>
            </div>
        </div>
        <div class="Mask"  v-show="act_change_show" >
            <div class="err_off">
                <p>提示</p>
                <div>
                    <span>你兑换的30元礼金劵将于2018年5月14日到期，请确认是否兑换？</span>
                </div>
                <div>
                    <button class="web_yes" @click="change_confirm">确认兑换</button>
                    <button @click="change_cancel">取消兑换</button>
                </div>
            </div>
        </div>
            <div class="header">
                <p>2765分</p>
                <p>有效期至2018.12.31</p>
                <div class="header_a">
                    <div>
                        <p>积分明细</p>
                        <p>查看积分明细</p>
                    </div>
                </div>
            </div>
            <div class="container">
                <ul>
                    <li>
                        <div><img src="../img/img-shouji.png"></div>
                        <div>
                            <p>小米MIX 2全陶瓷尊享版</p>
                            <p>5999
                                <span>积分</span>
                            </p>
                            <button class="Amt_err" @click="change_tag">立即兑换</button>
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
            act_change_show:false,
            act_success_show: false ,
        }
    },
    methods:{
        change_tag: function () {
            this.act_change_show = true
        },
        change_confirm:function(){
            this.act_change_show=false
            this.act_success_show=true
        },
        change_cancel:function(){
            this.act_change_show=false
        }
    }
} 
</script>
<style  scoped>
.Mask{
    width: 100%;
    background: rgba(0,0,0,0.3);
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
    height: 110px;
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
    border-bottom: 1px solid #e0e0de;
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
</style>
