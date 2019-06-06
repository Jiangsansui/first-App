<template>
    <div class="container">
      <div class="content">
        <div class="boxOne">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">窗口办件量</span>
            <span></span>
          </div>
          <div class="right">
            <span style="margin-right: 5%">日</span>
            <span style="margin-right: 5%">月</span>
            <span style="margin-right: 5%">年</span>
          </div>
          <div id="myChart" :style="{width: '100%',height: '300px'}"></div>
        </div>
        <div class="boxTwo">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">部门办件量</span>
            <span></span>
          </div>
          <div class="right">
            <span style="margin-right: 5%">日</span>
            <span style="margin-right: 5%">月</span>
            <span style="margin-right: 5%">年</span>
          </div>
          <div class="main">
           <div id="myChartTwo" :style="{width: '100%',height: '350px'}"></div>
         </div>
        </div>
      </div>
    </div>
</template>
<script>
  import $ from 'jquery'
    export default {
        name: "sjlxq",
     data() {
      return {};
      },
      mounted(){
         this.drawLine();
         $('#myChartTwo>div>canvas').css('top','-50px');
       },
      methods: {
        drawLine() {
          //boxone统计图
          let myChart = this.$echarts.init(document.getElementById("myChart"));
          myChart.setOption({
            tooltip: {},
            yAxis: {
              // data: ['当前取号人数', '当前叫号人数', '当前等待人数'],
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
            grid: {
              left: '4%',
              right: '1%',
              bottom: '1%',
              containLabel: true
            },
            xAxis: {
              data: ['001号窗口', '001号窗口',
                '001号窗口','001号窗口','001号窗口','001号窗口','001号窗口','001号窗口','001号窗口'],
              type:'category',
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
                show: true,
                //控制着坐标轴x轴的文字纵向显示
                // formatter:function(value){
                //   return value.split("").join("\n);
                // }
                interval:0,
                rotate:90

              },
            },
            series: [{
              type: 'bar',
              data: [30, 60, 76,80,90,120,34,88,71],
              //设置柱子的宽度
              barWidth:25,
              itemStyle:{
                // normal: {},
                //通常情况下：
                normal:{
                  // 每个柱子的颜色即为colorList数组里的每一项，
                  // 如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                  color: function (params){
                    // color: 'rgba(0,0,0,0.05)'
                    var colorList =['rgb(31,139,233)'];
                    return colorList[params.dataIndex];
                  },

                  //柱形图圆角，初始化效果
                  barBorderRadius:[13, 13, 13, 13],
                  label: {
                    show: true,//是否展示
                    textStyle: {
                      fontSize : '12',
                      color:'black'
                    }
                  }

                },
              },


            }]
          })
          //boxtwo统计图
          let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
          // 绘制第一个图
          myChartTwo.setOption({
            tooltip: {},
            yAxis: {
              data: ['发改局', '档案局', '民政局','失业单位登记管理局','民政局','民政局'],
              axisLine: {show: false},
              // 去除y轴上的刻度线
              axisTick: {
                show: false,
              },
              axisLabel: {
                show: true,
                interval: 0,
                formatter:function(value){
                  var str = "";
                  var num = 5; //每行显示字数
                  var valLength = value.length; //该项x轴字数
                  var rowNum = Math.ceil(valLength / num); // 行数
                  if(rowNum > 1) {
                    for(var i = 0; i < rowNum; i++) {
                      var temp = "";
                      var start = i * num;
                      var end = start + num;
                      temp = value.substring(start, end) + "\n";
                      str += temp;
                    }
                    return str;
                  } else {
                    return value;
                  }
                }
              },
            },
            grid: {
              left: '2%',
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
              type: 'bar',
              data: [30, 90, 106,50,60,100],
              //设置柱子的宽度
              barWidth:22,
              itemStyle:{
                //通常情况下：
                normal:{
                  // 每个柱子的颜色即为colorList数组里的每一项，
                  color: function (params){
                    var colorList =
                      ['#f1c205'];
                    return colorList[params.dataIndex];
                  },
                  //柱形图圆角，初始化效果
                  barBorderRadius:[15, 15, 15, 15],
                  label: {
                    show:true,//是否展示
                    textStyle: {
                      // fontWeight:'bolder',
                      fontSize : '12',
                      color:'black'
                      // fontFamily : '微软雅黑',
                    }
                  }

                },
              }
            }]
          })
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
      .boxOne {
        margin-top: 10px;
        width: 96%;
        height: 650px;
        margin-left: 2%;
        border-radius: 20px;
        background-color: #ffffff;
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
            float: left;
            margin-left: 2%;
            font-size: 30px;
          }
        }
        .right{
          width: 100%;
          span{
            float: right;
            width: 40px;
            font-size: 24px;
            height: 40px;
            background-color: #eeeeee;
            border-radius: 20px;
            line-height: 40px;
          }
        }
      }
      .boxTwo {
        margin-top: 10px;
        width: 96%;
        height: 650px;
        margin-left: 2%;
        border-radius: 20px;
        background-color: #ffffff;
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
            float: left;
            margin-left: 2%;
            font-size: 30px;
          }
        }
        .right{
          width: 100%;
          span{
            float: right;
            width: 40px;
            font-size: 24px;
            height: 40px;
            background-color: #eeeeee;
            border-radius: 20px;
            line-height: 40px;
          }
        }
      }
    }}

</style>
