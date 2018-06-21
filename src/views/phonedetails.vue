<template>
    <div>
        <div class="header_a">
            <div>
                <span>当前余额</span>
                <span>累计储值</span>
                <span>累计赠送</span>
                <span>累计消费</span>
                <span>累计退款</span>
            </div>
            <div>
                <span>￥1596</span>
                <span>￥1569</span>
                <span>￥20</span>
                <span>￥12656</span>
                <span>￥150</span>
            </div>
        </div>
        <div class="act_V_one">
            <ul class="get-select">
                <li>
                    <span><img src="../img/img-chuzhi.png"></span>
                    <span>余额：
                        <span>500元</span>
                    </span>
                    <div>
                        <p>+500元</p>
                        <span>2017/05/16&nbsp;17:15:23 </span>
                    </div>
                </li>
                <li>
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
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'details-view',
    data() {
        return {}
    }
} 
</script>
<style  scoped>
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
    height: calc(100% - 362px);
    overflow: scroll;
    background: white;
    margin-top: 20px;
}

.act_V_one ul {
    width: 100%;
}

.act_V_one ul li {
    width: 655px;
    height: 129px;
    border-bottom: 1Px solid #e0e0de;
    line-height: 129px;
    margin-left: 30px;
    display: flex;
    align-items: center;
}

.act_V_one ul li span:nth-of-type(1) {
    margin-left: 15px;
}

.act_V_one ul li span:nth-of-type(1) img {
    width: 80px;
    display: block;
}

.act_V_one ul li span:nth-of-type(2) {
    text-align: right;
    margin-left: 42px;
    font-size: 26px;
    color: #999999;
}

.act_V_one ul li span:nth-of-type(2) span {
    margin-left: 0;
    color: #2196f3;
}

.act_V_one ul li div {
    width: 240px;
    height: 100%;
    line-height: 20px;
    margin-left: 120px;
}

.act_V_one ul li div p {
    float: right;
    font-size: 26px;
    color: #222222;
    margin-top: 30px;
}

.act_V_one ul li div span {
    float: right;
    font-size: 20px;
    color: #999999;
    margin-top: 30px;
}
</style>
