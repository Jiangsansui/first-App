<template>
  <div class="container">
    <div class="content">
      <div class="title">
        <el-select v-model="value4" placeholder="">
          <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value">
          </el-option>
        </el-select>
        <div class="right">
          <span>当前办理:</span>
          <span>{{value4}}</span>
        </div>
      </div>
      <div class="boxOne">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">取号量</span>
        </div>
        <div class="right">
          <span>总量:</span>
          <span class="num">256</span>
          <span>人</span>
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
          <span class="text">平均等待时间</span>
        </div>
        <div class="right">
          <span>平均等待时间:</span>
          <span class="num">256</span>
          <span>分</span>
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
        options: [{
          value: 'A001号',
          label: '001窗口'
        }, {
          value: 'A002号',
          label: '002窗口'
        }, {
          value: 'A003号',
          label: '003窗口'
        }, {
          value: 'A004号',
          label: '004窗口'
        }, {
          value: 'A005号',
          label: '005窗口'
        }, {
          value: 'A006号',
          label: '006窗口'
        },{
          value: 'A007号',
          label: '007窗口'
        },{
          value: 'A008号',
          label: '008窗口'
        },
        ],
        value4: 'A001号'
      }},
    mounted () {
      this.drawOne();
      this.drawTwo();
      this.drawThree()
      this.$(".content").css("height",this.$(".container").height()+"px")
      this.$(".boxOne").css("height",(this.$(".content").height()-this.$(".title").height())/3-5+"px");
      this.$(".boxThree").css("height",this.$(".boxOne").height());
      this.$(".boxTwo").css("height",this.$(".boxOne").height()-10+"px");
    },
    methods: {
      //取号量
      drawOne() {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        myChart.setOption({
          grid: {
            left: '3%',
            right: '5%',  //距离右侧边距
            bottom: '5%',
            top:'1%',
            show: false,
            containLabel: true
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
              fontSize:'9',
              interval:0
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
                return ""
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
                color: 'rgb(4,5,16)'
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
                color: 'rgb(210,0,255)'
              }
            }
          ]
        });
      },
      //等待人数
      drawTwo(){
        let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
        myChartTwo.setOption({
          grid: {
            left: '3%',
            right: '5%',  //距离右侧边距
            bottom: '5%',
            top:'1%',
            show: false,
            containLabel: true
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
              fontSize:'9',
              interval:0
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
                return ""
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
                color: 'rgb(4,5,16)'
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
                color: 'rgb(30,132,231)'
              }
            }
          ]
        });
      },
      //平均等待时间
      drawThree(){
        let myChartThree = this.$echarts.init(document.getElementById('myChartThree'))
        myChartThree.setOption({
          grid: {
            left: '3%',
            right: '5%',  //距离右侧边距
            bottom: '5%',
            top:'1%',
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
              fontSize:'9',
              interval:0
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
                return ""
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
                color: 'rgb(4,5,16)'
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
                color: 'rgb(239,194,3)'
              }
            }
          ]
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .container {
    width: 100%;
    overflow: hidden;
    .content {
      overflow: hidden;
      width: 100%;
      .title{
        width: 100%;
        height: 95px;
        background-color: #ffffff;
        .right{
          float: right;
          margin-right: 5%;
          line-height: 95px;
          span:first-child{
            font-size:24px;
            color: #c8c8c8;
            margin-right: 10px;
            letter-spacing: 2px;
          }
          span:last-child{
            font-size:48px;
            font-weight: bolder;
            background-image:-webkit-linear-gradient(bottom,rgb(50,154,255),rgb(49,168,252),rgb(48,181,248));
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
          }
        }
      }
      .boxOne{
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
          float: right;
          margin-right: 5%;
          .num{
            font-weight: bolder;
            color:rgb(210,0,255);
            font-size: 48px;
          }
          span{
            font-size:24px;
            color: rgba(165, 165, 165, 0.55);
          }
          span:first-child{
            letter-spacing: 1px;
          }
        }
        #myChart{
          width: 100%;
          height: 300px;
        }
      }
      .boxTwo{
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
          height: 300px;
        }
      }
      .boxThree{
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
          float: right;
          margin-right: 5%;
          .num{
            font-weight: bolder;
            color:rgb(239,194,3);
            font-size: 48px;
          }
          span{
            font-size:24px;
            color: rgba(165, 165, 165, 0.55);
          }
          span:first-child{
            letter-spacing: 1px;
          }
        }
        #myChartThree{
          width: 100%;
          height: 300px;
        }
      }
    }
  }
</style>
