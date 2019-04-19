<template>
    <div class="container">
        <div class="title">
          <el-select class="select" v-model="value" placeholder="请选择">
               <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
               </el-option>
           </el-select>
          <p>A001号</p>
          <p>当前办理</p>

         </div>
         <div class="first">
           <div class="span"></div>
           <p>取号量</p>
         </div>
      <div class="picture">


      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
     options: [{
          value: '选项0',
          label: '①窗口'
        }, {
          value: '选项1',
          label: '②窗口'
        }, {
          value: '选项2',
          label: '③窗口'
        }, {
          value: '选项3',
          label: '④窗口'
        }],
        value: '选项0'
    }
  }
};
</script>

<style>
.container {
  width: 100%;
  height: 736px;
  background-color: #070a1f;
  position: absolute;
}
.title {

  position: absolute;
  width: 100%;
  height: 70px;
  background-color: #333442;
  opacity: 0.7;
}
.select{
  position: absolute;
  left: 5px;
  top:15px;
  width: 140px;
}
.title p{
 margin-left: 18rem;
  margin-top: 0.5rem;
  /*margin-left: 20rem;*/
  color: white;
  font-size: 1.5rem;
}
.title p:last-child{
  font-size: 0.5rem;
  margin-top: -1rem;
  font-family: "Times New Roman", Times, serif;
  margin-left:20rem;
}
.span {
  margin-top: 5rem;
  height: 1.2rem;
  width: 4px;
  background-color: rgb(25, 91, 214);
  margin-left: 0.8rem;
}
.first p {
  position: absolute;
  margin-left: 2rem;
  margin-top: -1rem;
  color: white;
  font-size: 0.8rem;
  font-family: "Times New Roman", Times, serif;
}
.picture{
    width: 100%;
    height: 270px;
    margin-top: 5rem;
    border: 1px solid yellow;
    position: relative;
    /*border: none;*/
  }

</style>
