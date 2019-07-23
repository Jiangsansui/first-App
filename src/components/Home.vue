<template>
  <div class="container">
    <div class="content">
      <img src="../assets/bgt.png">
      <div class="box">
        <div @click="$router.push('rltj')">
          <img src="../assets/rltj.png">
          <p>人流统计</p>
        </div>
        <div @click="$router.push('bjtj')">
          <img src="../assets/bjtj.png">
          <p>办件统计</p>
        </div>
        <div @click="$router.push('bjdt')">
          <img src="../assets/bjdt.png">
          <p>办件动态</p>
        </div>
        <div @click="$router.push('pdqk')">
          <img src="../assets/pdqk.png">
          <p>排队情况</p>
        </div>
        <div @click="$router.push('win')">
          <img src="../assets/zhpm.png">
          <p>综合排名</p>
        </div>
        <div @click="$router.push('pjtj')">
          <img src="../assets/pjtj.png">
          <p>评价统计</p>
        </div>
        <div @click="$router.push('lctj')">
          <img src="../assets/lctj.png">
          <p>楼层统计</p>
        </div>
        <div @click="$router.push('lcsy')">
          <img src="../assets/lcsyt.png">
          <p>楼层示意图</p>
        </div>
        <div @click="$router.push('fbtj')">
          <img src="../assets/fbtj.png">
          <p>发布统计</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {}
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
  html,body{
    width: 100%;
    height: 100%;
    background-color: #f0f0f4;
  }
  .container {
    width: 100%;
    .content {
      width: 100%;
      position: relative;
      img {
        width: 100%;
      }
      .box {
        box-shadow: 0px 0px 28px 4px rgba(50, 154, 255, 0.2);
        width: 88%;
        margin-left: 6%;
        height: 734px;
        margin-top: -0.8rem;
        border-radius: 20px;
        background-color: rgb(255, 255, 255);
        position: absolute;
        div {
          padding-top: 0.5rem;
          float: left;
          width: 33.3%;
          position: relative;
          img {
            width:98px;
            height: 98px;
          }
          p {
            color: rgb(24, 27, 36);
            font-family: "STHeiti STXihei";
            font-size: 0.35rem;
            margin: 0.2rem;
            padding-top: 0.1rem;
            padding-bottom: 0.25rem;
          }
        }
        div::before {
          content: '';
          position: absolute;
          width: 200%;
          left: 0;
          height: 1px;
          bottom: 0;
          border-bottom: 1px solid rgb(235, 235, 239);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
          -webkit-box-sizing: border-box;
          box-sizing: border-box
        }
        div::after {
          content: '';
          position: absolute;
          height: 230%;
          top: 0;
          width: 1px;
          right: 0;
          border-right: 1px solid rgb(235, 235, 239);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
          -webkit-transform: scale(0.5);
          transform: scale(0.5);
          -webkit-box-sizing: border-box;
          box-sizing: border-box
        }
        div:nth-last-of-type(1):before,
        div:nth-last-of-type(2):before,
        div:nth-last-of-type(3):before {
          content: '';
          border-bottom: 0;
        }
        div:nth-of-type(3):after,
        div:nth-of-type(6):after,
        div:nth-last-of-type(1):after {
          content: '';
          border-right: 0;
        }
      }
    }
  }
</style>
