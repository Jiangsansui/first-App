<template>
    <div class="container">
       <div class="xhContent">
    <ul>
            <li v-for="item in list" :key="item.id">
                    <img :src="item.assetsUrl" alt="">
                    <span>{{item.name}}</span>
             </li>
        </ul>
</div>
       
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: "0", name: "人流统计", assetsUrl: require("../assets/1.png") },
        { id: "1", name: "办件统计", assetsUrl: require("../assets/2.png") },
        { id: "2", name: "排队情况", assetsUrl: require("../assets/3.png") },
        { id: "3", name: "窗口排名", assetsUrl: require("../assets/4.png") },
        { id: "4", name: "评价统计", assetsUrl: require("../assets/5.png") },
        { id: "5", name: "区域统计", assetsUrl: require("../assets/6.png") },
        { id: "6", name: "楼层示意图", assetsUrl: require("../assets/7.png") },
        { id: "7", name: "发布统计", assetsUrl: require("../assets/8.png") },
        { id: "8", name: "个人中心", assetsUrl: require("../assets/1.png") }
      ]
    };
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 736px;
  background-color: #070a1f;
  font-size: 62.5%;
}
.xhContent {
  width: 100%;
  height: 100%;
}
.xhContent ul {
  width: 100%;
  list-style: none;
  display: inline-block;
  margin-top: -0.1rem;
  padding-inline-start: 0px;
 
}
.xhContent ul li {
  width: 32%;
  height: 138px;
  background-color: #333442;
  opacity: 0.7;
  float: left;
  margin-left: 1%;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  color: aliceblue;
  border-radius: 10px;

}
.xhContent ul li img{
    width: 80px;
}
</style>
