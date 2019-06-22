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
          <div class="li">
            <el-progress id="bjtjc1" type="circle" :percentage="25" :width="150" :stroke-width="14"></el-progress>
            <div class="text">个人</div>
            <div class="shade"></div>
          </div>
          <div class="li">
            <el-progress id="bjtjc2" type="circle" :percentage="25" :width="150" :stroke-width="14"></el-progress>
            <div class="text">法人</div>
            <div class="shade"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'

  export default {
    name: "bjtj",
    data() {
      return {

      }
    },
    mounted () {
      $('#bjtjc1>.el-progress__text').css('color','#f1c101');
      $('#bjtjc2>.el-progress__text').css('color','#d200ff');
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
          margin: 0 20px;
          display: -webkit-box;
          -webkit-box-orient: horizontal;
          .li{
            -webkit-box-flex: 1;
            margin-top: 100px;
            position: relative;
            .text {
              width: 50px;
              text-align: center;
              margin-left: -25px;
              position: absolute;
              left: 50%;
              top: 55%;
            }
          }
          .shade{
            position: absolute;
            width: 50%;
            box-shadow:0px 20px 40px 15px rgba(191, 191, 191, 0.6);
            left: 25%;
            bottom: -20px;
          }
        }
      }
    }

  }


</style>
