<template>
    <div class="container">
      <div class="content">
        <div class="top">
        <div class="left">
          <ul>
            <li style="margin-left: -5%">一层</li>
            <li style="margin-left: 5%">二层</li>
            <li style="margin-left: 5%">三层</li>
          </ul>
        </div>
        <div class="right">
    <span style="margin-right: 5%">日</span>
    <span style="margin-right: 5%">月</span>
    <span style="margin-right: 5%">年</span>
</div>
        <div id="myChart" :style="{
        width: '100%',
        height: '300px',
         }"></div>
        </div>
        <div class="bottom">
          <div class="wrap_01" style="height: 300px;">
            <CircleProgress

:width="150"
:height="150"
              :radius="20"
              :progress="30"
              :isAnimation="true"
            ></CircleProgress>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import CircleProgress  from 'vue-circleprogressbar'
  import  $ from 'jquery'
    export default {
      name: "lctj",
      data () {
        return {
          inputData:"",
          list:[]
        };
      },
      mounted(){
        this.drawLine();
$(".wrap_01 svg circle").css("r","70")
      },
      //进度环
      components: {
        CircleProgress,
        $
      },
      methods: {
        drawLine() {
          let myChart = this.$echarts.init(document.getElementById("myChart"));
          myChart.setOption({
            color:['#efc203','#1e84e7','#8034ea'],
            graphic:[{
              type:'text',
              left:'center',
              top:'center',
              style:{
                text:'1024',
                textAlign:'center',
                fill:'#efc203',
                width:30,
                height:30,
                fontSize:30,

              }
            },{
              type:'text',
              left:'center',
              top:'60%',
              style: {
                text: '办结量',
                fill: '#000',
                width: 30,
                height: 30,
                fontSize: 16,
              }
            }
            ],

            series: [
              {
                name:'访问来源',
                type:'pie',
                radius: ['50%', '80%'],
                avoidLabelOverlap: false,
                roseType : 'radius',
                label: {
                  normal: {
                    show: false,
                    position: 'center',

                    
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
                data:[
                  {value:435},
                  {value:390},
                  {value:234},

                ]
              }
            ]
          })
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
  .top{
    width: 100%;
    background-color: #ffffff;
    border-radius: 20px;
    .left{
      width: 100%;
      ul{
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: row;
        li{
          font-size: 24px;
          color: #ffffff;
          margin-top: 15px;
          border-radius: 19px;
          width: 13%;
          height: 40px;
          background-color: #329aff;
        }
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
.bottom{
  width: 100%;
  margin-top: 10px;
  background-color: #ffffff;
  border-radius: 20px;
  /*.wrap_01{*/
  /*  svg{*/
  /*    circle{*/
  /*      r:70 !important;*/
  /*    cy: 150;*/
  /*    cx: 150;*/
  /*    stroke: red;*/
  /*    stroke-width: 20;*/
  /*    stroke-linecap: round;*/
  /*    stroke-dasharray: 879.2;*/
  /*    stroke-dashoffset: 879.2;*/
  /*    fill: none;*/
  /*  }*/
  /*  }*/
  /*}*/
}
}
  }

</style>
