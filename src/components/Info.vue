<template>
<div class="container">
<div class="head">
    <img src="./../assets/err.svg">
    <p>办件动态</p>
</div>
      <input type="text" class="search" >
      
      <div class="img">
      <img src="./../assets/search.svg">
      </div>
    <div class="title"><p>部门信息</p></div>
    <div class="xhlist">
<ul>
    <li v-for="item in list" :key="item.id">
        <span class="name">{{item.name}}</span>
    </li>
</ul>
    </div>
</div>
    </template>

<script>
export default {
data(){
    return{
        list:[
             {"id":"0","name":"产权交易"},
             {"id":"1","name":"失业单位"},
             {"id":"2","name":"发改局"},
             
             {"id":"3","name":"产权交易"},
             {"id":"4","name":"产权交易"},
             {"id":"5","name":"产权交易"},
             
             {"id":"6","name":"产权交易"},
             {"id":"7","name":"产权交易"},
             {"id":"8","name":"产权交易"},

             {"id":"9","name":"产权交易"},
             {"id":"10","name":"产权交易"},
             {"id":"11","name":"产权交易"},
        ]
    }
}
}
</script>

<style>
.container{
    width: 100%;
    height: 736px;
    background-color: rgb(229, 230, 231);
}
.head{
    width: 100%;
    height: 60px;
    background-color: rgba(241, 237, 237, 0.986);
}
img{
    width: 24px;
    margin-left: -24rem;
    margin-top: 18px;
    }
p{
        margin-top: -1.6rem;
        margin-left: 2rem;
        font-size: 1.2rem;
        font-family:'Courier New', Courier, monospace;
        position: absolute;
    }
.search {
    width: 100%;
    height: 40px;
    padding-left: -50rem;
    border: none;
}


.img{
    margin-top: -3rem;
}
.title{
    width:94%;
    height: 40px;
    margin-left: 3%;
}
.title p{
   color:black;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.2rem;
    margin-left: 0;
    margin-left: 3%;
    margin-top: 1.3rem;
}

/* 循环CSS */
.xhlist{
     width: 100%;
     height: 616px;  
}
.xhlist ul{
    width:100%;
    list-style: none;
    display: inline-block;
    margin-left: -10%;
   
}
.xhlist ul li{
    width:31%;
    height: 138px;
    background-color: rgb(12, 143, 231);
    border-radius: 10px;
    float: left;
    margin-left: 1.8%;
    margin-top: 1.8%;
}
.name{
     position: absolute;
     margin-top: 3.5rem;
     margin-left: -1.7rem;
     color: rgb(226, 228, 228);
     font-size: 1rem;
     font-family:'Courier New', Courier, monospace;
    
}
</style>


