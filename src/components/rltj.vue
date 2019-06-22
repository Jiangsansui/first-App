<template>
  <div class="container">
    <div class="content">
      <div class="boxOne">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">实时人流量</span>
          <span></span>
        </div>
        <div class="right">
          <ul>
            <li>总计:</li>
            <li style="margin-top:-16px;color:rgb(48,175,242);font-size: 30px;font-weight: bolder;">{{ builderJson.sum }}</li>
            <li>人</li>
          </ul>
        </div>
        <div id="myChart" style="width: 100%;height: 250px"></div>
        <div class="title" @click="goto($router.push({path: '/ssdars'}))">查看详情></div>
      </div>
      <div class="boxTwo">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">今日人流量高分时段分析</span>
        </div>
        <div class="time">
          <p style=" margin-left: 4%;">高峰时间段</p>
          <span  style=" margin-left: 4%;">1</span>
          <span>4</span>
          <p>:</p>
          <span>3</span>
          <span>0</span>
          <p>~</p>
          <span>1</span>
          <span>5</span>
          <p>:</p>
          <span>3</span>
          <span>3</span>

        </div>
        <div id="myChartTwo" style="width: 100%;height: 340px"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  export default {
    data () {
      return {
        msg: '',
        builderJson: {
          "sum": 100,
          "all": 100,
          "charts": {
            "当前取号人数": 30,
            "当前叫号人数": 60,
            "当前等待人数": 76
          }
        }
      }
    },
    mounted () {
      this.drawLine()
      $('#myChart>div').css('top','-50px');
    },
    methods: {
      drawLine() {
        console.log('【builderJson】', this.builderJson);
        var that = this;
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制第一个图
        myChart.setOption({
          tooltip: {},
          xAxis: [{
            type: 'value',
            max: that.builderJson.all,
            splitLine: {show: false},
            // 去掉x轴横轴
            axisLine: {show: false},
            //控制着坐标轴x轴的文字是否显示
            axisLabel: {show: false},
            // 去除x轴上的刻度线
            axisTick: {show: false},
          }],
          yAxis: [{
            type: 'category',
            data: Object.keys(that.builderJson.charts),
            axisLabel: {interval: 0, rotate: 30},
            splitLine: {show: false},
            // 去除y轴上的刻度线
            axisTick: {show: false},
            axisLabel:{textStyle:{fontFamily:'Arial'}},
            axisLine: {show: false}
          }],
          grid: {left: '4%', containLabel: true},
          series: [
            {
              type: 'bar',
              // stack: 'chart',
              z: 3,
              label: {
                normal: {position: 'right', show: true}
              },
              itemStyle: {
                normal: {
                  //渐变色条形图
                  color:(params)=>{
                    var colorList = [
                      ['rgb(74,203,69)', '#91fc9c'],
                      ['rgb(241,194,4)', '#ffe370'],
                      ['rgb(50,154,255)', '#30bbfe'],
                    ];
                    var index = params.dataIndex;
                    if (params.dataIndex >= colorList.length) {
                      index = params.dataIndex - colorList.length;
                    }
                    return new this.$echarts.graphic.LinearGradient(0, 0, 1, 0,
                      [{offset: 0, color: colorList[index][0]},
                        {offset: 1, color: colorList[index][1]}
                      ]);
                  },
                  //柱形图圆角，初始化效果
                  barBorderRadius:[15, 15, 15, 15],
                  label: {
                    show: true, //开启显示
                    position: 'right', //在上方显示
                    textStyle: {
                      fontSize: '10',
                      color: 'black'
                    }
                  }
                },
              },
              barWidth: 20,
              data: Object.keys(that.builderJson.charts).map(function (key) {
                return that.builderJson.charts[key];
              })
            }, {
              type: 'bar',
              // stack: 'chart',
              silent: true,//背景图定位
              itemStyle: {
                normal: {
                  color: '#eee',
                  //柱形图圆角，初始化效果
                  barBorderRadius:[15, 15, 15, 15]
                },
              },
              barWidth: 20,
              barGap: '-100%',//设置柱形重合
              data: Object.keys(that.builderJson.charts).map(function (key) {
                return that.builderJson.all;
              }),
              animation: false
            }
          ]
        })
        let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
        // 绘制第二个图
        myChartTwo.setOption({
          grid: {
            right: '6%',
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
              "16：30",
              "17：30"
            ],
            // 去除x轴上的刻度线
            axisTick: {show: false,},
            //去掉x轴横轴
            axisLine: {show: false,},
            axisLabel:{fontSize:'10', interval:0,
            // rotate:0 //倾斜角度
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
            splitLine :{
              lineStyle:{
                color:['#eeeeee'],//设置网格线颜色
                type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
              }, show:true //隐藏或显示
            },
          },
          series: [
            {
              symbolSize:6,
              data: [50,35,69,50,23,120,80,100,13,34],
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
              lineStyle: {color: 'rgb(239,194,2)',},
              label:{show:false}
            }
          ]
        })
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
        margin-top: 15px;
        width: 96%;
        margin-left: 2%;
        border-radius: 20px;
        background-color: #ffffff;
        position: relative;
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
          width: 100%;
          ul{
            float: right;
            list-style: none;
            width: 35%;
            margin-right: 20px;
            display: flex;
            flex-direction: row;
            li{
              color: #c8c8c8;
              margin-right: 20px;
            }
          }
        }
        .title{
          position: absolute;
          font-size: 26px;
          color: rgb(48, 179, 248);
          letter-spacing: 4px;
          margin-top: -80px;
          margin-left: 40%;
        }
      }
      .boxTwo{
        margin-top: 10px;
        width: 96%;
        margin-left: 2%;
        border-radius: 20px;
        background-color: #ffffff;
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
        .time{
          margin-top: 110px;
          width: 100%;
          height: 50px;
          display: flex;
          flex-direction: row;
          font-size: 30px;
          p{
            margin-left: 2%;
            margin-top:0;
            font-size: 24px;
          }
          span{
            font-size: 32px;
            width: 40px;
            height: 40px;
            background-image:-webkit-linear-gradient(90deg, rgb(241,193,1), rgb(250,226,126));
            float: left;
            margin-left: 2%;
          }
        }
      }
    }
  }
</style>
