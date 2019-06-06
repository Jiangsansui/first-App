<template>
  <div class="container">
    <div class="content">
      <div class="contentOne">
        <div>
          <p>取号量</p>
          <div class="right">
          <p>1023</p>
        </div>
        </div>
        <div>
          <p>收件量</p>
          <div class="right">
            <p style="color: #d941e9">256</p> <p @click="goto(sjlxq())">查看详情></p>
          </div>
        </div>
        <div style="padding-bottom:120px;">
          <p>受理量</p>
          <div class="right">
            <p style="color: #f1c101">360</p> <p>查看详情></p>
          </div>
        </div>
        <div>
          <p>办结量</p>
          <div class="right">
            <p style="color: #9349f9">406</p> <p>查看详情></p>
          </div>
        </div>
      </div>
      <div class="contentTwo">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">个人和法人办理量比例情况</span>
        </div>
        <div class="main">
          <el-progress id="bjtjc1"  type="circle" :percentage="25" :width="150" :stroke-width="14"></el-progress>
          <div class="shade"></div>
          <el-progress id="bjtjc2"  type="circle" :percentage="25" :width="150" :stroke-width="14"></el-progress>
          <div class="num"></div>
          <div class="shadeTwo"></div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
  export default {
    name: "bjtj",
    data() {
      return {}
    },
    methods: {
      sjlxq() {
        this.$router.push({path: "/sjlxq"});
      }
    }
  }

</script>
<style lang="scss" scoped>
  .container {
    overflow: hidden;
    width: 100%;
  .content{
    width: 100%;
    .contentOne{
      width: 96%;
      background-color: #ffffff;
      margin-left: 2%;
      border-radius: 20px;
      margin-top: 10px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      div {
        padding-top: 40px;
        padding-bottom:120px;
        width: 50%;
        position: relative;
          p{
            float: left;
            font-size: 30px;
            margin-left: 11%;
        }
        .right{
          position: absolute;
          width: 100%;
          display: flex;
          flex-direction: row;
          p:nth-of-type(1){
            color: #329aff;
            font-size: 72px;
            font-weight: bolder;
          }
          p:nth-of-type(2){
            color: #64b3e7;
            font-size: 26px;
            line-height: 230px;
          }
        }
      }
    }
    .contentTwo{
      width: 96%;
      height: 685px;
      background-color: #ffffff;
      margin-left: 2%;
      border-radius: 20px;
      margin-top: 10px;
      .head{
        padding-top: 30px;
        width: 100%;
        height: 50px;
        img{
          margin-top: 13px;
          float: left;
          margin-left: 4%;
          width: 24px;
          height: 18px;
        }
        .text{
          float: left;
          margin-left: 2%;
          font-size: 30px;
        }
      }
      .main{
        float: left;
        display: flex;
        flex-direction: row;
        position: relative;
        .shade{
          position: absolute;
          width: 31%;
          box-shadow:0px 30px 90px 30px rgba(216,216,216, 0.6);
          margin-top: 450px;
          margin-left: 14%;
        }
        .shadeTwo{
          position: absolute;
          width: 31%;
          box-shadow:0px 30px 90px 30px rgba(216,216,216, 0.6);
          margin-top: 450px;
          margin-left: 81%;
        }
      }
    }
  }
    @media screen and (max-height: 640px) {
      .contentOne{
        height: 637px;
      }
      .shade{
        margin-top: 470px !important;
        margin-left: 14% !important;
      }
      .shadeTwo{
        margin-top: 470px !important;
        margin-left: 81% !important;
      }
      /*#bjtjc1,#bjtjc2{*/
      /*  margin-top: 100px !important;*/
      /*}*/
      /*#bjtjc2{*/
      /*  margin-left: 5% !important;*/
      /*}*/
    }
    @media screen and (max-height: 667px) {
      .contentTwo {
        height: 665px !important;
        .shade,.shadeTwo{
          margin-top: 470px !important;
        }
        .shade {
          margin-left: 14% !important;
        }
        .shadeTwo {
          margin-left: 74% !important;
        }
        /*#bjtjc2{*/
        /*  margin-left: 8% !important;*/
        /*}*/
      }
    }
    @media screen and (min-height: 812px) {
      .contentTwo {
        height: 955px !important;
        .shade,.shadeTwo{
          margin-top: 550px !important;
        }
        .shade {
          margin-left: 15% !important;
        }
        .shadeTwo {
          margin-left: 74% !important;
        }
      }
    }
  }


</style>
