/* eslint-disable */
<template>
  <el-card style="margin-bottom:20px;">
    <div slot="header" class="clearfix">
      <span>关于</span>
    </div>

    <div class="user-profile">
      <div class="box-center">
        <pan-thumb :image="user.avatar" :height="'100px'" :width="'100px'" :hoverable="false">
          <div>Hello</div>
          {{ user.role }}
        </pan-thumb>
      </div>
      <div class="box-center">
        <div class="user-name text-center">{{ "用户名:"+user.name }}</div>
      </div>
    </div>

    <div class="user-bio">
      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-message"></i>

          <span>邮箱</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">202726@whu.edu.cn</div>
        </div>
      </div>
      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <!-- <svg-icon icon-class="" /> -->
          <i class="el-icon-phone"></i>
          <span>联系方式</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">{{user.phonenumber}}</div>
        </div>
      </div>
      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <!-- <svg-icon icon-class="education" /> -->
          <i class="el-icon-coin"></i>

          <span>昵称</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">{{user.username}}</div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-message"></i>

          <span>身份证号</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">{{user.IDNumber}}</div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-message"></i>

          <span>详细地址</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">{{user.address}}</div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-message"></i>

          <span>权限等级</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">{{user.adminlevel}}</div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-message"></i>

          <span>信用等级</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">{{user.credibility}}</div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-message"></i>

          <span>收益</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">{{user.income}}</div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-message"></i>

          <span>性别</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">{{user.sex}}</div>
        </div>
      </div>

      <div class="user-skills user-bio-section">
        <div class="user-bio-section-header">
          <i class="el-icon-message"></i>

          <span>生日</span>
        </div>
        <div class="user-bio-section-body">
          <div class="text-muted">{{user.birthday}}</div>
        </div>
      </div>



    </div>
  </el-card>
</template>

<script>
import PanThumb from "@/components/PanThumb";

export default {
  components: { PanThumb },
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          name: "123456",
          email: "",
          avatar: "",
          phonenumber: "",
          IDNumber:"",
          address:"",
          adminlevel:"",
          credibility:"",
          income:"",
          sex:"",
          birthday:"",
        };
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.box-center {
  margin: 0 auto;
  display: table;
}

.text-muted {
  color: #777;
}

.user-profile {
  .user-name {
    font-weight: bold;
  }

  .box-center {
    padding-top: 10px;
  }

  .user-role {
    padding-top: 10px;
    font-weight: 400;
    font-size: 14px;
  }

  .box-social {
    padding-top: 30px;

    .el-table {
      border-top: 1px solid #dfe6ec;
    }
  }

  .user-follow {
    padding-top: 20px;
  }
}

.user-bio {
  margin-top: 20px;
  color: #606266;

  span {
    padding-left: 4px;
  }

  .user-bio-section {
    font-size: 14px;
    padding: 15px 0;

    .user-bio-section-header {
      border-bottom: 1px solid #dfe6ec;
      padding-bottom: 10px;
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
}
</style>
