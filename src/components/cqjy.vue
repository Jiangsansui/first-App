<template>
  <div class="container">
    <div class="search" >
      <span>产权交易</span>
      <input type="text" placeholder="请输入内容" ></input>
      <img src="../assets/search.png"  >
    </div>
    <div class="head">
      <ul>
      <li>申报人</li>
      <li>申报号</li>
      <li>申报事项</li>
      <li>申报时间</li>
    </ul>
    </div>
    <div class="content">
      <div class="message">
        <ul v-for="(item,index) in list" :class="{off:index%2!=1}">
          <li>{{item.username}}</li>
          <li>
            {{item.projid.substring(0,4) + '***' + item.projid.substring(item.projid.length-4,item.projid.length)}}
          </li>
          <li><div>{{item.name}}</div></li>
          <li>{{item.createdate.substring(0,16)}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        list:[]
      }},
    filters: {
      ellipsis (value) {
        if (!value) return ''
        if (value.length > 6) {return value.slice(0,6) + '\n'}
        return value
      }
    },
    mounted(){this.getcaseList();},
    methods: {
      getcaseList(){
        this.$.ajax({ url: "http://10.10.2.11:8037/api/data/caseList", success:(res)=>{
            console.log(res);
            this.list=res.data;
            console.log(this.list);
          }});
      }
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
        padding-inline-start: 0;
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: row;
        li:nth-child(1){
          width: 20%;
          margin-left: 4%;
        }
        li{
          width: 26%;
          line-height: 70px;
          font-size: 24px;
          color: rgb(65, 151, 234);
          text-align: left;
        }
      }
    }
    .content{

      width: 98%;
      margin: 10px 1% 0;
      background-color: #ffffff;
      .message{
        ul{

          display: flex;
          flex-direction: row;
          list-style: none;
          margin-top: 15px;
          padding-inline-start: 0;
          text-align: left;
          li:nth-child(1){
            width: 20%;
            padding-left: 3%;
          }
          li{
            display: table;
            width: 26%;
            height: 44px;
            line-height: 44px;
            padding: 16px 0;
            div {
              display: table-cell;
              vertical-align: middle;
              line-height: 22px;
            }
          }
          li:nth-child(3){
            width: 18%;
          }
          li:nth-child(4){
            margin-left: 4%;
            color:rgb(160,160,160);
          }
        }
        .off {
          background-color: #fafafa;
        }
      }
    }
  }
</style>






