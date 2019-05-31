<template>
    <div class="container">
        <div class="title">
          <el-select class="select" v-model="value" placeholder="请选择">
               <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
               </el-option>
           </el-select>
          <p>A001号</p>
          <p>当前办理</p>
        </div>
         <div class="first">
           <div class="span"></div>
           <p>取号量</p>
           <div id="myChartone"></div>
         </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
     options: [{
          value: '选项0',
          label: '①窗口'
        }, {
          value: '选项1',
          label: '②窗口'
        }, {
          value: '选项2',
          label: '③窗口'
        }, {
          value: '选项3',
          label: '④窗口'
        }],
        value: '选项0'
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChartone = this.$echarts.init(document.getElementById("myChartone"));
      // 绘制图表
      myChartone.setOption({
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
            show: false,

          },
          // 控制网格线是否显示
          splitLine: {
            show: false
          },
          //控制着坐标轴y轴的文字是否显示
          axisLabel: {
            show: false
          },
        },
        series: [
          {
            data: [0, 20, 30, 18, 42, 19, 9],
            type: "line",
            label:{
              show:true,
              color:'rgb(207,207,202)',
            },
            itemStyle: {
              normal:
                {
                  //控制背景颜色渐变
                  areaStyle:{
                    color: new this.$echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#85195d'},
                        {offset: 1, color: '#1B091C'}
                      ]
                    )
                  }
                }
                },
            //控制数据显示

            //控制数据线条颜色
              lineStyle:{
              color:'rgb(207, 41, 144)',
                }
              }
        ]

      });
    },
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 736px;
  background-color: #070a1f;
  position: relative;
}
.title {

  position: absolute;
  width: 100%;
  height: 70px;
  background-color: #333442;
  opacity: 0.7;
  z-index: 1;
}
.select{
  position: absolute;
  left: 5px;
  top:15px;
  width: 140px;
}
.title p{
 margin-left: 18rem;
  margin-top: 0.5rem;
  /*margin-left: 20rem;*/
  color: white;
  font-size: 1.5rem;
}
.title p:last-child{
  font-size: 0.5rem;
  margin-top: -1rem;
  font-family: "Times New Roman", Times, serif;
  margin-left:20rem;
}
.span {
  margin-top: 1.5rem;
  height: 1.2rem;
  width: 4px;
  background-color: rgb(25, 91, 214);
  margin-left: 0.8rem;
}
.first {
  width: 100%;
  height: 240px;
  margin-top: 4.15rem;
  border: 1px solid yellow;
  position: absolute;
}
.first p {
  position: absolute;
  margin-left: 2rem;
  margin-top: -1rem;
  color: white;
  font-size: 0.8rem;
  font-family: "Times New Roman", Times, serif;
}
#myChartone{
  width: 420px;
  height: 300px;
  margin-top: -5rem;
}

</style>
