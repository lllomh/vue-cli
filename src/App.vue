<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>我是src/app.vue的h1</h1>
    <router-link to="/">点击进入hello首页</router-link>
    <br>
    <router-link to="/hello1">点击进入hello1</router-link>
    <br>
    <router-link to="/hello2">点击进入hello2</router-link>
    <br>
    <router-link to="/h">点击进入不存在的路径</router-link>
    <br>
    <!--<router-link to="/demo">点击进入demo</router-link>-->
    <!--<router-link to="/demo2">点击进入demo2</router-link>-->
    <router-view></router-view>
    <p> 我是App.vue中的p， gettersMsg 的值是 {{gettersMsg}}</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
export default {
  name: 'app',
  computed:{...mapGetters(['gettersMsg'])}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
