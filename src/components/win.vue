<template>
  <div class="container">
    <div class="content">
<!--      办理次数最多得窗口-->
      <div class="boxOne">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">办理次数最多的窗口</span>
        </div>
        <div class="main">
          <div class="imgLogo">
            <img v-for="item in info" :src="item.img">
          </div>
          <div class="conText">
            <ul v-for="(item,index) in list" :key="index" v-if="index < 3">
              <li class="text">{{item.name}}</li>
              <li class="num" :style="aStyle(index)">{{item.num}}</li>
              <li class="dw" :style="aStyle(index)" >条</li>
            </ul>
          </div>
        </div>
        <span class="showMore" >查看更多></span>
      </div>
<!--      办理次数最多得事项情况-->
      <div class="boxOne">
        <div class="head">
          <img src="../assets/down.png">
          <span class="text">办理次数最多的事项情况</span>
        </div>
        <div class="main">
          <div class="imgLogo">
            <img v-for="item in inOne" :src="item.img" >
          </div>
          <div class="conText">
            <ul v-for="(item,index) in listOne" :key="index" v-if="index < 4">
              <li class="text">{{item.name}}</li>
              <li class="num" :style="aStyle(index)">{{item.num}}</li>
              <li class="dw" :style="aStyle(index)">条</li>
            </ul>
          </div>
        </div>
        <span class="showMore">查看更多></span>
      </div>
      <div class="boxMain">
<!--        受理量最多得窗口-->
        <div class="box">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">受理量最多的窗口</span>
          </div>
          <div class="main">
            <div class="conText">
              <ul v-for="(item,index) in listTwo" :key="index" v-if="index < 4">
                <li class="text" :style="cStyle(index)">{{item.name | ellipsis}}</li>
                <li class="num" :style="cStyle(index)">{{item.value}}</li>
                <li class="dw">件</li>
              </ul>
            </div>
          </div>
          <span class="showMore" style=" position: absolute;margin-left: -18%" @click="$router.push('acceptanceMost')">查看更多></span>
        </div>
<!--        办件量最多的部门-->
        <div class="box" style="margin-left: 2%">
          <div class="head">
            <img src="../assets/down.png">
            <span class="text">办件量最多的部门</span>
          </div>
          <div class="main">
            <div class="conText">
              <ul v-for="(item,index) in listThree" :key="index" v-if="index < 4">
                <li class="text" :style="cStyle(index)">{{item.name }}</li>
                <li class="num" :style="cStyle(index)">{{item.count}}</li>
                <li class="dw">件</li>
              </ul>
            </div>
          </div>
          <span class="showMore" style=" position: absolute;margin-left: -18%" @click="$router.push('pieceMost')">查看更多></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "win",
    filters: {
      ellipsis (value) {
        if (!value) return ''
        if (value.length > 6) {
          return value.slice(0,6) + '...'
        }
        return value
      }
    },
    data(){
      return{
        info: [
          {img: require('../assets/logo1.png')},
          {img: require('../assets/logo2.png')},
          {img: require('../assets/logo3.png')}],
        list: [
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'}],
        inOne: [
          {img: require('../assets/logo1.png')},
          {img: require('../assets/logo2.png')},
          {img: require('../assets/logo3.png')},
          {img: require('../assets/logo4.png')}],
        listOne: [
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'},
          {name: '房屋租赁登记备案', num: '123'}],
        listTwo:[],
        listThree:[]
      }
    },
    mounted(){
      this.getMatter();
      this.getdepart();
      this.$('#lctjc3>.el-progress__text').css('color','#1e84e7');
      console.log(this.$(".container").height(),"container")
      this.$(".content").css("height",this.$(".container").height()+"px")
      console.log(this.$(".container").height(),"content")
      console.log(this.$(".boxOne").height(),"boxOne")
      console.log(this.$(".boxOne:nth-child(2)").height(),".boxOne:nth-child(2)")
      this.$(".boxMain").css("height",this.$(".content").height()-this.$(".boxOne")-this.$(".boxOne:nth-child(2)").height()+"px")
      console.log(this.$(".boxMain").height(),".boxMain")
      this.$(".box").css("height",this.$(".boxMain").height()+"px")
      console.log(this.$(".box").height(),".box")

    },
    methods: {
      aStyle(index) {
        if (index == 0) {return { color: '#ea3587'}}
        else if (index == 1) {return { color: '#efc203'}}
      },
      cStyle(index) {if (index == 0) {return { color: '#ea3587'}}
      },
      // 受理量最多的窗口
      getMatter(){
        this.$.ajax({ url: 'http://10.10.2.11:8037/api/data/topTenByMatter', success:(res)=>{
            console.log(res);
            this. listTwo=res.data;
            console.log(this.listTwo);
          }});
      },
      // 办件量最多的部门
      getdepart(){
        this.$.ajax({ url: "http://10.10.2.11:8037/api/data/topTenByDepartment", success:(res)=>{
            console.log(res);
            this. listThree=res.data;
            console.log(this.listThree);
          }});
      },
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    overflow: hidden;
    width: 100%;
    .content {
      overflow: hidden;
      width: 100%;
      .boxOne:nth-child(1){
        height: 30%;
      }
      .boxOne {
        margin-top: 15px;
        width: 96%;
        height: 35%;
        background-color: #ffffff;
        border-radius: 20px;
        margin-left: 2%;
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
        .main{
          width: 100%;
          display: flex;
          flex-direction:row;
          .imgLogo{
            display: flex;
            flex-direction: column;
            width: 14%;
            img{
              margin-left: 30%;
              margin-top: 30px;
              width: 50px;
            }
          }
          .conText{
            width: 86%;
            position: relative;
            ul{
              height: 50px;
              margin-top: 30px;
              list-style: none;
              display: flex;
              flex-direction: row;
              li{
                line-height: 50px;
                font-size: 16px;
                color: #1e84e7;
              }
              .text{
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
                margin-left: 70%;
              }
            }
          }
        }
        .dw{
          line-height: 40px;
        }
        .showMore{
          font-size: 2em;
          cursor: pointer;
          color: #1e84e7;
          letter-spacing: 1px;
          text-align: center;
        }
      }
      .boxMain{
        height:30% ;
        display: flex;
        flex-direction: row;
        width: 96%;
        margin-left: 2%;
        margin-top: 15px;
        .box{
          padding-bottom: 1%;
          position: relative;
          background-color: #ffffff;
          border-radius: 20px;
          width: 49%;
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
          .main{
            height: 70%;
            width: 100%;
            display: flex;
            position: relative;
            flex-direction:row;
            .conText{
              width: 100%;
              position: relative;
              ul{
                padding-inline-start: 0;
                list-style: none;
                display: flex;
                flex-direction: row;
                li{
                  line-height: 40px;
                  font-size: 16px;
                  color: #1e84e7;
                }
                .text{
                  margin-left: 6%;
                  position: absolute;
                  font-size: 24px;
                  color: black;
                  color: #1e84e7;
                }
                .num{
                  font-size: 34px;
                  font-weight: bolder;
                  margin-right: 2%;
                  margin-left:75%;
                }
                .dw{
                  color: #a5a5a5;
                  font-size: 10px;
                }
              }
            }
          }
          .showMore{
            font-size: 2em;
            color: #1e84e7;
            letter-spacing: 1px;
            text-align: center;
          }
        }
      }
    }
  }
</style>
