<template>
  <div id="app">
    <Home/>
    <Connexion/>
    <ViewerMode/>
  </div>
</template>

<script>
import Home from './Home'
import Connexion from './Connexion'
import ViewerMode from './ViewerMode'


export default {
  name: 'App',
  components: {
    Home,
    Connexion,
    ViewerMode
  }
}
</script>

<style scoped>
#app{
  text-align:center
}


</style>
