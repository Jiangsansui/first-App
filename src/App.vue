<template>
  <div id="app">
     <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html,body{
    width: 100%;
    height: 100%;
    background-color: #f0f0f4;

  }
body{

  margin: 0;
  padding: 0;

}

#app {
  font-family:PingFangSC-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 62.5%;

}
</style>
