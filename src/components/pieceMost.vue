<template>
  <div class="container">
    <div class="content">
      <div class="head">
        <img src="../assets/down.png">
        <span class="text">办件量最多的部门</span>
      </div>
      <div class="main">
        <div class="imgLogo">
          <img v-for="item in info" :src="item.img">
        </div>
        <div class="conText">
          <ul v-for="(item,index) in list" :key="index">
            <li class="text">{{item.name}}</li>
            <li class="num" :style="aStyle(index)">{{item.num}}</li>
            <li class="dw" :style="aStyle(index)" style="font-size: 10px;margin-top: 6px">条</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pieceMost",
    data() {
      return {
        info: [
          {img: require('../assets/logo1.png')},
          {img: require('../assets/logo2.png')},
          {img: require('../assets/logo3.png')},
          {img: require('../assets/logo4.png')},
          {img: require('../assets/logo5.png')},
          {img: require('../assets/logo6.png')},
          {img: require('../assets/logo7.png')},
          {img: require('../assets/logo8.png')},
          {img: require('../assets/logo9.png')},
          {img: require('../assets/logo10.png')}

        ],
        list: [
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'}
        ]
      }
    },
    methods: {
      aStyle(index) {
        if (index == 0) {
          return { color: '#ea3587'}
        } else if (index == 1) {
          return { color: '#efc203'}
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    overflow: hidden;
    width: 100%;
    .content {
      margin-top: 15px;
      width: 96%;
      height: 1300px;
      margin-left: 2%;
      border-radius: 20px;
      background-color: #ffffff;
      .head {
        height: 30px;
        padding-top: 30px;
        width: 100%;
        img {
          margin-top: 13px;
          float: left;
          margin-left: 4%;
          width: 24px;
          height: 18px;
        }
        .text {
          color:black;
          float: left;
          margin-left: 2%;
          font-size: 30px;
        }
      }
      .main{
        width: 100%;
        display: flex;
        flex-direction:row;
        .imgLogo{
          display: flex;
          flex-direction: column;
          width: 14%;
          img{
            margin-left: 30%;
            margin-top: 40px;
            width: 50px;
          }
        }
        .conText{
          width: 86%;
          position: relative;
          ul{
            margin-top: 43px;
            list-style: none;
            width: 100%;
            display: flex;
            flex-direction: row;
            li{
              font-size: 16px;
              color: #1e84e7;
            }
            .text{
              margin-top: 2px;
              position: absolute;
              margin-left: -10%;
              font-size: 28px;
              letter-spacing: 0.5px;
              color: black;
            }
            .num{
              font-size: 36px;
              font-weight: bolder;
              letter-spacing: -1px;
              margin-right: 2%;
              margin-left: 70%;
            }
          }
        }
      }
    }
  }
</style>

