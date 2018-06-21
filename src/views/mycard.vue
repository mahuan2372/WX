<template>
    <div>
        <div class="header">
            <p>金百万烤鸭(花乡店)</p>
            <p>总部基地盈坤世纪H座1层002号</p>
        </div>
        <router-link to="phonenumber">
            <div class="act_T_a">
                <span>手机号</span>
                <span>15979631456></span>
            </div>
        </router-link>
        <router-link to="phonedetails">
            <div class="act_T_b">
                <span>我的储值</span>
                <span>余额:50元></span>
            </div>
        </router-link>
        <router-link to="coupondetails">
            <div class="act_T_c">
                <span>我的优惠券</span>
                <span>5张></span>
            </div>
        </router-link>
        <div class="act_T_e">
            <span>我的积分</span>
            <span>659分></span>
        </div>
        <router-link to="coupon">
            <div class="act_T_f">
                <span>我的礼金</span>
                <span>43元></span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'mycard-view',
    data() {
        return {}
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
    font-size: 36px;
    color: #ffffff;
    padding-top: 66px;
    text-align: center;
}

.header p:nth-of-type(2) {
    font-size: 32px;
    color: #ffffff;
    padding-top: 68px;
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
