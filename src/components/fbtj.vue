<template>
  <div class="container">
    <div class="content">
      <div class="boxOne boxPub">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">信息日发布数</span>
        </div>
        <div class="main">
          <div id="myChart"
               style="width:100%;height: 300px;
                     display: -webkit-box;
                     -webkit-box-orient: horizontal;">
          </div>
          <div class="text">
            <span class="num blue">236</span>
            <span>人</span>
          </div>
        </div>
      </div>
      <div class="boxTwo boxPub">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">累计信息发布数</span>
        </div>
        <div class="main">
          <div id="myChartTwo"
               style="width:100%;height: 300px;
                     display: -webkit-box;
                     -webkit-box-orient: horizontal;">
          </div>
          <div class="text">
            <span class="num purple">123</span>
            <span>人</span>
          </div>
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
        xxNum: 132,
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
    overflow: hidden;
    width: 100%;
    .content {
      width: 100%;
      .blue {
        color: #1f8be9;
      }
      .purple {
        color: #d941e9;
      }
      .boxPub {
        width: 96%;
        height: 640px;
        background-color: #ffffff;
        margin-left: 2%;
        margin-top: 15px;
        border-radius: 20px;
        .head {
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
            color: rgb(4, 45, 16);
            float: left;
            margin-left: 2%;
            font-size: 30px;
          }
        }
        .main {
          width: 100%;
          position: relative;
          .text {
            display: block;
            width: 260px;
            height: 80px;
            line-height: 80px;
            text-align: center;
            position: absolute;
            top: 50%;
            left: 50%;
            margin: -18px 0 0 -130px;
            .num {
              font-size: 68px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>
