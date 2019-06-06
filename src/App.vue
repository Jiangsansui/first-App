<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>

  html,body{
    width: 100%;
    height: 100%;
    background-color: #f0f0f4;
  }
body{
  margin: 0;
  padding: 0;
}

  .container{
    background-color: #f0f0f4 !important;
    height: 100% !important;
  }
   /*设置进度环颜色*/
  .el-progress /deep/ path:nth-of-type(2){
      stroke: #f1c101;
    }
  #bjtjc1{
    margin-top: 100px !important;
    margin-left:5%;

  }
  #bjtjc2{
    margin-top: 100px !important;
    margin-left: 10%;
  }

  #bjtjc2 .el-progress-circle, #bjtjc1 .el-progress-circle{
    width: 300px !important;
  }
  #bjtjc2 /deep/ path:nth-of-type(2){
    stroke: #d200ff;
  }
  #lctjc1 /deep/ path:nth-of-type(2){
    stroke: #d200ff;
  }
  #lctjc2 /deep/ path:nth-of-type(2){
    stroke: #f1c101;
  }
  #lctjc3 /deep/ path:nth-of-type(2){
    stroke: #1e84e7;
  }
  .el-progress-bar{
  padding-top: 48px !important;
  margin-left: 10%;
}
  .el-progress-bar__inner{
    background-color: #efc203;
  }
  .el-progress-bar__outer{
  width: 85%;
  height: 36px !important;
}
#app {
  font-family:PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 62.5%;
  width: 100%;
  height: 100%;
}
</style>
