<template>
  <div class="container">
    <div class="content">
      <div class="contOne">
        <div class="logo">
          <img src="./../assets/down.png">
          <span>信息日发布数</span>
        </div>
        <div class="circle">
          <div class="text">
          <span class="num">236</span>
          <span class="dw">条</span>
          </div>
          <div id="myChart" :style="mapStyle"></div>
        </div>
      </div>
      <div class="contTwo">
              <div class="logo">
                <img src="./../assets/down.png">
                <span>累计信息发布数</span>
              </div>
        <div class="circle">
          <span class="num">1366</span>
          <span class="dw">条</span>
          <div id="myChartTwo" :style="mapStyleTwo"></div>
        </div>

      </div>

    </div>


  </div>
</template>
<script>
  export default {
    name: 'day',
    data() {
      return {
        mapStyle: {
          height: '300px',
          width: '300px',
          marginLeft: '14%',
          marginTop: '10%',
          position: 'absolute'
        },
        mapStyleTwo: {
          height: '300px',
          width: '300px',
          marginLeft: '14%',
          marginTop: '100%',
          position: 'absolute'
        },
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 第一个图
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
            trigger: 'item'
          },
          color: [' #1f8be9'],
          series: [
            {
              name: '日发布数',
              type: 'pie',
              radius: ['62%', '78%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 50}
              ]
            }
          ]
        });
        // 第二个图
        let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
        // 绘制图表
        myChartTwo.setOption({
          tooltip: {
            trigger: 'item'
          },
          color: ['#d941e9'],
          series: [
            {
              name: '累计发布数',
              type: 'pie',
              radius: ['62%', '78%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: [
                {value: 50}
              ]
            }
          ]
        });
      }
    }

  }
</script>

<style lang="scss" scoped>
  .container {
    width: 100%;
    /*overflow: hidden;*/
    .content {
      width: 100%;
      .contOne {
        width: 96%;
        height:630px;
        background-color: #ffffff;
        margin-left: 2%;
        margin-top: 18px;
        border-radius: 20px;

        .logo {
          float: left;
          margin-left: 3%;
          margin-top: 0.3rem;
          img {
            width: 0.4rem;
          }
          span {
            font-size: 0.4rem;
            padding-left: 0.2rem;
          }
        }
        .circle {
          position: relative;
          .text{
            position: absolute;
            padding-top: 300px;
            margin-left: 40%;
            .num {
              color:  #1f8be9;
              font-size: 72px;
              font-weight: bold;
            }
            .dw{
              font-size: 30px;
              color: rgb(160,160,160);
            }
          }

        }

      }

      .contTwo {
        width: 96%;
        height: 640px;
        background-color: #ffffff;
        margin-left: 2%;
        margin-top: 20px;
        border-radius: 20px;
        .logo {
          float: left;
          margin-left: 3%;
          margin-top: 0.3rem;

          img {
            width: 0.4rem;
          }

          span {
            font-size: 0.4rem;
            padding-left: 0.2rem;
          }
        }
        .circle {

          padding-top: 30px;
          .num {
            color: #d941e9;
            font-size: 72px;
            margin-left: -2.8rem;
            position: absolute;
            margin-top: 4.2rem;
            font-weight: bold;

          }
          .dw{
           margin-left: 1%;
            position: absolute;
            font-size: 30px;
            margin-top: 4.5rem;
            color: rgb(160,160,160);
          }
          #myChartTwo{
            margin-top: 10% !important;

          }
        }
      }
    }
  }


</style>
