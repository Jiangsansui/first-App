<template>
  <div class="container">
    <div class="content">
      <div class="boxOne" v-for="(item,index) in info" :key="index">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">{{item.title}}</span>
        </div>
        <div class="mainOne">
          <div class="left" >
            <img v-for="i in item.imagePath" :src="i" alt="">
          </div>
          <div class="right">
            <ul v-for="(matter,index) in item.text" :key="index">
              <li class="text">{{matter.a}}</li>
              <li class="num" :style="aStyle(index)">{{matter.b}}</li>
              <li class="dw">条</li>
            </ul>
          </div>
        </div>
        <span class="showMore" @click="item.path ? $router.push(item.path):''">查看详情></span>
      </div>
      <div style="display: flex;flex-direction: row;width:100%">
        <div class="boxTwo" v-for="(item,index) in list" :key="index">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">{{item.title}}</span>
          </div>
          <div class="mainTwo">
            <ul v-for="(T,index) in item.text" :key="index">
              <li class="text" :style="bStyle(index)">{{T.name}}</li>
              <li class="num" :style="bStyle(index)">{{T.count}}</li>
              <li class="dw">条</li>
            </ul>
          </div>
          <span class="showMore" @click="item.path ? $router.push(item.path):''">查看详情></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "zhpm",
    data(){
      return{
        info:[
          {
            title:"办理次数最多得窗口",
            imagePath:[
              require("../assets/logo1.png"),
              require("../assets/logo2.png"),
              require("../assets/logo3.png")
            ],
            text:[
              {a:'房屋租赁登记备案',b:'126'},
              {a:'房屋租赁登记备案',b:'126'},
              {a:'房屋租赁登记备案',b:'126'}
            ],
            path:'/handleMost'
          },
          {
            title:"咨询次数最多得窗口",
            imagePath:[
              require("../assets/logo1.png"),
              require("../assets/logo2.png"),
              require("../assets/logo3.png"),
              require("../assets/logo4.png")
            ],
            text:[
              {a:'房屋租赁登记备案',b:'126'},
              {a:'房屋租赁登记备案',b:'126'},
              {a:'房屋租赁登记备案',b:'126'},
              {a:'房屋租赁登记备案',b:'126'}
            ],
            path:'/consultationMost'
          }
        ],
        list:[
          {
            title:"受理量最多的窗口",
            text:[
              {a:"001窗口",b:"122"},
              {a:"001窗口",b:"122"},
              {a:"001窗口",b:"122"},
              {a:"001窗口",b:"122"}
            ],
            path:'/acceptanceMost'

          },
          {
            title:"办件量最多的部门",
            text:[
              {a:"政府",b:"122"},
              {a:"政府",b:"122"},
              {a:"政府",b:"122"},
              {a:"政府",b:"122"}
            ],
            path:'/pieceMost'
          }
        ],
        depart:[]
      }
    },
    mounted(){
      this.getdepart();
    },
    methods: {
      aStyle(index) {
        if (index == 0) {
          return { color: '#ea3587'}
        } else if (index == 1) {
          return { color: '#efc203'}
        }
      },
      bStyle(index) {
        if (index == 0) {
          return { color: '#ea3587'}
        }},
      getdepart(){
        this.$.ajax({ url: "http://10.10.2.11:8037/api/data/topTenByDepartment", success:(res)=>{
            console.log(res);
            this.list[1].text=res.data;
            console.log(this.list[1].text);
          }});
        this.$.ajax({ url: "http://10.10.2.11:8037/api/data/topTenByDepartment", success:(res)=>{
            console.log(res);
            this.list[0].text=res.data;
            console.log(this.list[0].text);
          }});
      }
    }
  }
</script>
<style lang="scss" scoped>
  .container{
    overflow: hidden;
    width: 100%;
    .content{
      width: 100%;
      .boxOne{
        margin-top: 15px;
        width: 96%;
        background-color: #ffffff;
        border-radius: 20px;
        margin-left: 2%;
        padding-bottom: 0.4rem;
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
        }
        .mainOne{
          width:100%;
          display: flex;
          flex-direction: row;
          margin-top: 0.8rem;
          .left{
            width:10%;
            margin-left: 4%;
            display: flex;
            flex-direction: column;
            img{
              height:50px;
              width:50px;
              margin-top: 20px;
            }
          }
          .right{
            width:80.5%;
            margin-left: 2.5%;
            ul{
              list-style: none;
              display: flex;
              flex-direction: row;
              li{
                font-size: 16px;
                color: #1e84e7;
              }
              .text{
                margin-top: 2px;
                position: absolute;
                margin-left: -10%;
                font-size: 28px;
                letter-spacing: 0.5px;
                color: black;
              }
              .num{
                font-size: 36px;
                font-weight: bolder;
                letter-spacing: -1px;
                margin-right: 2%;
                margin-left: 80%;
              }
              .dw{
                color: #a5a5a5;
                font-size: 10px;
                margin-top: 11px;
              }
            }
          }
        }
        .showMore{
          font-size: 2em;
          cursor: pointer;
          color: #1e84e7;
          letter-spacing: 1px;
        }
      }
      .boxTwo{
        margin-top: 10px;
        width: 47%;
        background-color: #ffffff;
        border-radius: 20px;
        margin-left: 2%;
        padding-bottom: 0.6rem;
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
            letter-spacing: 0.5px;
            color:rgb(4,45,16);
            float: left;
            margin-left: 2%;
            font-size: 30px;
          }
        }
        .mainTwo{
          width:100%;
          ul{
            list-style: none;
            display: flex;
            flex-direction: row;
            li{
              font-size: 16px;
              color: #1e84e7;
            }
            .text{
              margin-top: 2px;
              position: absolute;
              margin-left: -7%;
              font-size: 28px;
              letter-spacing: 0.5px;
              color: black;
              color: #1e84e7;
            }
            .num{
              font-size: 34px;
              font-weight: bolder;
              letter-spacing: -1px;
              margin-right: 2%;
              margin-left:60%;
            }
            .dw{
              color: #a5a5a5;
              font-size: 10px;
              margin-top: 11px;
            }
          }
        }
        .showMore{
          font-size: 2em;
          cursor: pointer;
          color: #1e84e7;
          letter-spacing: 1px;
        }
      }
    }
  }
</style>
