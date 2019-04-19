<template>
    <div class="container">
          <div class="title">
             <div class="title2"> 
              <div class="span"></div>
              <p>实时人流量</p>
            </div> 
            <div class="title3"> 
           <p>756</p>
           <p>人</p>
             </div> 
              <div class="xhContent">
                 <ul>
                      <li v-for="item in list" :key="item.id">
                           <span class="num">{{item.num}}</span>
                           <span class="dw">{{item.dw}}</span>
                           <span class="main"></span>
                           <span class="name">{{item.name}}</span>
                      </li>
                      </ul>

              </div>
         </div>
         
         
         <!-- 折线图 -->
          <div class="title2" style="margin-top:23rem;"> 
              <div class="span"></div>
              <p>今日人流量高峰时段分布</p>
            </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: "0",
          num: "120",
          dw: "人",
          name: "一号窗口"
        },
        {
          id: "1",
          num: "120",
          dw: "人",
          name: "一号窗口"
        },
        {
          id: "2",
          num: "120",
          dw: "人",
          name: "一号窗口"
        },
        {
          id: "3",
          num: "120",
          dw: "人",
          name: "一号窗口"
        },
        {
          id: "4",
          num: "120",
          dw: "人",
          name: "一号窗口"
        },
        {
          id: "5",
          num: "120",
          dw: "人",
          name: "一号窗口"
        },
        {
          id: "6",
          num: "120",
          dw: "人",
          name: "一号窗口"
        }
      ]
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        grid:{
          containerLabel:true,
          borderWidth:0
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "08：30",
            "09：30",
            "10：30",
            "11：30",
            "14：30",
            "15：30",
            "17：30"
          ]
        },

        yAxis: {
          type: "value",
          axisLine: {show: false},
          // 去除y轴上的刻度线
          axisTick: {
            show: false
          },
          // 控制网格线是否显示
          splitLine: {
            show: false
          }

        },
        series: [
          {
            data: [22, 58, 79, 50, 90, 70, 50, 20],
            type: "line",
            areaStyle: {}
          }
        ]
      });
    }
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 736px;
  background-color: #070a1f;
  position: absolute;
  font-size: 62.5%;
}
.footer {
  width: 100%;
  height: 60%;
}
.title {
  margin-top: 1.5rem;
}
.title2 {
  width: 50%;
  height: 2rem;
  margin-top: -0.01rem;
  position: absolute;
}
.title2 .span {
  height: 1.2rem;
  width: 4px;
  background-color: rgb(25, 91, 214);
  margin-left: 0.8rem;
}
.title2 p {
  position: absolute;
  margin-left: 2rem;
  margin-top: -1rem;
  color: white;
  font-size: 0.8rem;
  font-family: "Times New Roman", Times, serif;
}
.title3 {
  width: 50%;
  height: 2rem;
  margin-top: -0.1rem;
  margin-left: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  align-items: center;
}
.title3 p {
  font-size: 2rem;
  color: rgb(207, 41, 144);
}
.title3 p:last-child {
  font-size: 0.5rem;
  margin-left: 0.5rem;
  color: rgb(207, 41, 144);
  opacity: 0.7;
  margin-top: 1.5rem;
}

/* 循环 */
.xhContent {
  width: 84%;
  height: 87%;
  margin-left: 8%;
  margin-top: 1rem;
}
.xhContent ul li {
  float: left;
  height: 18rem;
  width: 6%;
  margin-left: 10.5%;
  background-color: #333442;
  opacity: 0.8;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}
.xhContent ul li:first-child {
  margin-left: -7.5%;
}
.num,
.dw,
.name {
  font-size: 1em;
  color: rgb(248, 245, 245);
  position: absolute;
  margin-top: 3rem;
  margin-left: 0;
}
.dw {
  color: rgb(156, 158, 158);
  font-size: 1em;
  margin-left: 0.25rem;
  position: absolute;
  margin-top: 4rem;
}
.main {
  height: 70%;
  width: 100%;
  margin-left: 0rem;
  margin-top: 5.4rem;
  background-color: rgb(207, 41, 144);
  border-radius: 30px;
}
.name {
  flex-direction: column-reverse;
  font-size: 0.3rem;
  margin-top: 18.2rem;
  position: absolute;
  width: 0.8rem;
  margin-left: 0.2rem;
  color: rgb(237, 241, 241);
  font-family: "Courier New", Courier, monospace;
}
/*.box {*/
/*  width: 100%;*/
/*  height: 270px;*/
/*  margin-top: 24rem;*/
/*  border: 1px solid yellow;*/
/*  position: relative;*/
/*  border: none;*/
/*}*/
</style>
