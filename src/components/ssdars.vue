<template>
  <div class="container">
    <div class="content">
      <div class="head">
        <img src="../assets/down.png">
        <span class="text">实时等待人数</span>
      </div>
      <div class="right">
        <span>人</span>
        <span style="margin-top:-6px;color:rgb(48,175,242);font-size: 30px;font-weight: bolder;">256</span>
        <span>总计:</span>
      </div>
      <div id="myChart"
           :style="{width: '300px',
                      paddingBottom:'94px',
                      marginLeft:'13%',
                       height: '300px'}">
      </div>
      <div class="tip">
        <div>
          <span class="fk" style="background-color: #d200ff;"></span>
          <span>投资项目</span>
        </div>
        <div>
          <span class="fk" style="background-color: #1e84e7;"></span>
          <span>投资项目</span>
        </div>
        <div>
          <span class="fk" style="background-color: #46c93f;"></span>
          <span>投资项目</span>
        </div>
      </div>
      <div class="footer">
        <ul v-for="(item,index) in list" :key="index">
          <li class="fk"  :style="aStyle(index)"></li>
          <li class="name" :style="aStyle(index)">{{item.name}}</li>
          <li class="num" :style="aStyle(index)">{{item.num}}</li>
          <li class="dw">人</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ssdars",
    data () {
      return {
        inputData:"",
        list:[
          {name:'水电量',num:'55'},
          {name:'水电量',num:'55'},
          {name:'水电量',num:'55'}
        ]
      };
    },
    mounted () {
      this.drawLine()
    },
    methods: {
      aStyle(index){
        if(index==0){
          return {backgroundColor:'#d941e9',color:'#d941e9'}
        }else if(index==1){
          return {backgroundColor:'#1e84e7',color:'#1e84e7'}
        }else {
          return {backgroundColor:'#46c93f',color:'#46c93f'}
        }
      },
      drawLine() {
// 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById("myChart"));
// 绘制图表
        myChart.setOption({
// 饼状图
          legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问','邮件营销','联盟广告']
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                {value:315, name:'25%'},
                {value:350, name:'30%'},
                {value:534, name:'45%'},
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                normal:{
                  color:function (params) {
                    var colorList=[
                      'rgb(210,0,255)','rgb(20,132,231)','rgb(70,201,63 )'
                    ];
                    return colorList[params.dataIndex]
                  }
                }
              }
            }
          ]
        });
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    overflow: hidden;
    width: 100%;
    .content{
      height: 1290px;
      width: 96%;
      margin-left: 2%;
      background-color: #ffffff;
      border-radius: 20px;
      margin-top: 15px;
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
      .tip{
        width: 100%;
        display: flex;
        flex-direction: row;
        padding-bottom:80px ;
        div{
          width: 33.3%;
        }
        .fk{
          margin-left: 1%;
          position: absolute;
          width: 26px;
          height: 26px;
        }
        span{
          font-size: 24px;
          margin-left:20%;
          margin-top: 4px;
        }
      }
      .footer{
        width: 100%;
        ul{
          list-style: none;
          display: flex;
          flex-direction: row;
          .fk{
            width: 26px;
            height: 26px;
            margin-left: -2.8%;
            margin-top: 8px;
          }
          .name{
            margin-left: 3%;
            margin-top: 5px;
            position: absolute;
            font-size: 24px;
            letter-spacing: 0.5px;
            background: transparent !important;
          }
          .num{
            font-size: 32px;
            font-weight: bolder;
            margin-left: 80%;
            background: transparent !important;
          }
          .dw{
            color: #b8b8b8;
            margin-top: 9px;
            margin-left: 1%;
            font-size: 20px;
          }
        }
      }
    }
    @media screen and (max-height: 667px) {
      .footer{
        .fk{
          margin-left: -3.9% !important;
        }
      }
    }
    @media screen and (min-height: 812px) {
      .footer{
        .fk{
          margin-left: -3.9% !important;
        }
      }
    }
    @media screen and (min-height: 1024px) {
      .footer{
        .fk{
          margin-left: 4% !important;
        }
        .name{
          margin-left: 9% !important;
        }
        .num{
          margin-left: 77% !important;
        }
      }
    }
  }

</style>
