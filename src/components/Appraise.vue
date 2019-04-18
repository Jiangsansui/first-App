<template>
    <div class="container">
         <div class="top">
            <div class="title1"> 
              <span class="span"></span>
              <p>评价最多的事项</p>
            </div> 
            <div class="first">
                <p>TOP &nbsp; 01 </p>
                <p>房屋租赁登记备案</p>
            </div>
             <div class="first" style="margin-top:0.5rem;">
                 <div class="second">
                   <p>TOP &nbsp; 02 </p>
                   <p>城镇廉租住房房租资格确认</p>
                 </div>
              </div>
             <div class="first" style="margin-top:0.5rem;">
                  <div class="second">
                   <p>TOP &nbsp; 03 </p>
                   <p>住房补贴审批</p>
                  </div>
            </div>
             <div class="first" style="margin-top:0.5rem;">
                  <div class="second">
                   <p>TOP &nbsp; 04 </p>
                   <p>公共租赁住房资格确认(2018)</p>
                  </div>
            </div>
             <div class="first" style="margin-top:0.5rem;">
                  <div class="second">
                    <p>TOP &nbsp; 05 </p>
                    <p>公共租赁住房资格确认(2018)</p>
                  </div>
            </div>
         </div>
         <div class="footer">
             <div class="title2"> 
              <span class="span"></span>
              <p>评价最多的部门</p>
            </div> 
            <div class="title3"> 
             <button>周</button>
             </div> 
              <div class="xhContent">
                 <ul>
                      <li v-for="item in list" :key="item.id">
                           <span class="num">{{item.num}}</span>
                           <span class="dw">{{item.dw}}</span>
                           <span class="main"></span>
                           <span class="name">{{item.name}}</span>
                      </li>
                      </ul>

              </div>
         </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: "0",
          num: "780",
          dw: "条",
          name: "发改"
        },
        {
          id: "1",
          num: "780",
          dw: "条",
          name: "民政"
        },
        {
          id: "2",
          num: "780",
          dw: "条",
          name: "档案"
        },
        {
          id: "3",
          num: "780",
          dw: "条",
          name: "广文新"
        },
        {
          id: "4",
          num: "780",
          dw: "条",
          name: "市场监督"
        },
        {
          id: "5",
          num: "780",
          dw: "条",
          name: "卫计"
        },
        {
          id: "6",
          num: "780",
          dw: "条",
          name: "农业"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 736px;
  background-color: #070a1f;
  position: absolute;
}
.top {
  width: 100%;
  height: 35%;
}
.title1 {
  width: 50%;
  height: 2rem;
  margin-top: -2.5rem;
  position: absolute;
}

.span {
  display: block;
  height: 1.2rem;
  width: 4px;
  background-color: rgb(25, 91, 214);
  margin-top: 0.4rem;
  margin-left: 0.8rem;
}
p {
  position: absolute;
  margin-left: 2rem;
  margin-top: -1rem;
  color: white;
  font-size: 0.8rem;
  font-family: "Times New Roman", Times, serif;
}
.first {
  width: 94%;
  height: 2.5rem;
  margin-top: 3rem;
  margin-left: 3%;
  background-color: #333442;
  opacity: 0.7;
}
.first p {
  margin-top: 0.6rem;
  margin-left: 2%;
  font-size: 1.1rem;
  color: rgb(226, 187, 13);
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
.first p:last-child {
  margin-top: 0.9rem;
  margin-left: 22%;
  font-size: 0.1rem;
  font-family: "Courier New", Courier, monospace;
}
.second p {
  color: aqua;
}
.footer {
  width: 100%;
  height: 60%;
}
.title2 {
  width: 50%;
  height: 2rem;
  margin-top: -0.01rem;
  position: absolute;
}
.title3 {
  width: 50%;
  height: 2rem;
  margin-top: -0.1rem;
  margin-left: 12.2rem;
}

button {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background-color: rgb(25, 91, 214);
  color: white;
  font-size: 0.1rem;
  position: absolute;
  margin-top: 0.3rem;
}

/* 循环 */
.xhContent {
  width: 94%;
  height: 87%;
  margin-left: 3%;
  margin-top: 1rem;
}
.xhContent ul li {
  float: left;
  height: 18rem;
  width: 6%;
  margin-left: 10.5%;
  background-color: rgba(148, 143, 143, 0.63);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}
.xhContent ul li:first-child {
  margin-left: -10%;
}
.num,
.dw,
.name {
  font-size: 1em;
  color: rgb(248, 245, 245);
  position: absolute;
  margin-top: 3rem;
  margin-left: 0;
}
.dw {
  color: rgb(156, 158, 158);
  font-size: 1em;
  margin-left: 0.25rem;
  position: absolute;
  margin-top: 4rem;
}
.main {
  /* display: inline-block; */
  height: 70%;
  width: 100%;
  margin-left: 0rem;
  margin-top: 5.4rem;
  background-color: yellow;
  border-radius: 30px;
  /* padding-bottom: 0; */
}
.name {
  flex-direction: column-reverse;
  font-size: 0.4rem;
  margin-top: 18.5rem;
  position: absolute;
  width: 0.8rem;
  margin-left: 0.4rem;
  color: rgb(156, 158, 158);
  font-family: "Courier New", Courier, monospace;
}
</style>

