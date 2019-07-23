<template>
  <div class="container">
    <div class="content">
      <div class="head">
        <img src="../assets/down.png">
        <span class="text">咨询次数最多的事项</span>
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
    name: "consultationMost",
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
    mounted(){
      this.$(".content").css("height",this.$(".container").height()-15+"px")
      console.log( this.$(".content").height())
    },
    methods: {
      aStyle(index) {
        if (index == 0) {return { color: '#ea3587'}}
        else if (index == 1) {return { color: '#efc203'}}
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/common.scss";
</style>
