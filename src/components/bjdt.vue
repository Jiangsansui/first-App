<template>
  <div class="container">
    <div class="search">
    <p>部门信息</p>
    <input type="text"></input>
    <img src="../assets/search.png">
  </div>
    <div class="content">
<div class="box">
<span class="circle"></span>
  <span @click="cqjy()">产权交易</span>
</div>
      <div class="box">
        <span class="circle"></span>
        <span>产权交易</span>
      </div>
      <div class="box">
        <span class="circle"></span>
        <span>发改局</span>
      </div>
      <div class="box">
        <span class="circle"></span>
        <span style="margin-left: 0.2rem">事业单位登记管理局</span>
      </div>
      <div class="box">
        <span class="circle"></span>
        <span>产权交易</span>
      </div> <div class="box">
      <span class="circle"></span>
      <span>产权交易</span>
    </div>
      <div class="box">
        <span class="circle"></span>
        <span>发改局</span>
      </div> <div class="box">
      <span class="circle"></span>
      <span style="margin-left: 0.2rem">事业单位登记管理局</span>
    </div>
      <div class="box">
        <span class="circle"></span>
        <span>产权交易</span>
      </div>
      <div class="box">
        <span class="circle"></span>
        <span style="margin-left: 0.2rem">事业单位登记管理局</span>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "bjdt",
      data(){
          return{

          }
      },
      methods:{
          cqjy(){
            this.$router.push({path: "/cqjy"});
          }
      }

    }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    .search{
      position: relative;
      width: 100%;
      height: 90px;
      background-color: #ffffff;
      border-bottom: 5px solid #e7e7e7;
      p{
        position: absolute;
        margin-left: 20px;
        font-size: 35px;
        line-height:30px;
      }
      input{
        width: 66%;
        height: 1rem;
        margin-left: 1.2rem;
        margin-top: 0.1rem;
        border: none;
        outline: none;
      }
img{
  width: 0.6rem;
  margin-top: 0.4rem;
  position: absolute;
  margin-left: 0.2rem;
}
    }
    .content{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      .box{
        width: 45%;
        height: 150px;
        background-color: #ffffff;
        margin-top: 0.4rem;
        margin-left: 3%;
        border-radius: 20px;
        box-shadow: 0px 1px 7px 1px rgba(184, 184, 184, 0.8);
     .circle{
       width: 5%;
       height: 34px;
       background-color: rgb(30,132,231);
       border-top-right-radius: 1.5rem;
       border-bottom-right-radius: 1.5rem;
       float: left !important;
       margin-top: 0.85rem;
     }
        span:last-child{
          line-height: 2.2rem;
          float: left;
          margin-left: 8.9%;
          font-size: 0.4rem;
        }
      }

    }
  }


</style>
