<template>
  <div class="dashboard-editor-container">
    <github-corner class="github-corner" />
    <el-row :gutter="5">
      <el-col :span="16" :offset="2" >
        <div class="grid-content1">
          <div class="first">
            <el-card>
              传统光伏电力交易主要采用双边交易或多边交易模式，效率较低，能源流、资金流清分程序复杂，而基于区块链的电力交易，不但可以提升交易效率，还能进一步提升电力交易的智慧化水平和公信力。“PowerU”平台是一个为实现光伏电力供需关联互动和“发-储-配-用”精准调配、安全校核和自主交易的平台，为构建我国智能化电网提供解决方案，并可拓展出“PowerU+扶贫”等具有社会效益的价值型项目。
            </el-card>
          </div>
          <div class="second">
            <el-card>
              这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
              这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
              这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
              这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
              这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
              这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述
            </el-card>
          </div>
        </div>
      </el-col>
      <el-col :span="2" :offset="0">
        <div class="grid-content2">
          <todo-list></todo-list>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TodoList from '../admin/components/TodoList'


export default {
  name: 'DashboardAdmin',
  components: {
    TodoList,
  },
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  //padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0;
    border: 0;
    right: 0;
  }
  .grid-content1{
    width: 800px;
    height: 700px;
    //background: #1e88c7;
    .first{
      width:800px;
      height:200px;
      margin-top: 50px;
      //background: #1f2d3d;
    }
    .second{
      width:800px;
      height:300px;

      //background: #2ac06d;
    }
  }
  .grid-content2{
    //background: #1e88c7;
    width: 300px;
    height:700px;
    margin-top: 50px;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 30px;
  }
}
</style>
