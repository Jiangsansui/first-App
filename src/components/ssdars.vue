<template>
    <div class="container">
             <div class="content">
               <div class="head">
                   <img src="../assets/down.png">
                   <span class="text">实时等待人数</span>
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
                 <div class="line">
                   <span class="left fk" style="background-color: #d200ff"></span>
                   <span class="left">水电量</span>
                   <span class="right"><span class="one" style="color:#d200ff;">31</span>人</span>
                 </div>
                 <div class="line">
                   <span class="left fk" style="background-color: #329aff"></span>
                   <span class="left">水电量</span>
                   <span class="right"><span class="one" style="color:#1e84e7;">31</span>人</span>
                 </div>
                 <div class="line">
                   <span class="left fk" style="background-color: #46c93f"></span>
                   <span class="left">水电量</span>
                   <span class="right"><span  class="one" style="color:#46c93f;">31</span>人</span>
                 </div>
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
          list:[]
        };
      },

      mounted () {
        this.drawLine()
      },
      methods: {

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
  width: 98%;
  margin-left: 1%;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: 10px;
  .head{
    position: relative;
    width: 100%;
    padding-top: 35px;
      img{
        float: left;
        margin-left: 4%;
        width: 24px;
        height: 18px;
      }
      span{
        float: left;
        margin-left: 3%;
        font-size: 32px;
        margin-top: -15px;
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
  margin-left: -4%;
  position: absolute;
  width: 26px;
  height: 26px;
}
    span{
      font-size: 24px;
      margin-left: 3%;
      margin-top: 4px;
    }
  }
  .footer{
    width: 100%;
    display: flex;
    flex-direction: column;
    .line{
            margin-top: 30px;
            float: left;
            width: 100%;
          .left{
            font-size: 24px;
            float: left;
            margin-left: 13%;
          }

          .fk{
            margin-left: 6%;
            margin-right: 20px;
            display: block;
            width: 26px;
            height: 26px;
            position: absolute;
            margin-top: 5px;
          }
          .right{
color: #b8b8b8;
            float: right;
            margin-right: 5%;
.one{
  font-size: 32px;
  font-weight: bolder;
}
          }
       }
  }

}
    @media screen and(min-height:667px) {

      .footer{
        height: 380px;
      }
    }
    @media screen and(min-height:736px) {
      .footer{
        height: 450px;
      }
    }
    @media screen and(min-height:812px) {
      .footer{
        height: 670px;
      }
    }
  @media screen and(max-height:568px) {
    .footer{
      height: 230px;
    }
  }
  }

</style>
