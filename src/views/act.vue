<template>
  <div>
    <div class="box">
        <div class="conat">
            <div>
                <span>手机号</span>
                <input id="mobile" v-model="from.mobile" type="number"  placeholder="请输入手机号码" >
            </div>
            <div>
                <span>手机验证码</span>
                <input type="text" v-model="from.code" placeholder="手机验证码" @onkeyup="chang_(this)" >
                <button :class="{ active:!disabled }" :disabled="Togg||!(count==60)"  @click="code" id="todo" >{{msg}}</button>
            </div>
            <button :class="{ active:!Togg&&!!(from.code) }" :disabled="Togg||!(from.code)" id="sub">提交</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "act-view",
  data() {
    return {
      count: 60,
      Togg: true,
      from: {
        mobile: "",
        code: ""
      },
      msg: "发送验证码",
      disabled: false,
      timer: null
    };
  },
  watch: {
    "from.mobile"(newVal) {
      var reg = /^1[0-9]\d{9}$/g;
      if (reg.test(newVal)) {
        this.Togg = false;
      } else {
        this.Togg = true;
      }
    }
  },
  methods: {
    code: function() {
      if (this.disabled) {
        return;
      }
      this.disabled = !this.disabled;
      this.timer = setInterval(() => {
        this.msg = this.count--;
        if (this.count == 0) {
          clearInterval(this.timer);
          this.msg = "发送验证码";
          this.count = 60;
          this.disabled = !this.disabled;
          return;
        }
      }, 1000);
    },
    chang: function() {}
  }
};
</script>
<style  scoped>
.box {
  width: 100%;
  height: 100%;
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
  font-size: 28px;
}

.box button {
  width: 678px;
  height: 88px;
  margin-top: 40px;
  background: #bfbfbf;
  font-size: 36px;
  color: white;
  border-radius: 10px;
  transition: all 0.3s;
}
.box button.active,
#todo.active {
  background: #2396ff;
}
</style>
