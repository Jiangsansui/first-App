<template>
    <div class="container">
      <div class="search">
        <img src="./../assets/search.svg" @click="showInput">
        <input type="text" class="text" placeholder="请输入" :style="inputStyle">
      </div>

<div class="titleOne">
<ul>
    <li>申报人</li>
    <li>申报号</li>
    <li>申报事项</li>
    <li>申报时间</li>
</ul>
</div>
<!-- 列表 -->
<div class="xnContent">
   <ul>
      <li v-for="(item,index) in list" :key="index" :style="index%2===1?colorStyle:''" >
        <span class="firstSpan">{{item.name}}</span>
        <span>{{item.number}}</span>
        <span class="thirdSpan">{{item.table}}</span>
        <span>{{item.time}}</span>
      </li>
   </ul>
</div>
    </div>
</template>
<script>
export default {
data(){
    return{
        colorStyle:{
          backgroundColor:'#333442',
        },
       
       // 搜索框隐藏
        inputStyle:{
           display:'none'
        },

        // 循环
        list:[{
            name:"张某某某",
            number:"152257714454",
            table:"事业登记表",
            time:"2019.3.18 13.48"
        },
        {
            name:"张某某某",
            number:"152257714454",
            table:"事业登记表",
            time:"2019.3.18 13.48"
        },
        {
            name:"张某某某",
            number:"152257714454",
            table:"事业登记表",
            time:"2019.3.18 13.48"
        },
        {
            name:"张某某某",
            number:"152257714454",
            table:"事业登记表",
            time:"2019.3.18 13.48"
        },
        {
            name:"张某某某",
            number:"152257714454",
            table:"事业登记表",
            time:"2019.3.18 13.48"
        },{
            name:"张某某某",
            number:"152257714454",
            table:"事业登记表",
            time:"2019.3.18 13.48"
        },
        {
            name:"张某某某",
            number:"152257714454",
            table:"事业登记表",
            time:"2019.3.18 13.48"
        }]

    }
},

// 点击search img 显示搜索框
methods:{
    showInput(){
        this.inputStyle={display:'block'}
    }
}
}
</script>
<style>
.container{
    width:100%;
    height: 736px;
    background-color: #070a1f;
    position: absolute;
    font-size: 62.5%;
}
.search{
    position:absolute;
    width: 100%;
    height:45px;
    display: flex;
    flex-direction: row;
}
img{
float: left;
width: 24px;
margin-left: 0.5rem;
margin-top: 1%;
}
input{
     width: 80%;
     height: 25px;
     background-color: #333442;
     opacity: 0.7;
     border-radius: 25px;
     border:none;
     text-indent: 4%;
     margin-top: 3%;
     margin-left: 2%;
}
.titleOne{
   
     width: 100%;
     height:40px;
     background-color: #333442;
     opacity: 0.7;
     margin-top: 0;
}
.titleOne ul{
      margin-top: 3.2rem;
      list-style: none;
      padding-inline-start: 0px;
      margin-left: -1rem;
}
.titleOne ul li{
    margin-top: -0.3rem;
    float: left;
    width:20%;
    line-height: 50px;
    color:rgb(30, 210, 241);
}
.titleOne ul li:nth-child(3){
    margin-left: 8%;
}
.titleOne ul li:last-child{
    margin-left: 11%;
}
/* 循环xnContent */
.xnContent{
     position: absolute;
     width: 100%;
     opacity: 0.7;
}
.xnContent ul{
    width:100%;
     margin-top: 0;
     list-style: none;
}
.xnContent ul li{
    width:100%;
    display: flex;
    height:50px;
    margin-left: -10%;
}
.xnContent ul li span:not(:last-child){
    width:22%;
    height:100%;
    text-align: left;
  line-height: 50px;
  font-size: 1.2em;
  color:white;
}
.xnContent ul li span:last-child{
    width:34%;
      line-height: 50px;
  font-size: 2em;
  color:white;
  text-indent: 8%;
}
.firstSpan{
    text-indent: 10%;
}
.thirdSpan{
   
    text-indent: 30%;
}

</style>
