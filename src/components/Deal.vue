<template>
    <div class="container">
        <div class="head">
          <img src="./../assets/err.svg">
           <p>产权交易</p>
         </div>

         <div class="sear">
            <img src="./../assets/search.svg">
             <input type="text" placeholder="请输入内容"> 
         </div>


      <div class="main">
<div class="titleOne">
<ul>
    <li>申报人</li>
    <li>申报号</li>
    <li style="margin-left:1rem;">申报事项</li>
    <li class="lastLi">申报时间</li>
</ul>
</div>
<div class="titleTwo">
<div class="on">
    <ul>
     <li>张某先生</li>
     <li>1***********7</li>
     <li>失业登记表</li>
     <li>2019.3.18 13：48</li>
    </ul>
</div>
</div>
</div>
    </div>
</template>

<script>
export default {

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
.sear{
    width: 100%;
    height: 45px;
    border: none;
    background-color: rgb(248, 247, 245);
    }
  .sear img{
      width: 25px;
      height: 25px;
      margin-top: 0.6rem;
      margin-left: -22rem;
}
 input{
     text-align:center;
     position: absolute;
     margin-left: 1rem;
     width: 80%;
     height: 25px;
     margin-top: 0.5rem;
     border-radius: 15px;
     border: none;
     background-color: rgb(225, 227, 230);
 }
.main{
    margin-top: 10px;
    width: 96%;
    height: 626px;
    margin-left: 2%;
}
.titleOne{
    width: 100%;
    height:40px;
    background-color: rgb(248, 247, 245);
    margin-top: 0;
}
.titleOne ul{
      list-style: none;
      padding-inline-start: 0px;
      margin-left: -1rem;
}
.titleOne ul li{
    margin-top: -0.3rem;
    float: left;
    width:20%;
    line-height: 50px;
    color:rgb(78, 175, 231);
}
.titleOne ul li:last-child{
    width:20%;
    margin-left: 16%;
}
.titleTwo{
    width: 96%;
    height: 575px;
    position: absolute;
    
}
.on ul{
      height: 40px;
      list-style: none;
      padding-inline-start: 0px;
      margin-top: -0.21rem;
}
.on ul li{
    width: 22%;
    float: left;
    background-color: rgb(241, 240, 240);
    line-height: 40px;
    margin-top: 0;
    text-align: left;
   }
.on ul li:last-child{
    width: 34%;
   color: rgb(175, 177, 177);
} 

</style>
