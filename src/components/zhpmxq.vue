<template>
    <div class="container">
      <div class="content">
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
        <div class="main">
          <img src="../assets/logo4.png">
          <span class="title">房屋租赁登记备案</span>
          <span style="margin-top: 3px">条</span>
          <span class="num" style="color:rgb(30,132,231);">123</span>
        </div>
        <div class="main">
          <img src="../assets/logo5.png">
          <span class="title">房屋租赁登记备案</span>
          <span style="margin-top: 3px">条</span>
          <span class="num" style="color:rgb(65,151,234);">123</span>
        </div>
        <div class="main">
          <img src="../assets/logo6.png">
          <span class="title">房屋租赁登记备案</span>
          <span style="margin-top: 3px">条</span>
          <span class="num" style="color:rgb(30,132,231);">123</span>
        </div>
        <div class="main">
          <img src="../assets/logo7.png">
          <span class="title">房屋租赁登记备案</span>
          <span style="margin-top: 3px">条</span>
          <span class="num" style="color:rgb(50,154,255);">123</span>
        </div>
        <div class="main">
          <img src="../assets/logo8.png">
          <span class="title">房屋租赁登记备案</span>
          <span style="margin-top: 3px">条</span>
          <span class="num" style="color:rgb(50,154,255);">123</span>
        </div>
        <div class="main">
          <img src="../assets/logo9.png">
          <span class="title">房屋租赁登记备案</span>
          <span style="margin-top: 3px">条</span>
          <span class="num" style="color:rgb(30,132,231);">123</span>
        </div>
        <div class="main">
        <img src="../assets/logo10.png">
        <span class="title">房屋租赁登记备案</span>
        <span style="margin-top: 3px">条</span>
        <span class="num" style="color:rgb(65,151,234);">123</span>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "zhpmxq"
    }
</script>

<style lang="scss" scoped>
  .container{
    overflow: hidden;
    width: 100%;
    .content {
      margin-top: 10px;
      width: 96%;
      height: 1310px;
      margin-left: 2%;
      border-radius: 20px;
      background-color: #ffffff;
      .head{
        padding-top: 30px;
        width: 100%;
        img{
          margin-top: 10px;
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
    }
    @media screen and (min-height: 812px) {
      .content{
        height: 1605px;
      }
    }
    @media screen and (min-height: 1024px) {
      .content{
        height: 1405px;
      }
    }
    @media screen and (min-height: 1366px) {
      .content{
        height: 1870px;
      }
    }
  }

</style>
