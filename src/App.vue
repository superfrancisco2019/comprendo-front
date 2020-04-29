<template>
  <div id="app">
    <brand/>
    <router-view></router-view>
  </div>
</template>

<script>
import brand from './components/brand'

export default {
  name: 'App',
  components: {
    brand
  }
}
</script>

<style>
  #app{
    text-align:center
  }

  html, body {
    margin: 0;
  }

  label{
    text-align:left;
    opacity:40%;
    font-size:20px;
    font-family:'Roboto'; 
  }

  input{
    background-color:#e6e6e6;
    border:none;
    border-radius:10px;
    width:100%;
    font-family:'Roboto'; 
    margin-top:5px;
    margin-bottom:5px;
    height:50px;
    padding-left: 10px;
    box-sizing: border-box;
  }

</style>
