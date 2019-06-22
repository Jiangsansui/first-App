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
            <ul v-for="item in info">
              <li class="text">{{item.event}}</li>
              <li class="num">{{item.num}}</li>
              <li class="dw">条</li>
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
        <div id="myChart"
             :style="{
                 width: '100%',
                 height: '360px'}"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pjtj",
    data(){
      return{
        info:[],
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
      this.getInfo()
    },
    methods: {
      getInfo(){
        this.$http
          .get("/table")
          .then(
            function (res) {
              this.info=res.data
              // .concat(this.list)
              let arr=[]
              this.info.map((item,key)=>{
                if(key>=5){
                  arr.push(item)
                }
              })
            }.bind(this)
          )
          .catch(
            function (error) {
              console.log(error)
            }.bind(this)
          )
      },
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
                  return str;
                } else {
                  return value;
                }
              }
            },
          },
          grid: {
            top:'10%',
            left: '1%',
            right: '4%',
            // bottom: '1%',
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
        margin-left: 2%;
        border-radius: 20px;
        background-color: #ffffff;
        padding-bottom: 50px;
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
              margin-top: 35px;
              list-style: none;
              width: 100%;
              display: flex;
              flex-direction: row;
              li{
                color: #cb00f7;
              }
              .text{
                margin-top: 2px;
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
              .dw{
                margin-top: 8px;
                font-size: 24px;
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
      margin-top: 10px;
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
    @media screen and (max-height: 667px) {
      .boxTwo{
        height: 670px;
      }
    }
  }
</style>
