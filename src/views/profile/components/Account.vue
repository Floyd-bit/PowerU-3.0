/* eslint-disable */
<template>
  <div>
    <el-card shadow="hover">
      <div class="detail-container">
        <el-form>
          <el-form-item label="姓名">
            <el-input v-model.trim="user.name" />
          </el-form-item>
          <el-form-item label="电子邮箱">
            <el-input v-model.trim="user.email" />
          </el-form-item>
          <el-form-item label="昵称">
            <el-input v-model.trim="user.username" />
          </el-form-item>
          <el-form-item label="手机号码">
            <el-input v-model.trim="user.phonenumber" />
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model.trim="user.IDNumber" />
          </el-form-item>
          <el-form-item label="详细地址">
            <el-input v-model.trim="user.address" />
          </el-form-item>
          <el-form-item label="用户权限等级">
            <el-input v-model.trim="user.adminlevel" />
          </el-form-item>
          <el-form-item label="用户信用等级">
            <el-input v-model.trim="user.credibility" />
          </el-form-item>
          <el-form-item label="收益">
            <el-input v-model.trim="user.income" />
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model.trim="user.sex" />
          </el-form-item>
          <el-form-item label="生日">
            <el-input v-model.trim="user.birthday" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit">上传</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card >
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: '',
          email: '',
          username: '',
          phonenumber: '',
          IDNumber: '',
          address: '',
          adminlevel: '',
          credibility: '',
          income: '',
          sex: '',
          birthday: '',
        }
      }
    }
  },
  methods: {
    submit() {
      this.$message({
        message: '上传成功',
        type: 'success',
        duration: 5 * 1000
      })

      // //console.log("ready to submit!");
      // this.fullscreenLoading = true;
      // this.form.hyperParameters = this.hyperParameter;
      // var data = new FormData();
      // var files = document.getElementById("filesInput").files;
      // for (var i = 0; i < files.length; i++) {
      //   data.append("myfile", files[i]);
      // }
      // // data.append('myfile', document.getElementById('filesInput').files[0])
      // data.append("data", JSON.stringify(this.form));
      // console.log(files);
      // console.log(JSON.stringify(this.form));
      //
      // axios.post("/algorithm/frontstage/algorithm", data).then((response) => {
      //   console.log(response);
      //   this.fullscreenLoading = false;
      //   if (response.data.code == "00000") {
      //     axios.get(
      //       "/train/frontstage/image/" +
      //       response.data.extend.algorithmId.toString()
      //     );
      //     alert("算法上传成功！");
      //   } else {
      //     alert("上传失败，请重试！");
      //   }
      //   location.reload();
      // });//
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

