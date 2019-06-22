<template>
  <div class="container">
    <div class="search" >
      <span >部门信息</span>
      <input type="text" placeholder="请输入内容" ></input>
      <img src="../assets/search.png"  >
    </div>
    <div class="content">
      <div class="box" v-for="item in list" :key="item.id" style="list-style: none" @click="cqjy()">
        <li>
          <span class="circle"></span>
          <span>{{item.name}}</span>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "bjdt",
    data(){
      return{
        list: [
          {name:'产权交易'},
          {name:'产权交易'},
          {name:'产权交易'},
          {name:'产权交易'},
          {name:'产权交易'},
          {name:'产权交易'},
          {name:'产权交易'},
          {name:'产权交易'},
          {name:'产权交易'},
          {name:'产权交易'}

        ]
      }
    },
    methods:{
      cqjy(){
        this.$router.push({path: "/cqjy"});
      }}
  }
</script>

<style lang="scss" scoped>
  .container {
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
    .content{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      .box{
        width: 45%;
        height: 150px;
        background-color: #ffffff;
        margin-top: 0.4rem;
        margin-left: 3%;
        border-radius: 20px;
        box-shadow: 0px 1px 7px 1px rgba(184, 184, 184, 0.8);
        .circle{
          width: 5%;
          height: 34px;
          background-color: rgb(30,132,231);
          border-top-right-radius: 1.5rem;
          border-bottom-right-radius: 1.5rem;
          float: left !important;
          margin-top: 0.85rem;
        }
        span:last-child{
          line-height: 2.2rem;
          float: left;
          margin-left: 8.9%;
          font-size: 0.4rem;

        }
      }
    }
  }


</style>
