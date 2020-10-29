<template>
  <div class="login-container" :style="note">
    <div class="title-container">
      <span class="title" @click="handleGoLogin"
      >登录&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</span
      >
      <span class="title" @click="handleGoRegist">注册</span>
    </div>
    <div v-show="isShowLogin">
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <el-select v-model="loginForm.username" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <!-- <el-form-item prop="username">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="username"
            v-model="loginForm.username"
            placeholder="手机号或邮箱"
            name="username"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item> -->
        <el-form-item prop="userphone">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="userphone"
            v-model="loginForm.userphone"
            placeholder="手机号"
            name="userphone"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>
        <el-tooltip
          v-model="capsTooltip"
          content="Caps lock is On"
          placement="right"
          manual
        >
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm.password"
              :type="passwordType"
              placeholder="密码"
              name="password"
              tabindex="2"
              autocomplete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
              />
            </span>
          </el-form-item>
        </el-tooltip>

        <el-button
          :loading="loading"
          type="primary"
          style="width:100%;margin-bottom:30px;"
          @click.native.prevent="handleLogin"
        >登录</el-button
        >

        <div style="position:relative">
          <div class="tips">
            <span>用户名 : admin</span>
            <span>密码 : 任意</span>
          </div>
          <div class="tips">
            <span style="margin-right:18px;">用户名 : editor</span>
            <span>密码 : 任意</span>
          </div>

          <el-button
            class="thirdparty-button"
            type="primary"
            @click="showDialog = true"
          >
            其他方式登录
          </el-button>
        </div>
      </el-form>
    </div>
    <div v-show="isShowRegist">
      <el-form
        ref="loginForm2"
        :model="loginForm2"
        :rules="loginRules2"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <el-form-item prop="usermail">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="usermail"
            v-model="loginForm2.usermail"
            placeholder="你的邮箱"
            name="usermail"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>
        <el-form-item prop="userphone">
          <span class="svg-container">
            <svg-icon icon-class="user" />
          </span>
          <el-input
            ref="userphone"
            v-model="loginForm2.userphone"
            placeholder="手机号"
            name="userphone"
            type="text"
            tabindex="1"
            autocomplete="on"
          />
        </el-form-item>
        <!--        <el-form-item prop="phonecode">-->
        <!--          <span class="svg-container">-->
        <!--            <svg-icon icon-class="user" />-->
        <!--          </span>-->
        <!--          <el-input-->
        <!--            ref="phonecode"-->
        <!--            v-model="loginForm2.phonecode"-->
        <!--            placeholder="phonecode"-->
        <!--            name="phonecode"-->
        <!--            type="text"-->
        <!--            tabindex="1"-->
        <!--            autocomplete="on"-->
        <!--          />-->
        <!--          <el-button-->
        <!--            :type="flag ? 'success' : 'info'"-->
        <!--            :disabled="!flag"-->
        <!--            round-->
        <!--            style="position:absolute;right:10px;top:5px"-->
        <!--            @click.native.prevent="handleSendCode"-->
        <!--            >{{ codeText }}</el-button-->
        <!--          >-->
        <!--        </el-form-item>-->

        <el-tooltip
          v-model="capsTooltip"
          content="Caps lock is On"
          placement="right"
          manual
        >
          <el-form-item prop="password">
            <span class="svg-container">
              <svg-icon icon-class="password" />
            </span>
            <el-input
              :key="passwordType"
              ref="password"
              v-model="loginForm2.password"
              :type="passwordType"
              placeholder="Password"
              name="password"
              tabindex="2"
              autocomplete="on"
              @keyup.native="checkCapslock"
              @blur="capsTooltip = false"
              @keyup.enter.native="handleLogin"
            />
            <span class="show-pwd" @click="showPwd">
              <svg-icon
                :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
              />
            </span>
          </el-form-item>
        </el-tooltip>

        <el-button
          :loading="loading"
          type="primary"
          style="width:100%;margin-bottom:30px;"
          @click.native.prevent="handleRegist"
        >注册</el-button
        >
      </el-form>
    </div>

    <el-dialog title="Or connect with" :visible.sync="showDialog">
      Can not be simulated on local, so please combine you own business
      simulation! ! !
      <br />
      <br />
      <br />
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
import { validUsername } from "@/utils/validate";
import SocialSign from "./components/SocialSignin";
import axios from 'axios';
import qs from 'qs'

export default {
  name: "Login",
  components: {SocialSign},
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error("Please enter the correct user name"));
      } else {
        callback();
      }
    };
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6 || value.length > 32) {
        callback();
        // callback(new Error("密码在6-32位之间"));
      } else {
        callback();
      }
    };
    const validatePhone = (rule, value, callback) => {
      //email
      if (value.indexOf(".") > -1) {
        if (
          !/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
            value
          )
        ) {
          callback(new Error("邮箱格式错误"));
        } else {
          callback();
        }
      } else {
        if (!/^1[3456789]\d{9}$/.test(value)) {
          callback();
          //callback(new Error("手机号格式错误"));
        } else {
          callback();
        }
      }
    };
    //regist
    const validatePhone2 = (rule, value, callback) => {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback();
        //callback(new Error("手机号格式错误"));
      } else {
        callback();
      }
    };
    const validateCode = (rule, value, callback) => {
      if (!/^\d{6}$/.test(value)) {
        callback(new Error("Wrong input of mobile phone code number"));
      } else {
        callback();
      }
    };
    const validateMail = (rule, value, callback) => {
      if (
        !/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/.test(
          value
        )
      ) {
        callback(new Error("Wrong input of email"));
      } else {
        callback();
      }
    };

    return {
      note: {
        backgroundImage: "url(" + require("./electricty.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        marginTop: "5px"
      },

      loginForm: {
        username: "",
        password: "",
        userphone: "",
        phonecode: ""
      },
      //regist
      loginForm2: {
        password: "",
        userphone: "",
        phonecode: "",
        usermail: ""
      },
      loginRules: {
        username: [
          {required: true, trigger: "blur", validator: validateUsername}
        ],
        password: [
          {required: true, trigger: "blur", validator: validatePassword}
        ],
        userphone: [
          {required: true, trigger: "blur", validator: validatePhone}
        ]
      },
      //regist
      loginRules2: {
        password: [
          {required: true, trigger: "blur", validator: validatePassword}
        ],
        userphone: [
          {required: true, trigger: "blur", validator: validatePhone2}
        ],
        usermail: [{required: true, trigger: "blur", validator: validateMail}]
      },
      codeText: "发送验证码",
      count: "",
      timer: null,
      flag: true,
      passwordType: "password",
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      isShowLogin: true,
      isShowRegist: false,
      otherQuery: {},
      options: [
        {
          value: "admin",
          label: "admin"
        },
        {
          value: "editor",
          label: "editor"
        }
      ]
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        const query = route.query;
        if (query) {
          this.redirect = query.redirect;
          this.otherQuery = this.getOtherQuery(query);
        }
      },
      immediate: true
    }
  },
  created() {
    window.addEventListener("storage", this.afterQRScan);
  },
  mounted() {
    if (this.loginForm.username === "") {
      this.$refs.username.focus();
    } else if (this.loginForm.password === "") {
      this.$refs.password.focus();
    }
    // this.getCookie()
  },
  destroyed() {
    window.removeEventListener("storage", this.afterQRScan);
  },
  methods: {

    /*
    //点击登录调用方法
    submitForm(formName) {
      console.log("测试");
      //保存的账号
      var name = this.loginForm.username;
      //保存的密码
      var pass = this.loginForm.password;
      if (name == '' || name == null) {
        alert("请输入正确的用户名");
        return
      } else if (pass == '' || pass == null) {
        alert("请输入正确的密码");
        return
      }
      this.setCookie(name,pass,7);

    },
    //设置cookie
    setCookie(c_name,c_pwd,exdays) {
      var exdate=new Date();//获取时间
      exdate.setTime(exdate.getTime() + 24*60*60*1000*exdays);//保存的天数
      //字符串拼接cookie
      window.document.cookie="userName"+ "=" +c_name+";path=/;expires="+exdate.toGMTString();
      window.document.cookie="userPwd"+"="+c_pwd+";path=/;expires="+exdate.toGMTString();
    },
    //读取cookie
    getCookie:function () {
      if (document.cookie.length>0) {
        var arr=document.cookie.split('; ');//这里显示的格式需要切割一下自己可输出看下
        for(var i=0;i<arr.length;i++){
          var arr2=arr[i].split('=');//再次切割
          //判断查找相对应的值
          if(arr2[0]=='userName'){
            this.loginForm.userName=arr2[1];//保存到保存数据的地方
          }else if(arr2[0]=='userPwd'){
            this.loginForm.password=arr2[1];
          }
        }
      }
    },
    //清除cookie
    clearCookie:function () {
      this.setCookie("","",-1);//修改2值都为空，天数为负1天就好了
    }
  },
  */
    handleGoLogin() {
      this.isShowLogin = true;
      this.isShowRegist = false;
    },
    handleGoRegist() {
      this.isShowLogin = false;
      this.isShowRegist = true;
    },
    checkCapslock(e) {
      const {key} = e;
      this.capsTooltip = key && key.length === 1 && key >= "A" && key <= "Z";
    },
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
    handleSendCode() {
      if (!this.loginForm2.userphone) {
        this.$message({
          message: "请先输入手机号",
          type: "warning"
        });
        return;
      }
      if (
        this.loginForm2.userphone &&
        /^1[3456789]\d{9}$/.test(this.loginForm2.userphone)
      ) {
        this.$message({
          message: "已发送手机，请注意查收",
          type: "success"
        });
        if (!this.timer) {
          this.flag = false;
          this.count = 60;
          this.timer = setInterval(() => {
            this.codeText = this.count + "s";
            if (this.count > 0 && this.count <= 60) {
              this.count--;
            } else {
              clearInterval(this.timer);
              this.timer = null;
              this.codeText = "重新获取";
              this.flag = true;
            }
          }, 1000);
        }
      }
    },
    handleRegist() {
      // if (!this.loginForm2.phonecode) {
      //   this.$message({
      //     message: "请先获取验证码",
      //     type: "fail"
      //   });
      //   return;
      // }
      this.$refs.loginForm2.validate(valid => {
        if (valid) {
          var axios = require('axios');
          var data = {phone:this.loginForm2.userphone,email:this.loginForm2.usermail,password:this.loginForm2.password};

          var config = {
            method: 'post',
            url: 'http://localhost:7071/api/user/register',
            headers: {
              'Content-Type': 'application/json'
            },
            data : data
          };
          console.log(config);

          axios(config)
            .then(response => {
              console.log(response.data.code);
              if(response.data.code == 0){

                this.$message.success("注册成功");

                this.isShowLogin = true;
                this.isShowRegist = false;
                return true;
              }
              console.log(response);
              this.$message.error("注册失败");
              return false;
            })
            .catch(function (error) {
              console.log(error);
            });

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          var axios = require('axios');
          var data = 'phone='+ this.loginForm.userphone +'&password=' + this.loginForm.password;


          var config = {
            method: 'post',
            url: 'http://localhost:7071/api/user/login',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
          };
          console.log(config);
          axios(config)
            .then(response => {
              console.log(response);
              if(response.data.code != 0){
                this.$message.error("登录失败");
                this.loading = false;
                return false;
              }
              this.$store
                .dispatch("user/login", this.loginForm)
                .then(() => {
                  this.$router.push({
                    path: this.redirect || "/",
                    query: this.otherQuery
                  });
                  this.loading = false;
                })
                .catch(() => {
                  this.$message.error("登录失败");
                  this.loading = false;
                });
            })
            .catch(function (error) {
              console.log(error);
            });


          /*
          const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            data: qs.stringify(data),
            url: '/api/user/login'
          };

          axios(options)
            .then(res => {
              console.log(res.data);
              if(res.data.code != 0){
                this.loading = false;
                return false;
              }
              this.$store
                .dispatch("user/login", this.loginForm)
                .then(() => {
                  this.$router.push({
                    path: this.redirect || "/",
                    query: this.otherQuery

                  });
                  this.loading = false;
                })
                .catch(() => {
                  this.$message.error("登录失败");
                  this.loading = false;
                });
            })
            */
        } else {
          console.log("error submit!!");
          return false;
        }

        /*
        if (valid) {
          this.loading = true;
          this.$store
            .dispatch("user/login", this.loginForm)
            .then(() => {

              this.$router.push({
                path: this.redirect || "/",
                query: this.otherQuery

              });
              this.loading = false;
            })
            .catch(() => {
              this.$message.error("登录失败");
              this.loading = false;
            });
        } else {
          console.log("error submit!!");
          return false;
        }*/
      });
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== "redirect") {
          acc[cur] = query[cur];
        }
        return acc;
      }, {});
    }
    //afterQRScan() {
    //if (e.key === 'x-admin-oauth-code') {
    //const code = getQueryObject(e.newValue)
    //const codeMap = {
    //wechat: 'code',
    //tencent: 'code'
    //}
    //const type = codeMap[this.auth_type]
    //const codeName = code[type]
    //if (codeName) {
    //  this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
    //   this.$router.push({ path: this.redirect || '/' })
    // })
    // } else {
    //   alert('第三方登录失败')
    // }
    // }
    // }
  }
};

</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

$bg: #283443;
$light_gray: #ffffff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */

.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.title-container {
  padding: 160px 0 20px 0;
}
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    // padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;
    text-align: center;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }

  .thirdparty-button {
    position: absolute;
    right: 0;
    bottom: 6px;
  }

  @media only screen and (max-width: 470px) {
    .thirdparty-button {
      display: none;
    }
  }
}
.el-select {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
  width: 100%;
  margin-bottom: 20px;
}
</style>
