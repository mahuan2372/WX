<template>
  <div>
    <div class="box">
        <div class="conat">
            <div>
                <span>手机号</span>
                <input id="mobile" type="number"   @onkeyup="chang()" placeholder="请输入手机号码" >
            </div>
            <div>
                <span>手机验证码</span>
                <input type="text" placeholder="手机验证码" @onkeyup="chang_(this)" >
                <button  :disabled="disabled"  @click="code" v-model="msg" id="todo" >{{msg}}</button>
            </div>
            <button id="sub">提交</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'act-view',
  data() {
    return {
        msg: "发送验证码" ,
        disabled: false
    }
  },
  watch:{
        msg:{
　　　　　　　handler(curVal,oldVal){
                var _this = this
　　　　　　　　　　　　console.log(curVal,oldVal)
                if ( curVal == 0 ) {
                    _this.msg = "发送验证码"
                    this.disabled = !this.disabled
                    return
                }
                    var timer = setTimeout(function() {
                        _this.msg = curVal -- 
                        
                        }, 1000)
　　　　　　　　　　},
　　　　　　　　　　deep:true
　　　　　　　　}
　　　　　　},
  methods:{
    code: function () {
      this.msg = 59  
      this.disabled = !this.disabled
    },
     chang:function() {
        var reg = /^1[0-9]\d{9}$/g;
        if (reg.test($('#mobile').val()) && count == 60) {
            $('#todo').addClass('active');
            Togg = true;
        } else {
            Togg = false;
            $('#todo').removeClass('active');
        }
    }
  }
} 
</script>
<style  scoped>
.box {
    width: 100%;
    height: 100%;
    /*overflow: hidden;*/
}

.box .conat {
    width: 678px;
    height: 178px;
    background: white;
    border-radius: 10px;
    margin-left: 24px;
    font-size: 28px;
    margin-top: 24px;
}

.box .conat div:nth-of-type(1) {
    width: 655px;
    height: 90px;
    line-height: 90px;
    border-bottom: 1px solid #e4e4e4;
    margin-left: 20px;
}

.box .conat div:nth-of-type(1) input {
    font-size: 28px;
    outline: none;
    border: none;
    margin-left: 120px;
}

.box .conat div:nth-of-type(2) {
    width: 655px;
    height: 90px;
    line-height: 90px;
    border-bottom: 1px solid #e4e4e4;
    margin-left: 20px;
    position: relative;
}

.box .conat div:nth-of-type(2) input {
    font-size: 28px;
    outline: none;
    border: none;
    margin-left: 64px;
}

#todo {
    width: 180px;
    height: 60px;
    background: #bfbfbf;
    color: #ffffff;
    position: absolute;
    top: -20px;
    right: 30px;
    line-height: 60px;
    text-align: center;
    border-radius: 10px;
    font-size:28px;
}

.box button {
    width: 678px;
    height: 88px;
    margin-top: 40px;
    background: #bfbfbf;
    font-size: 36px;
    color: white;
    border-radius: 10px;
    transition: all .3s;
}
.box button.active ,#todo.active{
  background: #2396ff;
}
</style>
