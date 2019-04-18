<template>
  <div class="container">
      <!-- 四个方块 -->
        <div class="he">
              <div class="fk" > 
                   <div class="line" style=" background-color: rgb(6, 207, 243);"></div>
          
                   <p style=" color:rgb(6, 207, 243);">取号量</p>
                   <p style="font-size:2rem;margin-top:0rem;color: rgb(6, 207, 243);">1023</p>
                   
              </div>
                 
              <div class="fk"> 
                   <div class="line" style=" background-color: hsl(281, 63%, 44%);"></div>
                          <div class="btn"><p >查看详情</p></div>
                   <p style=" color:hsl(281, 63%, 44%);">办件量</p>
                   <p style="font-size:2rem;margin-top:0rem;color: hsl(281, 63%, 44%);">1023</p>
              </div>
    
              <div class="fk" style="margin-top:1rem;"> 
                   <div class="line" style=" background-color: rgb(224, 30, 127);"></div>
                    <div class="btn"><p>查看详情</p></div>
                   <p style=" color:rgb(224, 30, 127);">受理量</p>
                   <p style="font-size:2rem;margin-top:0rem;color: rgb(224, 30, 127);">1023</p>
              </div>
                 
              <div class="fk" style="margin-top:1rem;"> 
                   <div class="line" style=" background-color: rgb(230, 209, 24);"></div>
                    <div class="btn"><p>查看详情</p></div>
                   <p style=" color:rgb(230, 209, 24);">办结量</p>
                   <p style="font-size:2rem;margin-top:0rem;color: rgb(230, 209, 24);">1023</p>
              </div>
        </div>

<div class="day"> 
         <span></span>
           <span>个人和法人办理量比例情况</span>
             </div>
                <div class="aa">
                   <span class="num">36%</span>
                   <span class="numT" style="color:rgb(224, 30, 127);">22%</span>
                   <div id="myChart" :style="mapStyle"></div> 
                  <div id="myChartTwo" :style="mapStyleTwo"></div> 
                  </div>
            
</div>
</template>
<script>
export default {
  name: 'day',
  data () {
    return {
      mapStyle:{
          height:'200px',
          width:'200px',
          position:'absolute'
      },
          mapStyleTwo:{
          height:'200px',
          width:'200px',
          position:'absolute',
          marginLeft:'200px'
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
		            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
		            name:'任务进度',
		            type:'pie',
		            // 饼图的半径，数组的第一项是内半径，第二项是外半径
		            radius: ['60%', '70%'],
		            // 是否启用防止标签重叠策略，默认开启
		            avoidLabelOverlap: false,          
		           	hoverAnimation: false,
		            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {  
		                    value:20, 
		                    selected:false,
		                    label: {
				                normal: {
				                    // 是显示标签
				                    show: true,
				                    position: 'center',
				                    fontSize: 20,
				                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
				                    // formatter:'{b}\n{d}%',
				                }
		                   },
		                 },
		                {
		                    value:100, 
		                    label:{
		                        normal:{
		                            show:false,
		                             }
		                         }
		                     },
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
		        {
		            // 系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列。
		            name:'任务进度',
		            type:'pie',
		            // 饼图的半径，数组的第一项是内半径，第二项是外半径
		            radius: ['60%', '70%'],
		            // 是否启用防止标签重叠策略，默认开启
		            avoidLabelOverlap: false,          
		           	hoverAnimation: false,
		            // 标签的视觉引导线样式，在 label 位置 设置为'outside'的时候会显示视觉引导线
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data:[
		                {   // 数据值
		                    value:20, 
		                    // 数据项名称
		                    // name:'完成率',
		                    //该数据项是否被选中
		                    selected:false,
		                    // 单个扇区的标签配置
		                    label: {
				                normal: {
				                    // 是显示标签
				                    show: true,
				                    position: 'center',
				                    fontSize: 20,
				                    // 标签内容格式器，支持字符串模板和回调函数两种形式，字符串模板与回调函数返回的字符串均支持用 \n 换行
				                    // formatter:'{b}\n{d}%',
				                }
		               
		            		},
		                 
		                },
		                {
		                    value:100, 
		                    label:{
		                        normal:{
		                            show:false,
                                    }
                                      }
		                     },
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
   height: 700px;
    background-color: #070a1f;
}
.he{
    width:100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    margin-top: 5%;
}
.fk{
    margin-left:1.2rem;
    width:43%;
    height:11rem;
   background-color: rgb(167, 167, 168);
     display: flex;
    flex-direction: column;
    margin-top: 0.2rem;
  border-radius:10px 10px 0px 0px ;
}
.fk p{
    margin-top: 2rem;
    font-size:0.8rem;
   font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.line{
    width: 100%;
    height:0.4rem;
    border-radius:11px 11px 0px 0px;
   
}
.btn{
    margin-top: 7rem;
    margin-left: 12%;
    width: 80px;
    height: 25px;
    border-radius: 20px;
    position: absolute;
    background-color: rgb(17, 16, 16);
    
}
.btn p{
     margin-top:0.3rem;
     color:white;
  font-family: 'Courier New', Courier, monospace;
     
}
.day{
    display: flex;
    height:30px;
    margin-top: 27rem;
    position: absolute;
    margin-left: 1rem;
}
.aa{
    margin-top: 28rem;
    width:100%;
    display: inline-block;
    position: relative;
    height:16rem;
    margin-left: 1rem; 
}
.day span:first-child{
    display: block;
    height:1.5rem;
    width:5px;
    background-color: rgb(25, 91, 214);
   margin-top: -0.03rem;
}
.day span:last-child{
    color:white;
    font-size: 1.7em;
    margin-left: 1rem;
}

.num{
    position: absolute;
    color: rgb(230, 209, 24);
    font-size: 2em;
    display: inline-block;
    height:2rem;
    margin-top: 5.7rem;
    position: absolute;
    margin-left: -8rem;
}
.numT{
    height:2rem;
    font-size: 2em;
    display: inline-block;
    position: absolute;
    margin-top: 5.7rem;
    margin-left: 4.5rem;
}
 @media only screen and (max-width: 412px){
 }
 @media only screen and (max-width: 384px){
.container{
    height:650px;
}
 }
</style>
