<template>
  <div class="container">
    <div class="content">
      <div class="boxOne">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">办理次数最多得窗口</span>
        </div>
        <div class="main">
          <div class="left">
            <img :src="img">
          </div>
          <div class="right">

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "win",
    data(){
      return{
          // {img:require('../assets/logo1.png')},
          // {img:require('../assets/logo2.png')},
          // {img:require('../assets/logo3.png')},
          // {img:require('../assets/logo4.png')}

      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    overflow: hidden;
    width: 100%;
    .content {
      width: 100%;
      .boxOne {
        margin-top: 15px;
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
          margin-top: 50px;
          display: flex;
          flex-direction: row;
          width: 100%;
          .left{
            width: 15%;
            height: 300px;
            background-color: #1fe1ff;
            img{
              width: 50px;
            }
          }
          .right{
            width: 85%;
            line-height: 300px;
            background-color: yellow;
          }
        }

      }
    }
  }
</style>
