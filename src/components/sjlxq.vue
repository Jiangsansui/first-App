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
          <ul>
            <li>日</li>
            <li>月</li>
            <li>年</li>
          </ul>
        </div>
        <div id="myChartOne" :style="{width: '100%',height: '300px'}" ></div>
      </div>
      <!--      部门办件量-->
      <div class="boxTwo">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">部门办件量</span>
          <span></span>
        </div>
        <div class="right">
          <ul>
            <li  :class="tabs == 3 ? 'act' : ''"  @click="handleTabs(3)">日</li>
            <li  :class="tabs == 2 ? 'act' : ''"  @click="handleTabs(2)">月</li>
            <li  :class="tabs == 1 ? 'act' : ''"  @click="handleTabs(1)">年</li>
          </ul>
        </div>
        <div class="swiper-container" style="width: 100%">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in list">
              <div :id="'myChart' + index" :style="{width: '100%',height: '300px'}"></div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
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
        finalindex:0,
        finallength:6,
        tabs:1,
        list: [],
        listX: [],
        listY: [],
        page: 1,
        maxcount:0,
        group:[],
        maxgroup:[]
      };
    },
    mounted(){
      this.drawOne();
      this.drawTwo("年");
      $('#myChartOne>div').css('top','-20px');
      this.$(".content").css("height",this.$(".container").height()-15+"px")
      this.$(".boxTwo").css("height",this.$(".content").height()-this.$(".boxOne").height()-10+"px")
      console.log(this.$(".boxTwo").height(),'After第二个盒子')
    },
    methods: {
      handleTabs(num) {
        this.tabs = num;
        if (num == 1) {this.drawTwo("年");}
        else if (num == 2) {this.drawTwo("月");}
        else {this.drawTwo("日");}
      },
      //窗口办件量
      drawOne() {
        let myChartOne = this.$echarts.init(document.getElementById("myChartOne"));
        myChartOne.setOption({
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
            }
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
                normal:{
                  color:'#f1f1f1',//自定义背景颜色
                  barBorderRadius:[15, 15, 15, 15]
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
      },
      //部门办件量
      drawTwo(num) {
        var url;
        if(num=="年"){url="/api/data/yearNumByDepartmentNew"}
        else if(num=="月"){url="/api/data/monthNumByDepartmentNew"}
        else{url="/api/data/dayNumByDepartmentNew"}
        var that = this;
        that.$axios
        //获取数据请求接口
          .get(url)
          .then(
            (res)=>{
              that.list = [];
              for (var i=0; i<res.data.data.length; i++) {
                if (i%6 === 0) {
                  that.list.push(i);
                  that.group.push(i);
                  that.listY['list' + Math.ceil((i+1)/6)] = [];
                  that.listX['list' + Math.ceil((i+1)/6)] = [];
                  that.maxgroup['group'+Math.ceil((i+1)/6)]=[];
                }
                that.listY['list' + Math.ceil((i+1)/6)].push(res.data.data[i].name);
                that.listX['list' + Math.ceil((i+1)/6)].push(res.data.data[i].count);
                that.maxgroup['group'+Math.ceil((i+1)/6)].push(5)
                console.log(that.maxgroup)
              }
              setTimeout(()=>{
                this.finalindex=Math.ceil(res.data.data.length/6-1);
                for(var n=0; n<Math.ceil(res.data.data.length/6); n++) {
                  that.drawTwoChart(n);
                  if (n == Math.ceil(res.data.data.length/6)-1) {
                    new that.Swiper ('.swiper-container', {
                      pagination: {el: '.swiper-pagination'},
                    })
                  }
                }
              }, 0)
            }
          ).catch(
          (error)=>{
            console.log('【error】', error);
          }
        )
      },
      drawTwoChart(index) {
        let myChart = this.$echarts.init(document.getElementById('myChart' + index));
        myChart.setOption({
          tooltip: {},
          yAxis: {
            data: this.listY['list' + (index+1)],
            axisLine: {show: false},
            // 去除y轴上的刻度线
            axisTick: {show: false},
            axisLabel: {
              show: true,
              interval: 0,
              formatter: function (value) {
                var str = "";
                var num = 5; //每行显示字数
                var valLength = value.length; //该项x轴字数
                var rowNum = Math.ceil(valLength / num); // 行数
                if (rowNum > 1) {
                  for (var i = 0; i < rowNum; i++) {
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
            }
          },
          grid:{
            left: '2%',
            right: '1%',
           top: '5%',
            bottom:'10%',
            containLabel: true},
          xAxis: {
            //去掉x轴
            axisLine: {show: false},
            // 去除y轴上的刻度线
            axisTick: {show: false},
            // 控制网格线是否显示
            splitLine: {show: false},
            //控制着坐标轴x轴的文字是否显示
            axisLabel: {show: false},
          },
          series: [
            //条形统计图背景设置
            {
              type: 'bar',
              //背景图定位
              silent: true,
              //自定义背景颜色
              itemStyle: {
                normal: {
                  color: '#f1f1f1',
                  barBorderRadius: [15, 15, 15, 15],
                }
              },
              //设置柱形重合
              barGap: '-100%',
              data:this.maxgroup['group' + (index+1)],
              //关闭动画效果
              animation: false,
              barWidth: '22'
            },
            {
              type: 'bar',
              data: this.listX['list' + (index+1)],
              //设置柱子的宽度
              barGap: '-100%',//设置柱形重合
              barWidth: 22,
              itemStyle: {
                //通常情况下：
                normal: {
                  // 柱子的颜色
                  color: '#f1c205',
                  //柱形图圆角，初始化效果
                  barBorderRadius: [15, 15, 15, 15],
                  label: {
                    //开启显示
                    show: true,
                    //在上方显示
                    position: 'right',
                    textStyle: {
                      fontSize: '12',
                      color: 'black'
                    }
                  }
                },
              }
            }]
        })
        this.finallength=(this.listX['list' + (this.finalindex+1)]).length;
        this.maxGroup=[5,5,5]
        if(index==this.finalindex && this.finallength<6){
          this.$('#myChart'+this.finalindex).css("height",50*this.finallength+'px');
          this.$("#myChart"+this.finalindex).children("div").css("height",50*this.finallength+'px');
          this.$("#myChart"+this.finalindex).children("div").children("canvas").css("height",50*this.finallength+'px');
          let sideBarChart = this.$echarts.init(document.getElementById('myChart' + this.finalindex));
          sideBarChart.resize();
        }
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
            .act{
              color: #ffffff;
              background-color: #329aff;
            }
          }
        }
      }
    }
  }
</style>
