<template>
  <div class="container">
    <div class="content">
      <div class="boxOne">
        <div class="left">
          <ul><li>一层</li><li>二层</li><li>三层</li></ul>
        </div>
        <div class="right">
          <ul><li>日</li><li>月</li><li>年</li></ul>
        </div>
        <div id="myChart" :style="{width: '100%',height: '350px'}"></div></div>
      <div class="boxTwo">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">满意度情况</span>
        </div>
        <div class="right">
          <ul>
            <li>日</li>
            <li>月</li>
            <li>年</li>
          </ul>
        </div>
        <div class="main">
          <div class="li">
            <el-progress id="lctjc1" type="circle" :percentage="25" :width="100" :stroke-width="12"></el-progress>
            <div class="text">非常满意</div>
          </div>
          <div class="li">
            <el-progress id="lctjc2" type="circle" :percentage="25" :width="100" :stroke-width="12"></el-progress>
            <div class="text">满意</div>
          </div>
          <div class="li">
            <el-progress id="lctjc3" type="circle" :percentage="25" :width="100" :stroke-width="12"></el-progress>
            <div class="text">不满意</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    name: "lctj",
    data () {
      return {
        centernum:435
      }
    },
    mounted(){
      this.drawLine();
      $('#lctjc1>.el-progress__text').css('color','#d200ff');
      $('#lctjc2>.el-progress__text').css('color','#f1c101');
      $('#lctjc3>.el-progress__text').css('color','#1e84e7');
      this.$(".content").css("height",this.$(".container").height()+"px")
      console.log( this.$(".content").height(),'content')
      console.log( this.$(".boxOne").height(),'boxOne')
      this.$(".boxTwo").css("height",this.$(".content").height()-this.$(".boxOne").height()-25+"px")
      console.log( this.$(".boxTwo").height(),'boxTwo')
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
              text:this.centernum,
              textAlign:'center',
              fontWeight:'bolder',
              fill:'#efc203',
              width:30,
              height:30,
              fontSize:35,
            }
          },{
            type:'text',
            left:'center',
            top:'58%',
            style: {
              text: '办结量',
              fill: '#000',
              width: 30,
              height: 30,
              fontSize: 15,
            }
          }
          ],
          series: [
            {
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
                {value:'435'},
                {value:'390'},
                {value:'234'},
              ]
            }
          ]
        })
        myChart.on("click", (params) => {
          this.centernum = params.data.value;
          this.drawLine();
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
      overflow: hidden;
      width: 100%;
      .boxOne{
        margin-top: 15px;
        width: 96%;
        background-color: #ffffff;
        border-radius: 20px;
        margin-left: 2%;
        .left{
          width: 100%;
          padding-top: 30px;
          ul{
            padding-inline-start: 0;
            width: 60%;
            display: flex;
            flex-direction: row;
            list-style: none;
            li{
              margin-left: 50px;
              font-size: 24px;
              width: 100px;
              height: 40px;
              line-height: 40px;
              border-radius: 20px;
              background-color: #e7e7e7;
            }
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
      .boxTwo{
        width: 96%;
        margin-left: 2%;
        margin-top: 15px;
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
        .right{
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
        .main{
          width: 100%;
          display: -webkit-box;
          -webkit-box-orient: horizontal;
          .li{
            -webkit-box-flex: 1;
            margin-top: 130px;
            position: relative;
            .text {
              width: 100px;
              text-align: center;
              margin-left: -50px;
              position: absolute;
              left: 50%;
              top: 58%;
            }
          }
        }
      }
    }
  }
</style>
