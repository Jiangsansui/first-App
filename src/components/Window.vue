<template>
    <div class="container">
      <div class="content">
        <div class="boxOne">
<div class="head">
<img src="./../assets/down.png">
<span>办理次数最多得事项情况</span>
</div>
          <div class="main">
            <div class="text">
              <img src="../assets/logo1.png">
              <span class="title">房屋租赁登记备案</span>
              <span class="num">123</span>
              <span>条</span>
            </div>
          </div>
          <div class="main">
            <div class="text">
              <img src="../assets/logo2.png">
              <span class="title">房屋租赁登记备案</span>
              <span class="num">123</span>
              <span>条</span>
            </div>
          </div>
          <div class="main">
            <div class="text">
              <img src="../assets/logo3.png">
              <span class="title">房屋租赁登记备案/房屋租赁登记备案/房屋租赁登记备案</span>
              <span class="num">123</span>
              <span>条</span>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .content{
    width: 100%;
    .boxOne{
      margin-top: 10px;
      width: 98%;
      margin-left: 1%;
      background-color: #ffffff;
      border-radius: 20px;
         .head{
          width: 100%;
          height: 80px;
            img{
              float: left;
              margin-left: 3%;
              padding-top: 25px;
              }
             span{
              line-height:80px;
              float: left;
              margin-left: 3%;
              font-size: 35px;
              }
           }
         .main{
            width: 100%;
            height: 80px;
            .text{
              img{
                float: left;
                margin-left: 3%;
                width: 50px;
                margin-top:15px
                }
  span{
    line-height:80px;
  }
  .title{

    font-size: 24px;
    color:rgb(4,5,16);
    display: flex;
    flex-wrap: wrap;
  }
.num{
  font-size: 36px;
  color:rgb(210,0,255);
  font-weight: bolder;

}
  span:last-child{
    font-size: 20px;
    color:rgb(167,167,167);

  }
}
      }
    }
  }
}

</style>
