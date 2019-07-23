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
          <div class="imgLogo">
            <img v-for="item in list" :src="item.img">
          </div>
          <div class="conText">
            <ul v-for="(item,index) in info" :key="index" v-if="index < 5">
              <li class="text" >{{item.event}}</li>
              <li class="num" :style="aStyle(index)">{{item.num}}</li>
              <li class="dw" :style="aStyle(index)">条</li>
            </ul>
          </div>
        </div>
        <div class="click" @click="$router.push('acceptanceMost')">
          查看详情>
        </div>
      </div>
      <div class="boxTwo">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">评价最多的部门</span>
          <span></span>
        </div>
        <div id="myChart":style="{width: '100%',height: '350%'}"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "pjtj",
    data(){
      return{
        info:[
          {event:'房屋租赁登记备案',num:'123'},
          {event:'房屋租赁登记备案',num:'123'},
          {event:'房屋租赁登记备案',num:'123'},
          {event:'房屋租赁登记备案',num:'123'},
          {event:'房屋租赁登记备案',num:'123'}
        ],
        list:[
          {img:require('../assets/logo1.png')},
          {img:require('../assets/logo2.png')},
          {img:require('../assets/logo3.png')},
          {img:require('../assets/logo4.png')},
          {img:require('../assets/logo5.png')}
        ]
      }
    },
    mounted () {
      this.drawLine()
      console.log( this.$(".container").height(),'container')
      this.$(".content").css("height",this.$(".container").height()+"px")
      console.log( this.$(".content").height(),'content')
      this.$(".boxTwo").css("height",this.$(".content").height()-this.$(".boxOne").height()-25+"px")

    },
    methods: {
      drawLine() {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
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
              //设置y轴字符长度超出自动换行
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
                  return str;}
                else {return value;}
              }
            },
          },
          grid: {
            top:'5%',
            left: '1%',
            right: '4%',
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
              data: [150,150, 150,150,150,150],
              animation:false,//关闭动画效果
              barWidth:22,
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
                  //柱形图圆角
                  barBorderRadius:[15, 15, 15, 15],
                  //条形统计图数据显示
                  label: {
                    show: true, //开启显示
                    position: 'right', //在右边显示
                    textStyle: {
                      fontSize : '10',
                      color:'black'
                    }
                  }
                }
              }
            }]
        })
      },
      aStyle(index) {
        if (index == 0) {return { color: '#ea3587'}}
        else if (index == 1) {return { color: '#efc203'}}
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    overflow-y: hidden !important;
    width: 100%;
    .content {
      width: 100%;
      .boxOne {
        height: 45%;
        margin-top: 15px;
        width: 96%;
        margin-left: 2%;
        border-radius: 20px;
        background-color: #ffffff;
        .head {
          height: 30px;
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
            color:black;
            float: left;
            margin-left: 2%;
            font-size: 30px;
          }
        }
        .main{
          width: 100%;
          display: flex;
          flex-direction:row;
          .imgLogo{
            display: flex;
            flex-direction: column;
            width: 14%;
            img{
              margin-left: 30%;
              margin-top: 30px;
              width: 50px;
            }
          }
          .conText{
            width: 86%;
            position: relative;
            ul{
              height: 50px;
              margin-top: 30px;
              list-style: none;
              display: flex;
              flex-direction: row;
              li{
                line-height: 50px;
                font-size: 16px;
                color: #1e84e7;
              }
              .text{
                position: absolute;
                margin-left: -10%;
                font-size: 28px;
                letter-spacing: 0.5px;
                color: black;
              }
              .num{
                font-size: 36px;
                font-weight: bolder;
                letter-spacing: -1px;
                margin-right: 2%;
                margin-left: 70%;
              }
            }
          }
        }
      }
      .click{
        margin-top: 32px;
        color: #1e84e7;
        letter-spacing: 1px;
        font-size: 28px;
      }

    }
    .boxTwo {
      margin-top: 15px;
      width: 96%;
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
</style>
