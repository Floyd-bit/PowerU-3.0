/* eslint-disable */
<template>
  <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
    <el-form-item
      label="设备验证码"
      prop="equipmentcode"
      :rules="[
      { required: true, message: '验证码不能为空'},
      { type: 'number', message: '验证码必须为数字值'}
    ]"
    >
      <el-input type="equipmentcode" v-model.number="numberValidateForm.equipmentcode" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item
      label="设备地址"
      prop="equipmentaddress"
      :rules="[
      { required: true, message: '设备地址不能为空'},
    ]"
    >
      <el-input type="equipmentaddress" v-model.number="numberValidateForm.equipmentaddress" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item
      label="设备名字"
      prop="equipmentname"
      :rules="[
      { required: true, message: '设备名字不能为空'},
    ]"
    >
      <el-input type="equipmentname" v-model.number="numberValidateForm.equipmentname" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
      <el-button @click="resetForm('numberValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {
        equipmentcode: '',
        equipmentaddress:'',
        equipmentname:'',
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="scss" scoped>
.detail-container {

}
.file {
  position: relative;
  display: inline-block;
  background: #d0eeff;
  border: 1px solid #99d3f5;
  border-radius: 4px;
  padding: 4px 12px;
  overflow: hidden;
  color: #1e88c7;
  text-decoration: none;
  text-indent: 0;
  line-height: 20px;
}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
.selectBox {
  width: 390px !important;
}
</style>
