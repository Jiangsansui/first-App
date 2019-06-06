<template>
    <div class="container">
      <div class="content">
        <div class="boxOne">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">评价最多事项</span>
          <span></span>
        </div>
          <div class="main">
            <img src="../assets/logo1.png">
            <span class="title">房屋租赁登记备案</span>
            <span style="margin-top: 3px">条</span>
            <span class="num" style="color:rgb(210,0,255);">123</span>
          </div>
          <div class="main">
            <img src="../assets/logo2.png">
            <span class="title">房屋租赁登记备案</span>
            <span style="margin-top: 3px">条</span>
            <span class="num" style="color:rgb(239,194,3);">123</span>
          </div>
          <div class="main">
            <img src="../assets/logo3.png">
            <span class="title">房屋租赁登记备案</span>
            <span style="margin-top: 3px">条</span>
            <span class="num" style="color:rgb(30,132,231);">123</span>
          </div>
          <div class="main">
            <img src="../assets/logo2.png">
            <span class="title">房屋租赁登记备案</span>
            <span style="margin-top: 3px">条</span>
            <span class="num" style="color:rgb(239,194,3);">123</span>
          </div>
          <div class="main">
            <img src="../assets/logo3.png">
            <span class="title">房屋租赁登记备案</span>
            <span style="margin-top: 3px">条</span>
            <span class="num" style="color:rgb(30,132,231);">123</span>
          </div>
          <div class="click">
            查看详情>
          </div>
        </div>
        <div class="boxTwo">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">评价最多的部门</span>
            <span></span>
          </div>
          <div id="myChart"
               :style="{
                 width: '100%',
                 height: '350px'}"></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "pjtj",
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
            name: '销量',
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
                  show:false,//是否展示
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
    }}}
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
      height: 550px;
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
      .main{
        margin-top: 20px;
        float: left;
        width: 100%;
        img{
          float: left;
          margin-left: 3%;
          width: 50px;
        }
        .title{
          float: left;
          margin-left: 5%;
          font-size: 24px;
          color:rgb(4,5,16);
        }
        .num{
          font-size: 38px;
          font-weight: bolder;
          letter-spacing: -1px;
          margin-right: 2%;
        }
        span{
          line-height: 50px;
          float: right;
          margin-right: 4%;
          font-size: 20px;
          color:rgb(167,167,167);
        }

      }
      .click{
        padding-top: 460px;
        color: #1e84e7;
        letter-spacing: 1px;
        font-size: 28px;
      }
      }
      .boxTwo {
        margin-top: 10px;
        width: 96%;
        height: 750px;
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
      }
    }
  }

</style>
