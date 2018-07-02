<template>
    <div>
        <div class="header">
        </div>
        <div class="nth_one">
            <p>
                <span>有效劵汇总(元)</span>
                <span>对应商铺(家)</span>
            </p>
            <p>
                <span>{{info.totalUseableCount}}</span>
                <span>{{info.totalCount}}</span>
            </p>
        </div>
        <div class="content">
            <div class="nth_three">
                <ul class="net-select" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                    <li v-for="item in lables">
                        <div>
                            <p>{{item.merName}}</p>
                            <p>{{item.merAddress}}</p>
                        </div>
                        <div>
                             <router-link :to="{path:'coupondetails',query:{merId:item.merId,memId:item.memId,platCode:item.platCode,merName:item.merName}}">
                            <p>有效:
                                <span>{{item.useableCount}}</span>张</p>
                            <p>已使用:
                                <span>{{item.usedCount}}</span>张</p>
                            <p>已过期:
                                <span>{{item.expiredCount}}</span>张</p>
                            <p>
                               查看详情>
                            </p>
                            </router-link>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mycoupon-view',
    created() {
        // this.$http({ funCode: 6005, currentPage: 1, pageSize: 10 }).then(
        //     (data) => {
        //         this.info = data;
        //         this.labels = data.dataList;
        //         console.log(data)
        //     }, (err) => {
        //         console.log("请求失败")
        //     }
        // )
    },
    data() {
        return {
            info: {
                totalUseableCount: "",
                totalCount: ""
            },
            lables: [],
            currentPage: 0,
            pageSize: 10,
            judge: false,
            list: [],
        }
    },
    methods: {
        getlist(currentPage) {
            this.$http({ funCode: 6005, currentPage: currentPage, pageSize: this.pageSize }).then((data) => {
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
    margin: -87px auto;
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
    height: calc(100% - 240px);
    overflow: scroll;
    position: absolute;
}

.content .nth_two {
    width: 100%;
    height: 644px;
    margin-top: 20px;
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
    padding-top: 48px;
}

.content .nth_two ul li div:nth-of-type(1) p:nth-of-type(2) {
    font-size: 18px;
    color: #ffffff;
    text-align: center;
    padding-top: 32px;
}

.content .nth_two ul li div:nth-of-type(2) {
    width: 348px;
    height: 100%;
    float: left;
}

.content .nth_two ul li div:nth-of-type(2) p {
    font-size: 28px;
    padding-top: 56px;
    padding-left: 36px;
}

.content .nth_two ul li div:nth-of-type(2) p:nth-of-type(2) {
    padding-top: 42px;
}

.content .nth_two ul li div:nth-of-type(2) p:nth-of-type(3) {
    color: #999999;
    font-size: 18px;
    padding-top: 20px;
    padding-left: 246px;
}

.content .nth_three {
    width: 670px;
    height: 644px;
    margin: 0 auto;
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
    padding-top: 40px;
}

.content .nth_three ul li div:nth-of-type(1) p:nth-of-type(2) {
    font-size: 15px;
    color: #ffffff;
    text-align: center;
    padding-top: 20px;
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
    padding-top: 15px;
}

.content .nth_three ul li div:nth-of-type(2) p:nth-of-type(4) {
    color: #999999;
    font-size: 18px;
    padding-left: 225px;
}

.content .nth_three ul li div:nth-of-type(2) p:nth-of-type(4) a {
    color: #999999;
}
</style>
