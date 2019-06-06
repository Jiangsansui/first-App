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
        <div class="boxTwo">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">满意度情况</span>
            <div class="right">
              <span style="margin-right: 5%">日</span>
              <span style="margin-right: 5%">月</span>
              <span style="margin-right: 5%">年</span>
            </div>


          </div>
          <div class="main">
            <el-progress id="lctjc1" type="circle" :percentage="25" :width="100" :stroke-width="14"></el-progress>
            <el-progress id="lctjc2" type="circle" :percentage="25" :width="100" :stroke-width="14"></el-progress>
            <el-progress id="lctjc3" type="circle" :percentage="25" :width="100" :stroke-width="14"></el-progress>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
    export default {
      name: "lctj",
      data () {
      },
      mounted(){
        this.drawLine();
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
        },
      }
    }
</script>
<style lang="scss" scoped>
  .container{
    overflow: hidden;
    width: 100%;
.content{
  width: 100%;
  .top{
    padding-bottom: 100px;
    margin-top: 10px;
    width: 96%;
    background-color: #ffffff;
    border-radius: 20px;
    margin-left: 2%;
    .left{
      width: 100%;
      padding-top: 10px;
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
.boxTwo{
  width: 96%;
  margin-left: 2%;
  height: 550px;
  margin-top: 10px;
  background-color: #ffffff;
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
    span{
      font-size: 30px;
      color: #c8c8c8;
      float: right;
      margin-right: 4%;
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
        color:black;
      }
    }
  }
  .main{
    margin-top:100px;
    float: left;
    display: flex;
    flex-direction: row;
    #lctjc1{

      margin-left: 10%;
    }
    #lctjc2{
      margin-left: 10%;
    }
    #lctjc3{
      margin-left: 10%;
    }

   }
  }
 }
    @media screen and (max-height: 568px) {
      .top{
        padding-top: 10px !important;
        padding-bottom: 10px !important;
      }
    }
    @media screen and (max-height: 667px) {
      .boxTwo{
         height: 490px !important;
        .main{
        }
        }
    }

  }

</style>
