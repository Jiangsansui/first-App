<template>
  <div class="container">
     <div class="day">
      <img src="./../assets/down.png">
           <span>信息日发布数</span>
             </div>
               <span class="num">236/条</span>
              
                   <div id="myChart" :style="mapStyle"></div>  
     <div class="day" style="margin-top:100%">
        <img src="./../assets/down.png">
              <span>累计信息发布数</span>
                </div>
                    <span class="num" style="margin-top:130%;color:rgb(224, 30, 127);">2226/条</span>
                          <div id="myChartTwo" :style="mapStyleTwo"></div>  
</div>
</template>
<script>
export default {
  name: 'day',
  data () {
    return {
      mapStyle:{
          height:'300px',
          width:'300px',
          marginLeft:'14%',
          marginTop:'10%',
          position:'absolute'
      },
          mapStyleTwo:{
          height:'300px',
          width:'300px',
          marginLeft:'14%',
          marginTop:'100%',
          position:'absolute'
      },
    }
  },
  mounted(){
    this.drawLine();
  },
  methods: {
    drawLine(){
        // 第一个图
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          tooltip: {
        trigger: 'item'
    },
    color:['rgb(230, 209, 24)'],
    series: [
        {
            name:'日发布数',
            type:'pie',
             radius: ['60%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
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
                {value:50}
            ]
        }
    ]
        });
           // 第二个图
        let myChartTwo = this.$echarts.init(document.getElementById('myChartTwo'))
        // 绘制图表
        myChartTwo.setOption({
          tooltip: {
        trigger: 'item'
    },
    color:['rgb(224, 30, 127)'],
    series: [
        { name:'累计发布数',
            type:'pie',
            radius: ['60%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
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
                {value:50}
            ]
        }
    ]
        });
    }
  }
}

</script>

<!-- Add "scoped" attribute to liminpmt CSS to this component only -->
<style scoped>
.container{
    width:100%;
    height:750px;
     background-color: rgb(229, 230, 231);
}
.day{
    display: flex;
    height:30px;
    margin-left: 1rem;
    margin-top: 2rem;
    position: absolute;

}
img{
    width: 25px;
    height: 20px;
    
}
.day span:first-child{
    display: block;
    height:1.4rem;
    width:6px;
    background-color: rgb(25, 91, 214);
    font-family: 'Courier New', Courier, monospace;
   margin-top: 0.25rem;
}
.day span:last-child{
    color:rgb(36, 35, 35);
    font-size: 2em;
    margin-left: 0.5rem;
}
.num{
    color: rgb(230, 209, 24);
    font-size: 2.3em;
    position: absolute;
    margin-top: 10rem;
    margin-left: -3.5rem;
}
 @media only screen and (max-width: 412px){
.num{
    font-size: 3em;
    margin-left: -3rem;
}
 }
 @media only screen and (max-width: 384px){
.container{
    height:650px;
}
.num{
    font-size: 3em;
    margin-left: -2rem;
}
 }
</style>
