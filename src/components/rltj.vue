<template>
    <div class="container">
     <div class="content">
          <div class="boxOne">
              <div class="head">
                <img src="../assets/down.png">
                <span class="text">实时人流量</span>
                <span></span>
                </div>
            <div id="myChart"
                 :style="{
                 width: '100%',
                 height: '250px'}"></div>
            <div class="title" @click="goto(ssdars())">查看详情>
            </div>
          </div>

       <div class="boxTwo">
         <div class="head">
           <img src="../assets/down.png">
           <span class="text">今日人流量高分时段分析</span>
         </div>
<div class="time">高峰时间段
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>

  </ul>
</div>
         <div id="myChartTwo">
         </div>
       </div>
  </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ''
      }
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制第一个图
        myChart.setOption({
          tooltip: {},
          yAxis: {
            data: ['当前取号人数', '当前叫号人数', '当前等待人数'],
            axisLine: {show: false},
            // 去除y轴上的刻度线
            axisTick: {
              show: false,
            },
          },
          grid: {
            left: '4%',
            right: '1%',
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            //去掉x轴横轴
            axisLine: {
              show: false,
            },
            // 去除y轴上的刻度线
            axisTick: {
              show: false,
            },
            // 控制网格线是否显示
            splitLine: {
              show: false
            },
            //控制着坐标轴x轴的文字是否显示
            axisLabel: {
              show: false
            },
          },
          series: [{
            name: '销量',
            type: 'bar',
            data: [30, 60, 76],
            //设置柱子的宽度
            barWidth:25,
            itemStyle:{
              //通常情况下：
              normal:{

                // 每个柱子的颜色即为colorList数组里的每一项，
                // 如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                // color: function (params){
                //   var colorList =
                //     ['rgb(76,204,71)',
                //       'rgb(241,194,5)',
                //       'rgb(50,154,255)'];
                //   return colorList[params.dataIndex];
                //
                // },
                // color: function (params) {
                //   var colorList = [
                //     ['rgb(14,102,179)', 'rgb(51,36,169)'],
                //     ['#F5cF0D', '#fa9203'],
                //     ['#61dbe8', '#0785de'],
                //     ['#ff9717', '#ff4518'],
                //   ];
                //   var index = params.dataIndex;
                //   if (params.dataIndex >= colorList.length) {
                //     index = params.dataIndex - colorList.length;
                //   }
                //   return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1,
                //     [{
                //       offset: 0,
                //       color: colorList[index][0]
                //     },
                //       {
                //         offset: 1,
                //         color: colorList[index][1]
                //       }
                //     ]);
                // },

                color: new this.$echarts.graphic.LinearGradient(
                  0, 0, 1, 0,
                   [
                    {offset: 0, color: 'rgb(76,204,71)'},
                    {offset: 1, color: '#fef9e8'}
                  ],


                ),
                //柱形图圆角，初始化效果
                barBorderRadius:[15, 15, 15, 15],
                label: {
                  show: false,//是否展示
                  // textStyle: {
                  //   fontWeight:'bolder',
                  //   fontSize : '12',
                  //   fontFamily : '微软雅黑',
                  // }
                }

              },
            }
          }]
        })
        let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
        // 绘制第二个图
        myChartTwo.setOption({
          grid: {
              left:'11%',
              bottom: '10%',
              containerLabel: true,
              borderWidth: 0
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
            ],
            // 去除x轴上的刻度线
            axisTick: {
              show: false,
            },
            //去掉x轴横轴
            axisLine: {
              show: false,
            }
          },
          yAxis: {
            type: "value",
            data:[0,20,40,60,80,100,120,140,160],
            axisLine: {show: false},
            // 去除y轴上的刻度线
            axisTick: {
              show: false,
            },
            //设置网格线样式
            splitLine :{    //网格线
              lineStyle:{
                color:['#eeeeee'],//设置网格线颜色
                type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
              },
              show:true //隐藏或显示
            }
          },
          series: [
            {
              // symbol:'circle',//折线拐点去掉圆点
              symbolSize:6,
              data: [50,35,69,12,23,120,34,13,34],
              type: "line",
              label: {
                show: true,
                color: 'rgb(207,207,202)',
              },
              itemStyle: {
                normal:
                  {
                    borderColor:'#ffd70a',
                    //控制背景颜色渐变
                    areaStyle: {

                      color: new this.$echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          {offset: 0, color: '#f1c101'},
                          {offset: 1, color: '#fef9e8'}
                        ]
                      )
                    }
                  }
              },
              //控制数据线条颜色
              lineStyle: {
                color: 'rgb(239,194,2)',
              }
            }
          ]
        })
      },
      ssdars() {
          this.$router.push({path: "/ssdars"});
        },
  }}
</script>
<style lang="scss" scoped>
.container{
  overflow: hidden;
  width: 100%;
  .content{
    width: 100%;
    .boxOne{
      margin-top: 10px;
      width: 98%;
      margin-left: 1%;
      border-radius: 20px;
      background-color: #ffffff;
      position: relative;
      .head{
        position: absolute;
        margin-top: 30px;
        width: 100%;
        img{
          margin-top: 13px;
          float: left;
          margin-left: 4%;
          width: 24px;
          height: 18px;
        }
        .text{
          float: left;
          margin-left: 2%;
          font-size: 30px;
        }
      }
      .title{
        padding-bottom: 30px;
        font-size: 26px;
        color: rgb(48, 179, 248);
        letter-spacing: 4px;
      }
    }
    .boxTwo{
      margin-top: 10px;
      width: 98%;
      margin-left: 1%;
      border-radius: 20px;
      background-color: #ffffff;
      position: relative;
      .head{
           position: absolute;
           margin-top: 30px;
           width: 100%;

           img{
             margin-top: 13px;
             float: left;
             margin-left: 4%;
             width: 24px;
             height: 18px;
           }
           .text{
             float: left;
             margin-left: 2%;
             font-size: 30px;

           }
         }
      .time{
        position: absolute;
        width: 100%;
        height: 50px;
        /*background-color: cornflowerblue;*/
        /*<!--background-image: -webkit-linear-gradient-->*/
        /*<!--  (90deg, rgb(241,193,1), rgb(250,226,126));-->*/
        margin-top: 140px;
        ul{
          width: 100%;
          height: 100%;
          background-color: red;
          display: flex;
          flex-direction: row;
          list-style: none;

          li{
            width: 40px;
            height: 40px;
            background-color: blue;
          }
        }
      }
      #myChartTwo{
        padding-top:120px;
        width: 100%;
        height: 640px;
        padding-bottom: 20px;
      }

    }
  }
}

</style>
