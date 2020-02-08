<template>
  <div id="app">
    <ul class="nav">
      <router-link to="/" tag="li" exact>home</router-link>
      <li>
        <router-link to="/document" active-class="inline-active">document</router-link>
      </li>
      <router-link to="/about" tag="li" event="mouseover">about</router-link>
    </ul>
    <router-view name="slide" />
    <router-view class="center" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      index: '/home'
    }
  }
}
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

ul {
  background-color: #eee;
  height: 50px;
  padding-left: 50px;
  line-height: 50px;
}

li {
  list-style: none;
  float: left;
  padding: 0px 15px;
  font-size: 18px;
}

li:hover {
  cursor: pointer;
}

.router-link-active,
.is-active {
  background-color: #fff;
}

.center {
  font-size: 25px;
  text-align: center;
  padding: 20px 0;
}
</style>
