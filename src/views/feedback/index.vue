<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="反馈者">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="反馈信息">
        <el-select v-model="form.region" placeholder="请选择类型">
          <el-option label="发电量过低" value="low" />
          <el-option label="发电量过高" value="high" />
        </el-select>
      </el-form-item>
      <el-form-item label="反馈时间">
        <el-col :span="11">
          <el-date-picker v-model="form.date1" type="date" placeholder="选择日期" style="width: 100%;" />
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-time-picker v-model="form.date2" type="fixed-time" placeholder="选择时间" style="width: 100%;" />
        </el-col>
      </el-form-item>
      <el-form-item label="反馈内容是否解决">
        <el-switch v-model="form.delivery" />
      </el-form-item>

      <el-form-item label="反馈内容">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$message('提交')
    },
    onCancel() {
      this.$message({
        message: '取消',
        type: 'warning'
      })
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>
