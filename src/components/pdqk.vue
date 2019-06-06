<template>
    <div class="container">
      <div class="content">
        <div class="title">
        </div>
        <div class="boxOne">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">取号量</span>


          </div>
          <div class="right">
            <span>人</span>
            <span style="margin-top:-6px;color:rgb(246,67,255);font-size: 30px;font-weight: bolder;">256</span>
            <span>总计:</span>
          </div>
          <div id="myChart"></div>
        </div>
        <div class="boxTwo">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">等待人数</span>
          </div>
          <div id="myChartTwo"></div>
        </div>
        <div class="boxThree">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">等待人数</span>
          </div>
          <div class="right">
            <span>人</span>
            <span style="margin-top:-6px;color:rgb(48,175,242);font-size: 30px;font-weight: bolder;">256</span>
            <span>总计:</span>
          </div>
          <div id="myChartThree"></div>
        </div>
      </div>
    </div>
</template>

<script>
  import $ from 'jquery'
export default {
  data(){
    return{
       }},
  mounted () {
    this.drawLine()
    $('#myChart>div>canvas').css('top','-25px');
    $('#myChartTwo>div>canvas').css('top','-25px');
    $('#myChartThree>div>canvas').css('top','-25px');
  },

  methods: {

    drawLine() {
      //第一个折线图
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        grid: {
           // top:'1%', // 等价于 y: '1%'
          left: '1.5%',
          right: '4%',  //距离右侧边距
          bottom: '9%',
          show: false,
          containLabel: true,

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
            "16：30",
            "17：30"
          ],
          // 去除x轴上的刻度线
          axisTick: {
            show: false,
          },
          //去掉x轴横轴
          axisLine: {
            show: false,
          },
          axisLabel:{
            fontSize:'9'
          }
        },
        yAxis: {
          axisLine: {show: false},
          // 去除y轴上的刻度线
          axisTick: {
            show: false,
          },
          //设置网格线样式
          splitLine: {
            show: false //隐藏或显示
          },
          axisLabel: {
            formatter: function () {
              return "";
            }
          }
        },
        series: [
          {
            //设置拐点空心圆
            symbolSize: 6,
            data: [0, 20, 30, 18, 42, 19, 9, 10],
            type: "line",
            label: {
              show: true,
              color: 'rgb(4,5,16)',
            },
            itemStyle: {
              normal:
                {
                  borderColor: 'rgb(210,0,255)',
                  //控制背景颜色渐变

                  areaStyle: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: 'rgb(246,67,255)'},
                        {offset: 1, color: '#fcf0ff'}
                      ]
                    )
                  }
                }
            },
            //控制数据线条颜色
            lineStyle: {
              color: 'rgb(210,0,255)',
            }
          }
        ]
      });
      //第二个折线图
      let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
      myChartTwo.setOption({
        grid: {
          // top:'1%',
          left: '1.5%',
          right: '4%',  //距离右侧边距
          bottom: '8%',
          show: false,
          containLabel: true,

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
            "16：30",
            "17：30"
          ],
          // 去除x轴上的刻度线
          axisTick: {
            show: false,
          },
          //去掉x轴横轴
          axisLine: {
            show: false,
          },
          axisLabel:{
            fontSize:'9'
          }
        },
        yAxis: {
          axisLine: {show: false},
          // 去除y轴上的刻度线
          axisTick: {
            show: false,
          },
          //设置网格线样式
          splitLine: {
            show: false //隐藏或显示
          },
          axisLabel: {
            formatter: function () {
              return "";
            }

          }
        },
        series: [
          {
            //设置拐点空心圆
            symbolSize: 6,
            data: [0, 20, 30, 18, 42, 19, 9, 10],
            type: "line",
            label: {
              show: true,
              color: 'rgb(4,5,16)',
            },
            itemStyle: {
              normal:
                {
                  borderColor: 'rgb(30,132,231)',
                  //控制背景颜色渐变
                  areaStyle: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: 'rgb(48,175,242)'},
                        {offset: 1, color: '#e5f1fc'}
                      ]
                    )
                  }
                }
            },
            //控制数据线条颜色
            lineStyle: {
              color: 'rgb(30,132,231)',
            }
          }
        ]
      });
      //第三个折线图
      let myChartThree = this.$echarts.init(document.getElementById('myChartThree'))
      myChartThree.setOption({
        grid: {
          // top:'1%',
          left: '1.5%',
          right: '4%',  //距离右侧边距
          bottom: '8%',
          show: false,
          containLabel: true,

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
            "16：30",
            "17：30"
          ],
          // 去除x轴上的刻度线
          axisTick: {
            show: false,
          },
          //去掉x轴横轴
          axisLine: {
            show: false,
          },
          axisLabel:{
            fontSize:'9'
          }
        },
        yAxis: {
          axisLine: {show: false},
          // 去除y轴上的刻度线
          axisTick: {
            show: false,
          },
          //设置网格线样式
          splitLine: {
            show: false //隐藏或显示
          },
          axisLabel: {
            formatter: function () {
              return "";
            }
          }
        },
        series: [
          {
            //设置拐点空心圆
            symbolSize: 6,
            data: [0, 20, 30, 18, 42, 19, 9, 10],
            type: "line",
            label: {
              show: true,
              color: 'rgb(4,5,16)',
            },
            itemStyle: {
              normal:
                {
                  borderColor: 'rgb(239,194,3)',
                  //控制背景颜色渐变
                  areaStyle: {
                    color: new this.$echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: 'rgb(249,233,166)'},
                        {offset: 1, color: '#fef8de'}
                      ]
                    )
                  }
                }
            },
            //控制数据线条颜色
            lineStyle: {
              color: 'rgb(239,194,3)',
            }
          }
        ]
      });
    },

  }

};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  overflow: hidden;
  .content {
    width: 100%;
    .title{
          width: 100%;
          height: 95px;
          background-color: #ffffff;
         }
    .boxOne{
      width: 96%;
      background-color: #ffffff;
      margin-left: 2%;
      margin-top: 10px;
      border-radius: 20px;
      padding-bottom: 25px;
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
      .right{
        span{
          margin-top: 20px;
          font-size:15px;
          color: #c8c8c8;
          float: right;
          padding-right: 2%;
        }
      }
      #myChart{
        width: 100%;
        height: 350px;
      }
    }
    .boxTwo{
      padding-bottom: 5px;
      width: 96%;
      background-color: #ffffff;
      margin-left: 2%;
      margin-top: 10px;
      border-radius: 20px;
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
      #myChartTwo{
        width: 100%;
        height: 350px;
      }
    }
    .boxThree{
      padding-bottom: 28px;
      width: 96%;
      background-color: #ffffff;
      margin-left: 2%;
      margin-top: 10px;
      border-radius: 20px;
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
      .right{
        span{
          margin-top: 20px;
          font-size:15px;
          color: #c8c8c8;
          float: right;
          padding-right: 2%;
        }
      }
      #myChartThree{
        width: 100%;
        height: 350px;
      }
    }
}

}

</style>
