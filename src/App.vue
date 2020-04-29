<template>
  <div id="app">
    <Home/>
    <Connexion/>
    <ViewerMode/>
    <SignIn/>
  </div>
</template>

<script>
import Home from './Home'
import Connexion from './Connexion'
import ViewerMode from './ViewerMode'
import SignIn from './SignIn'

export default {
  name: 'App',
  components: {
    Home,
    Connexion,
    ViewerMode,
    SignIn
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
</style>
