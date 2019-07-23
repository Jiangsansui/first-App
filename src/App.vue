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
  .container{
    background-color: #f0f0f4 !important;
    height: 100% !important;
    overflow: hidden !important;
    overflow-y:auto !important;
  }
  html,body{
    width: 100% !important;
    height: 100% !important;
    background-color: #f0f0f4 !important;
  }
  body{
    margin: 0;
    padding: 0;
  }
  /*设置(排队情况)页面的下拉菜单样式*/
  .el-select,
  .el-select-dropdown el-popper{
    float: left !important;
    margin-left: 5% !important;
    margin-top: 18px !important;
  }
  .el-input__inner{
    width:250px !important;
    height: 60px !important;
    border-radius: 12px !important;
    border:none !important;
    background-color: #ebebef !important;
    font-family:'iconfont' !important;
    font-size:30px !important;
    padding-left: 20px !important;
    font-family: STXihei !important;
    color:rgb(4,5,16) !important;
    letter-spacing: 1.5px !important;
  }

  .el-input__suffix{
    border-radius:0 12px 12px 0 !important;
    width: 80px !important;
    height: 60px !important;
    background-color: #1e84e7 !important;
  }
  .el-select-dropdown__item{
    height: 60px !important;
    line-height: 60px !important;
    text-align: center !important;
    font-size: 28px !important;
    letter-spacing: 1.5px !important;
  }

  /*设置进度环颜色*/
  .el-progress /deep/ path:nth-of-type(2){
    stroke: #f1c101 !important;
  }
  .el-progress__text{
    font-weight: bolder !important;
    font-size: 38px !important;
    margin-top: -2% !important;
  }
  #bjtjc2 .el-progress-circle,
  #bjtjc1 .el-progress-circle{
    width: 300px !important;
  }
  #bjtjc2 /deep/ path:nth-of-type(2){
    stroke: #d200ff !important;
  }
  #lctjc1 /deep/ path:nth-of-type(2){
    stroke: #d200ff !important;
  }
  #lctjc2 /deep/ path:nth-of-type(2){
    stroke: #f1c101 !important;
  }
  #lctjc3 /deep/ path:nth-of-type(2){
    stroke: #1e84e7 !important;
  }
  .el-progress-bar{
    padding-top: 48px !important;
    margin-left: 10% !important;
  }
  .el-progress-bar__inner{
    background-color: #efc203;
  }
  .el-progress-bar__outer{
    width: 85% !important;
    height: 36px !important;
  }

  .swiper-pagination-bullet{
    border-radius: 5px !important;
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
