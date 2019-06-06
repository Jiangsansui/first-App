<template>
  <div class="container">
    <div class="content">
      <div class="main">
          <div class="left">
            <ul>
              <li :class="tabs == 1 ? 'act' : ''" style="margin-left: -5%" @click="tabs=1">一层</li>
              <li :class="tabs == 2 ? 'act' : ''" style="margin-left: 5%" @click="tabs=2">二层</li>
              <li :class="tabs == 3 ? 'act' : ''" style="margin-left: 5%" @click="tabs=3">三层</li>
            </ul>
          </div>

        <img v-if="tabs==1" src="../assets/firstfloor.png">
        <img v-if="tabs==2" src="../assets/secondfloor.png">
        <img v-if="tabs==3" src="../assets/thirdfloor.png">
          <div class="text">视图说明</div>
        <div class="express">
          <ul>
            <li v-for="item in list">{{item.name}}</li>

          </ul>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
    export default {
        name: "lcsy",
      data(){
        return {
          tabs:1,
list:[
  {name:'1 咨询（红色事项）'},
  {name:'2 投资项目综合1'},
  {name:'3 投资项目综合2'},
  {name:'4 商事登记综合'},
  {name:'5 税务综合1'},
  {name:'6 税务综合2'},
  {name:'7 公安'},
  {name:'8 交警'},
  {name:'9 个人代收'},
  {name:'10 水电气综合'},
  {name:'11 环保'},
  {name:'12 不动产登记综合'},
  {name:'13 综合行政执法'},
  {name:'14 其他事务综合'},
  {name:'15 台州湾集聚区'},
  {name:'16 特色小镇'},

]
        }
      },

    }
</script>

<style lang="scss" scoped>

  .container{
    overflow: hidden;
    width: 100%;
    .content {
      width: 100%;
      .main{
        width: 96%;
        background-color: #ffffff;
        margin-top: 10px;
        margin-left: 2%;
        border-radius: 20px;
        padding-bottom: 180px;
        .left{
          width: 100%;
          padding-top: 10px;
          ul{
            width: 100%;
            list-style: none;
            display: flex;
            flex-direction: row;
            li{
              font-size: 24px;
              color: #000;
              margin-top: 15px;
              border-radius: 19px;
              width: 13%;
              height: 40px;

            }
            .act{

              color: #ffffff;
              background-color: #329aff;
            }
          }
        }
         img{
          width:100%;

        }
        .text{
          width: 30%;
          font-weight: bolder;
          color: #1e84e7;
          font-size: 30px;
          margin-left: 1%;
        }
        .express{
          width: 100%;
          ul{
            list-style: none;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
          li{

            padding-top: 25px;
            display: inline-block;
            text-align: left;
            width: 34%;
            font-size: 22px;
            font-family: Arial;
            letter-spacing: 0.5px;
          }
          li:nth-of-type(1),
          li:nth-of-type(2),
          li:nth-of-type(3){
            margin-top: 20px;
          }
          li:nth-of-type(1),
          li:nth-of-type(4),
          li:nth-of-type(7),
          li:nth-of-type(10),
          li:nth-of-type(13),
          li:nth-of-type(16){
            margin-left: -2%;
          }
        }
      }
    }

    @media screen and (min-height: 736px) {
        .main{
              padding-bottom:210px !important;
          }
    }
    @media screen and (min-height: 812px) {
      .main{
        padding-bottom:470px !important;
      }
    }
  }

</style>
