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
                    <span>9264</span>
                    <span>8</span>
                </p>
            </div>
            <div class="content" id="scrolldiv">
                <div class="nth_two">
                    <ul class="set-select">
                        <li>
                            <div>
                                <p>金百万烤鸭(花香店)</p>
                                <p>丰台南路鸿业兴园二区1号楼1-2层</p>
                            </div>
                            <div>
                                <p>当前余额:
                                    <span>368</span>元</p>
                                <p>累计储值:
                                    <span>15976</span>元</p>
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
    name: 'stored-view',
    data() {
        return {}
    }
} 
</script>
<style  scoped>
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
    /*margin-top: -87px;*/
    /*margin-left: 24px;*/
    margin:-87px auto;
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
    padding-left: 124px;
}

.nth_one p:nth-of-type(2) span:nth-of-type(2) {
    margin-left: 278px;
}

.content {
    width: 100%;
    height: calc(100% - 213px);
    overflow: scroll;
    position: absolute;
}

.content .nth_two {
    width: 670px;
    height: 644px;
    margin:0 auto;
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

.content .nth_two ul li div:nth-of-type(1) p:nth-of-type(1) {
    font-size: 24px;
    color: #ffffff;
    text-align: center;
    padding-top: 35px;
}

.content .nth_two ul li div:nth-of-type(1) p:nth-of-type(2) {
    font-size: 12px;
    color: #ffffff;
    text-align: center;
    padding-top: 12px;
}

.content .nth_two ul li div:nth-of-type(2) {
    width: 348px;
    height: 100%;
    float: left;
}

.content .nth_two ul li div:nth-of-type(2) p {
    font-size: 28px;
    padding-top: 50px;
    padding-left: 36px;
}

.content .nth_two ul li div:nth-of-type(2) p:nth-of-type(2) {
    padding-top: 25px;
}

.content .nth_two ul li div:nth-of-type(2) p:nth-of-type(3) {
    color: #999999;
    font-size: 18px;
    padding-top: 8px;
    padding-left: 220px;
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
