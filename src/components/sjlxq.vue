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
          <ul><li>日</li><li>月</li><li>年</li></ul>
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
          <ul><li>日</li><li>月</li><li>年</li></ul>
        </div>
        <div class="main">
          <div id="myChartTwo" :style="{width: '100%',height: '300px'}"></div>
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
      return {
      };
    },
    mounted(){
      this.drawLine();
      $('#myChartTwo>div').css('top','-20px');
    },
    methods: {
      drawLine() {
        //boxone统计图
        let myChart = this.$echarts.init(document.getElementById("myChart"));
        myChart.setOption({
          tooltip: {},
          yAxis: {
            // data: ['当前取号人数', '当前叫号人数', '当前等待人数'],
            axisLine: {
              show: false
            },
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
            // rotate:90 //倾斜角度
          },
          grid: {
            left: '4%',
            right: '1%',
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            data: ['001号窗口', '001号窗口', '001号窗口','002号窗口','001号窗口','001号窗口','001号窗口','001号窗口','001号窗口'],
            type:'category',
            //去掉x轴横轴
            axisLine: {show: false,},
            // 去除y轴上的刻度线
            axisTick: {show: false,},
            // 控制网格线是否显示
            splitLine: {show: false},
            //控制着坐标轴x轴的文字是否显示
            axisLabel: {
              show: true,
              interval:0,
              //设置y轴字符长度超出自动换行
              formatter:function(value){
                var str = "";
                var num = 1; //每行显示字数
                var valLength = value.length; //该项x轴字数
                var rowNum = Math.ceil(valLength / num); // 行数
                if(rowNum > 1) {
                  var temp = "";
                  temp = value.substring(0, 3) + "\n";
                  str += temp;
                  for(var i = 3; i < rowNum; i++) {
                    var start = i * num;
                    var end = start + num;
                    temp = value.substring(start, end) + "\n";
                    str += temp;
                  }return str;
                }
                else {return value;}
              }
            },
          },
          series: [
            //条形统计图背景设置
            {
              type: 'bar',
              silent: true,//背景图定位
              itemStyle:{
                normal:{color:'#f1f1f1',//自定义背景颜色
                  barBorderRadius:[15, 15, 15, 15],
                }
              },
              barGap:'-100%',//设置柱形重合
              data: [150, 150, 150,150,150,150,150,150,150],
              animation:false,//关闭动画效果
              barWidth:'22'
            },
            {
              type: 'bar',
              silent: true,//背景图定位
              data: [30, 60, 76,80,90,120,34,88,71],
              //设置柱子的宽度
              barGap:'-100%',//设置柱形重合
              barWidth:22,
              itemStyle:{
                //通常情况下：
                normal:{
                  // 柱子的颜色
                  color:'#1f8be9',
                  //柱形图圆角，初始化效果
                  barBorderRadius:[12, 12, 12, 12],
                  label: {
                    show: true, //开启显示
                    position: 'top', //在上方显示
                    textStyle: {fontSize : '12', color:'black'}
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
            axisTick: {show: false,},
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
                } else {return value;}
              }
            },
          },
          grid: {left: '2%', right: '1%', bottom: '1%', containLabel: true},
          xAxis: {
            //去掉x轴
            axisLine: {show: false,},
            // 去除y轴上的刻度线
            axisTick: {show: false,},
            // 控制网格线是否显示
            splitLine: {show: false},
            //控制着坐标轴x轴的文字是否显示
            axisLabel: {show: false},
          },
          series: [
            //条形统计图背景设置
            {
              type: 'bar',
              silent: true,//背景图定位
              itemStyle:{
                normal:{
                  color:'#f1f1f1',//自定义背景颜色
                  barBorderRadius:[15, 15, 15, 15],
                }
              },
              barGap:'-100%',//设置柱形重合
              data: [150, 150, 150,150,150,150],
              animation:false,//关闭动画效果
              barWidth:'22'
            },
            {
              type: 'bar',
              data: [30, 90, 106,50,60,100],
              //设置柱子的宽度
              barGap:'-100%',//设置柱形重合
              barWidth:22,
              itemStyle:{
                //通常情况下：
                normal:{
                  // 柱子的颜色
                  color:'#f1c205',
                  //柱形图圆角，初始化效果
                  barBorderRadius:[15, 15, 15, 15],
                  label: {
                    show: true, //开启显示
                    position: 'right', //在上方显示
                    textStyle: {fontSize : '12', color:'black'}
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
          margin-top: 20px;
          width: 100%;
          ul{
            margin: 0 20px;
            float: right;
            display: flex;
            flex-direction: row;
            list-style: none;
            li{
              margin-left: 50px;
              font-size: 24px;
              width: 40px;
              height: 40px;
              line-height: 40px;
              border-radius: 20px;
              background-color: #e7e7e7;
            }
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
          margin-top: 20px;
          width: 100%;
          ul{
            margin: 0 20px;
            float: right;
            display: flex;
            flex-direction: row;
            list-style: none;
            li{
              margin-left: 50px;
              font-size: 24px;
              width: 40px;
              height: 40px;
              line-height: 40px;
              border-radius: 20px;
              background-color: #e7e7e7;
            }
          }
        }
      }
    }
  }

</style>
