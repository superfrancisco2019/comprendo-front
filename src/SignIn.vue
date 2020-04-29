<template>
  <div class="sign-in">
    <div class="page-top">
      <Logo/>
      <Tagline/>
    </div>
    <div class="page-content">
      <img class="rocket" src="./images/rocket.svg">
      <div class="form-header">
            <img class="arrow" src="./images/back.png">
            <p> Inscription </p>
      </div>  
      <form id="formulaire" @submit="checkform" action="" method="post">
          <label for="firstname"> Prénom * </label>
          <input type="text" required>
          <label for="lastname"> Nom * </label>
          <input type="text" required>
          <label for="email"> Email * </label>
          <input type="text" required>
          <button id="create-button" v-on:click='x'> Créer mon compte </button>
      </form>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo'
import Tagline from './components/Tagline'

export default {
  name: 'SignIn',
  components: {
    Logo,
    Tagline
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.sign-in{
  min-height:100vh
  }
.page-top{
  display:flex;
  margin-left:5vh
}
.arrow{
  width:4vh;
  height:4vh;
  opacity:40%
}
.rocket{
  position:relative;
  bottom:55vh;
  right:35vh;
  width:130vh
}
</style>