<template>
    <div class="container">
      <div class="content">
        <div class="boxOne">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">办理次数最多得窗口</span>
          </div>
          <div class="main">
              <img src="../assets/logo1.png">
              <span class="title">房屋租赁登记备案</span>
              <span style="margin-top: 3px">条</span>
              <span class="num" style="color:rgb(210,0,255);">123</span>
          </div>
          <div class="main">
            <img src="../assets/logo2.png">
            <span class="title">房屋租赁登记备案</span>
            <span style="margin-top: 3px">条</span>
            <span class="num" style="color:rgb(239,194,3);">123</span>
          </div>
          <div class="main">
          <img src="../assets/logo3.png">
          <span class="title">房屋租赁登记备案</span>
          <span style="margin-top: 3px">条</span>
          <span class="num" style="color:rgb(30,132,231);">123</span>
      </div>
          <div class="click" @click="goto(zhpmxq())">
            查看详情>
          </div>
        </div>
        <div class="boxTwo">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">咨询次数最多的事项情况</span>
          </div>
          <div class="main">
            <img src="../assets/logo1.png">
            <span class="title">房屋租赁登记备案</span>
            <span style="margin-top: 3px">条</span>
            <span class="num" style="color:rgb(210,0,255);">123</span>
          </div>
          <div class="main">
            <img src="../assets/logo2.png">
            <span class="title">房屋租赁登记备案</span>
            <span style="margin-top: 3px">条</span>
            <span class="num" style="color:rgb(239,194,3);">123</span>
          </div>
          <div class="main">
          <img src="../assets/logo3.png">
          <span class="title">房屋租赁登记备案</span>
          <span style="margin-top: 3px">条</span>
          <span class="num" style="color:rgb(30,132,231);">123</span>
        </div>
          <div class="main">
            <img src="../assets/logo4.png">
            <span class="title">房屋租赁登记备案</span>
            <span style="margin-top: 3px">条</span>
            <span class="num" style="color:rgb(30,132,231);">123</span>
          </div>
          <div class="click">
            查看详情>
          </div>
        </div>
        <div class="cont">
          <div class="boxThree">
            <div class="head">
              <img src="../assets/down.png">
              <span class="text">受理量最多的窗口</span>
            </div>
            <div class="main">
              <span class="title">001号窗口</span>
              <span style="margin-top: 3px">件</span>
              <span class="num" style="color:rgb(210,0,255);">256</span>
            </div>
            <div class="main">
              <span class="title">001号窗口</span>
              <span style="margin-top: 3px">件</span>
              <span class="num" style="color:rgb(210,0,255);">256</span>
            </div>
            <div class="main">
              <span class="title">001号窗口</span>
              <span style="margin-top: 3px">件</span>
              <span class="num" style="color:rgb(210,0,255);">256</span>
            </div>
            <div class="main">
              <span class="title">001号窗口</span>
              <span style="margin-top: 3px">件</span>
              <span class="num" style="color:rgb(210,0,255);">256</span>
            </div>
            <div class="click">
              查看详情>
            </div>
          </div>
          <div class="boxFour">
            <div class="head">
              <img src="../assets/down.png">
              <span class="text">办件量最多的窗口</span>
            </div>
            <div class="main">
              <span class="title">档案</span>
              <span style="margin-top: 3px">件</span>
              <span class="num" style="color:rgb(210,0,255);">256</span>
            </div>
            <div class="main">
              <span class="title">民政</span>
              <span style="margin-top: 3px">件</span>
              <span class="num" style="color:rgb(210,0,255);">256</span>
            </div>
            <div class="main">
              <span class="title">民政</span>
              <span style="margin-top: 3px">件</span>
              <span class="num" style="color:rgb(210,0,255);">256</span>
            </div>
            <div class="main">
              <span class="title">民政</span>
              <span style="margin-top: 3px">件</span>
              <span class="num" style="color:rgb(210,0,255);">256</span>
            </div>
            <div class="click">
              查看详情>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "zhpm",
      methods: {
       zhpmxq() {
          this.$router.push({path: "/zhpmxq"});
        }
        }
    }
</script>
<style lang="scss" scoped>
.container{
  overflow: hidden;
  width: 100%;
  .content{
    width: 100%;
    .boxOne{
      height: 370px;
      margin-top: 10px;
      width: 96%;
      background-color: #ffffff;
      border-radius: 20px;
      margin-left: 2%;
      .head{
        padding-top: 30px;
        width: 100%;
        img{
          margin-top: 13px;
          float: left;
          margin-left: 4%;
          width: 24px;
          height: 18px;
        }
        .text{
          color:rgb(4,45,16);
          float: left;
          margin-left: 2%;
          font-size: 30px;
        }
      }
      .main{
        margin-top: 20px;
        float: left;
        width: 100%;
          img{
            float: left;
            margin-left: 3%;
            width: 50px;
          }
          .title{
            float: left;
            margin-left: 5%;
            font-size: 24px;
            color:rgb(4,5,16);
          }
        .num{
          font-size: 38px;
          font-weight: bolder;
          letter-spacing: -1px;
          margin-right: 2%;
        }
        span{
          line-height: 50px;
          float: right;
          margin-right: 4%;
          font-size: 20px;
          color:rgb(167,167,167);
        }


      }
      .click{
        padding-top: 280px;
        color: #1e84e7;
        letter-spacing: 1px;
        font-size: 28px;
      }
    }
    .boxTwo{
      height: 500px;
      margin-top: 10px;
      width: 96%;
      background-color: #ffffff;
      border-radius: 20px;
      margin-left: 2%;
      .head{
        padding-top: 30px;
        width: 100%;
        img{
          margin-top: 13px;
          float: left;
          margin-left: 4%;
          width: 24px;
          height: 18px;
        }
        .text{
          color:rgb(4,45,16);
          float: left;
          margin-left: 2%;
          font-size: 30px;
        }
      }
      .main{

        margin-top: 30px;
        float: left;
        width: 100%;
        img{
          float: left;
          margin-left: 3%;
          width: 50px;
        }
        .title{
          float: left;
          margin-left: 5%;
          font-size: 24px;
          color:rgb(4,5,16);
        }
        .num{
          font-size: 38px;
          font-weight: bolder;
          letter-spacing: -1px;
          margin-right: 2%;
        }
        span{
          line-height: 50px;
          float: right;
          margin-right: 4%;
          font-size: 20px;
          color:rgb(167,167,167);
        }


      }
      .click{
        padding-top: 400px;
        color: #1e84e7;
        letter-spacing: 1px;
        font-size: 28px;
      }
    }
    .cont{
      margin-top: 10px;
      width: 96%;
      margin-left: 2%;
      display: flex;
      flex-direction: row;
      .boxThree{
        width:49%;
        height: 420px;
        background-color: #ffffff;
        border-radius: 20px;
        .head{
          padding-top: 30px;
          width: 100%;
          img{
            margin-top: 13px;
            float: left;
            margin-left: 4%;
            width: 24px;
            height: 18px;
          }
          .text{
            color:rgb(4,45,16);
            float: left;
            margin-left: 2%;
            font-size: 30px;
          }
        }
        .main{
          margin-top: 20px;
          float: left;
          width: 100%;
          .title{
            float: left;
            margin-left: 5%;
            font-size: 24px;
            color: rgb(210, 0, 255);
          }
          .num{
            font-size: 38px;
            font-weight: bolder;
            letter-spacing: -1px;
            margin-right: 2%;
          }
          span{
            line-height: 50px;
            float: right;
            margin-right: 4%;
            font-size: 20px;
            color:rgb(167,167,167);
          }


        }
        .click{
          padding-top: 200px;
          color: #1e84e7;
          letter-spacing: 1px;
          font-size: 28px;
        }
      }
      .boxFour{
        margin-left: 3%;
        width:49%;
        height: 420px;
        background-color: #ffffff;
        border-radius: 20px;
        .head{
          padding-top: 30px;
          width: 100%;
          img{
            margin-top: 13px;
            float: left;
            margin-left: 4%;
            width: 24px;
            height: 18px;
          }
          .text{
            color:rgb(4,45,16);
            float: left;
            margin-left: 2%;
            font-size: 30px;
          }
        }
        .main{

          margin-top: 20px;
          float: left;
          width: 100%;

          .title{
            float: left;
            margin-left: 5%;
            font-size: 24px;
            color: rgb(210, 0, 255);
          }
          .num{
            font-size: 38px;
            font-weight: bolder;
            letter-spacing: -1px;
            margin-right: 2%;
          }
          span{
            line-height: 50px;
            float: right;
            margin-right: 4%;
            font-size: 20px;
            color:rgb(167,167,167);
          }


        }
        .click{
          padding-top: 200px;
          color: #1e84e7;
          letter-spacing: 1px;
          font-size: 28px;
        }
      }
    }
  }
}
</style>
