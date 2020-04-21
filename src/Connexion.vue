<template>
  <div id="connexion">
    <Logo/>
    <Tagline/>
    <div id="frame">
    <p> Connexion </p>
    <hr></hr>
        <form id="form" @submit="checkform" action="" method="post">
          <label for="email"> Email* </label>
          <input type="text" required>
          <label for="email"> Mot de passe* </label>
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

#connect-button{
  width:50vh;
  height:4vh;
  background-color:#60AEE3;
  border:none;
  color:white;
  font-family:'Roboto';
  font-size:18px;
  height:8vh;
  border-radius:20px
  }
form{
  font-family:'Roboto';
  display:flex;
  flex-direction:column;
}
hr{
  margin:4vh;
  opacity:30%
}
p{
  font-family:'Roboto'; 
  opacity:40%;
  font-size:5vh;
  font-weight:500;
  margin:0
}
#frame{
  border-radius : 20px;
  background-color:white;
  padding:2vh;
  box-shadow: 1px 1px 15px #cccccc;
}
label{
  text-align:left;
  opacity:40%;
  font-size:3vh;
  font-family:'Roboto'; 
}
input{
  margin-top:3vh;
  margin-bottom:3vh;
  border:none;
  background-color:#e6e6e6;
  border-radius:10px;
  width:100%;
  height:8vh
}
</style>