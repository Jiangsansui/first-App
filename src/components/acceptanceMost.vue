<template>
  <div class="container">
    <div class="content">
      <div class="head">
        <img src="../assets/down.png">
        <span class="text">受理量最多的窗口</span>
      </div>
      <div class="main">
        <div class="imgLogo">
          <img v-for="(item, index) in info" :key="index" :src="item.img" v-if="index < list.length">
        </div>
        <div class="conText">
          <ul v-for="(item, index) in list" :key="index">
            <li class="text">{{item.name}}</li>
            <li class="num" :style="aStyle(index)">{{item.value}}</li>
            <li class="dw" :style="aStyle(index)">条</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "acceptanceMost",
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
        list: []
      }
    },
    mounted(){
      this.getMatter();
      this.$(".content").css("height",this.$(".container").height()-15+"px")
      console.log( this.$(".content").height())
    },
    methods: {
      aStyle(index) {
        if (index == 0) {
          return { color: '#ea3587'}
        } else if (index == 1) {
          return { color: '#efc203'}
        }
      },
      getMatter(){
        this.$.ajax({ url: 'http://10.10.2.11:8037/api/data/topTenByMatter', success:(res)=>{
            console.log(res);
            this. list=res.data;
            console.log(this.list);
          }});
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "../style/common.scss";
</style>

