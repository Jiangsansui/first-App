<template>
  <div class="container">
    <div class="content">
      <div class="contentOne">
        <div class="box">
          <div class="boxleft">
            <p>取号量</p>
            <p>2311</p>
          </div>
        </div>
        <div class="box">
          <div class="boxleft">
            <p>收件量</p>
            <p style="color: #d941e9">{{getpieceNum()}}</p>
          </div>
          <div class="boxright">
            <p @click="goto(sjlxq())">查看详情></p>
          </div>
        </div>
        <div class="box">
          <div class="boxleft">
            <p>受理量</p>
            <p style="color: #f1c101">{{ getacceptNum()}}</p>
          </div>
          <div class="boxright">
            <p>查看详情></p>
          </div>
        </div>
        <div class="box">
          <div class="boxleft">
            <p>办结量</p>
            <p style="color: #9349f9">{{ getfinishNum()}}</p>
          </div>
          <div class="boxright">
            <p>查看详情></p>
          </div>
        </div>
      </div>
      <!--      个人和法人办理量比例情况-->
      <div class="contentTwo">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">个人和法人办理量比例情况</span>
        </div>
        <div class="main">
          <div class="li">
            <el-progress id="bjtjc1" type="circle" :percentage="getpersonalNum()" :width="150" :stroke-width="14"></el-progress>
            <div class="text">个人</div>
            <div class="shade"></div>
          </div>
          <div class="li">
            <el-progress id="bjtjc2" type="circle" :percentage="getper()" :width="150" :stroke-width="14"></el-progress>
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
      return {code:132}
    },
    mounted () {
      $('#bjtjc1>.el-progress__text').css('color','#f1c101');
      $('#bjtjc2>.el-progress__text').css('color','#d200ff');
      this.$(".content").css("height",this.$(".container").height()-10+"px")
      this.$(".contentTwo").css("height",this.$(".content").height()-this.$(".contentOne").height()-10+"px")
      console.log(this.$(".contentTwo").height(),'After第二个盒子')
    },
    methods: {
      sjlxq() {this.$router.push({path: "/sjlxq"});},
      // 收件量
      getpieceNum(){
        var per;
        this.$.ajax({ url: "http://10.10.2.11:8037/api/data/pieceNum", async:false, success:(res)=>{
            console.log(res);
            per=res.data.pieceNum;
          }});
        return per;
      },
      // 受理量
      getacceptNum(){
        var per;
        this.$.ajax({ url: "http://10.10.2.11:8037/api/data/acceptNum", async:false, success:(res)=>{
            console.log(res);
            per=res.data.acceptNum;
          }});
        return per;
      },
      //办结量
      getfinishNum(){
        var per;
        this.$.ajax({ url: "http://10.10.2.11:8037/api/data/finishNum",async:false,  success:(res)=>{
            console.log(res);
            per=res.data.finishNum;
          }});
        return per;
      },
      // 个人办理量
      getpersonalNum(){
        var per;
        this.$.ajax({ url: "http://10.10.2.11:8037/api/data/personalNum",async:false,  success:(res)=>{
            console.log(res);
            per=res.data.personalNum;
          }});
        return per;
      },
      // 法人办理量
      getper(){
        var per;
        this.$.ajax({ url: "http://10.10.2.11:8037/api/data/legalPersonNum",async:false,  success:(res)=>{
            console.log(res);
            per=res.data.legalPersonNum;
          }});
        return per;
      },
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    .content{
      width: 100%;
      height: 100%;
      .contentOne{
        width: 96%;
        background-color: #ffffff;
        margin-left: 2%;
        border-radius: 20px;
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .box{
          position: relative;
          width: 50%;
          height: 280px;
          div:nth-child(1)::before {
            content: '';
            position: absolute;
            width: 200%;
            left: 0;
            height: 1px;
            bottom: 0;
            border-bottom: 1px dashed rgb(235, 235, 239);
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-box-sizing: border-box;
            box-sizing: border-box
          }
          div:nth-child(1)::after {
            content: '';
            position: absolute;
            height: 150%;
            top: 30px;
            width: 1px;
            right: 0;
            border-right: 1px dashed rgb(235, 235, 239);
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
            -webkit-box-sizing: border-box;
            box-sizing: border-box
          }
          p{
            margin-block-start: 0;
            margin-block-end: 0;
          }
          .boxleft{
            padding-left: 30px;
            float: left;
            p:nth-child(1){
              position: absolute;
              margin-block-start: 2em;
              font-size: 30px;
            }
            p:nth-child(2){
              color: #329aff;
              margin-block-start:1.8em;
              font-size: 70px;
              font-weight: bolder;
              text-align: left;
            }
          }
          .boxright{
            position: absolute;
            margin-left: 50%;
            p{
              color: #329aff;
              margin-top: 160px;
              float: right;
              font-size: 28px;
              margin-block-end: 1em;
            }
          }
        }
      }
      .contentTwo{
        width: 96%;
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
