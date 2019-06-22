<template>
  <div class="container">
    <div class="search" >
      <span >产权交易</span>
      <input type="text" placeholder="请输入内容" ></input>
      <img src="../assets/search.png"  >
    </div>
    <div class="head">
      <ul>
        <li style="margin-left: -6%">申报人</li>
        <li style="margin-left: 10%">申报号</li>
        <li style="margin-left: 16%">申报事项</li>
        <li style="margin-left: 22%">申报时间</li>
      </ul>
    </div>
    <div class="content">
      <div class="message">
        <ul v-for="item in list">
          <li style="margin-left: -6%">{{item.name}}</li>
          <li style="margin-left:7%">{{item.num}}</li>
          <li style="margin-left: 7%">{{item.event}}</li>
          <li >{{item.date}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        list:[
          {name:'张某先生',num:'1***********7',event:'失业登记表',date:'2019.3.18 13：48'},
          {name:'张某先生',num:'1***********7',event:'失业登记表',date:'2019.3.18 13：48'},
          {name:'张某先生',num:'1***********7',event:'失业登记表',date:'2019.3.18 13：48'},
          {name:'张某先生',num:'1***********7',event:'失业登记表',date:'2019.3.18 13：48'},
          {name:'张某先生',num:'1***********7',event:'失业登记表',date:'2019.3.18 13：48'},
          {name:'张某先生',num:'1***********7',event:'失业登记表',date:'2019.3.18 13：48'},
          {name:'张某先生',num:'1***********7',event:'失业登记表',date:'2019.3.18 13：48'},
          {name:'张某先生',num:'1***********7',event:'失业登记表',date:'2019.3.18 13：48'}
        ]
      }
    },
    methods: {
    }
  }
</script>
<style lang="scss" scoped>
  .container {
    overflow: hidden;
    width: 100%;
    .search{
      box-shadow: 0px 0px 3px 2px #c8c8c8;
      width: 100%;
      height: 90px;
      background-color: #ffffff;
      span{
        margin-left: 4%;
        line-height: 90px;
        float: left;
        font-size: 28px;
      }
      input{
        width: 50%;
        height: 56px;
        background-color: rgb(238,238,238);
        border-radius: 12px;
        padding-left: 4%;
        border: none;
        outline: none;
        font-size: 24px;
        margin-top: 17px;
        margin-left: 12%;
      }
      img{
        width: 40px;
        float: right;
        padding-top: 25px;
        margin-right: 4%;
      }
    }
    .head{
      margin-top: -2%;
      height: 70px;
      width: 100%;
      background-color: #ffffff;
      ul{
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: row;
        li{
          float: left;
          line-height: 70px;
          font-size: 24px;
          color: rgb(65, 151, 234);
        }
      }
    }
    .content{
      margin-top: 10px;
      width: 98%;
      margin-left: 1%;
      background-color: #ffffff;
      .message{
        width: 100%;
        ul{
          display: flex;
          flex-direction: row;
          width: 100%;
          list-style: none;
          li{
            padding-top: 20px;
            padding-bottom: 20px;
            font-size: 22px;
          }
          li:last-child{
            margin-left:10%;
            color:rgb(160,160,160);
            font-size: 20px;
          }
        }
      }
    }
  }
</style>






