<template>
  <div id="connexion">
    <Logo/>
    <Tagline/>
    <img id="rocket" src="./images/rocket.svg">
    <div id="frame">
    <div class="top-frame">
      <img class="arrow" src="./images/back.png">
      <p> Connexion </p>
    </div>
    <hr></hr>
        <form id="form" @submit="checkform" action="" method="post">
          <label for="email"> Email* </label>
          <input type="text" required>
          <label for="password"> Mot de passe* </label>
          <input type="text" required placeholder="********">
          <button id="connect-button" v-on:click='x'> Se connecter </button>
        </form>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo'
import Tagline from './components/Tagline'

export default {
  name: 'Connexion',
  components: {
    Logo,
    Tagline
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

#connexion{
  text-align: center;
  padding-top: 20px;
  font-family:'Roboto';
  min-height:100vh;
  background-color:#DBF8FF;
  background-size: cover;
  box-sizing: border-box;
}
.top-frame{
  display:flex
}
.arrow{
  width:4vh;
  height:4vh;
  opacity:40%
}
#rocket{
  width:200vh;
  height:200vh;
  position:relative;
  left:-75vh;
  top:-70vh
}
#connect-button{
  width:50vh;
  height:4vh;
  background-color:#60AEE3;
  border:none;
  color:white;
  font-family:'Roboto';
  font-size:18px;
  height:8vh;
  border-radius:30px
  }
form{
  font-family:'Roboto';
  display:flex;
  flex-direction:column;
}
hr{
  
  opacity:30%
}
p{
  font-family:'Roboto'; 
  opacity:40%;
  font-size:28px;
  font-weight:500;
  margin:0;
  padding-left:10vh
}
#frame{
  border-radius : 20px;
  background-color:white;
  padding:2vh;
  box-shadow: 1px 1px 15px #cccccc;
  position:relative;
  top:-174vh;
 
}
label{
  text-align:left;
  opacity:40%;
  font-size:20px;
  font-family:'Roboto'; 
}
input{
  margin-top:2vh;
  margin-bottom:2vh;
  border:none;
  background-color:#e6e6e6;
  border-radius:10px;
  width:100%;
  height:8vh
}
</style>