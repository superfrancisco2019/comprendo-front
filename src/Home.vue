<template>
  <div id="home">
    <Logo/>
    <Tagline/>  
    <img id="rocket" src="./images/rocket.svg">
    <div id="frame">
        <div id="buton">
          <button id="create" v-on:click='x'> Créer un nouvel évènement </button>
        </div> 
        <Or/>
        <p> Rejoindre un évènement : </p>
        <form id="form" @submit="checkform" action="" method="post">
          <input type="text" code="code" placeholder="Code (Ex:12345)" id="code" required>
          <button id="check"> ok </button>
        </form>
    </div>
  </div>
</template>

<script>
import Logo from './components/Logo'
import Tagline from './components/Tagline'
import Or from './components/Or'

export default {
  name: 'Home',
  components: {
    Logo,
    Tagline,
    Or
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

body{
  margin:0;
  padding:0
}
#home {
  text-align: center;
  margin-top: 20px;
  font-family:'Roboto';
  min-height:100vh;
  background-color:#68E1FD;
  background-size: cover
}
img{
  width:100%;
  height:100%;
  position:relative
}
p{
  text-align:left;
  margin-left:1.5vh;
  opacity:40%;
  font-size:19px
}
#create{
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
input{
  background-color:#e6e6e6;
  border:none;
  border-radius:10px;
  width:100%;
  font-family:'Roboto'; 
}
#frame{
  border-radius : 20px;
  background-color:white;
  padding:2vh;
  box-shadow: 1px 1px 15px #cccccc;
}
#check{
  background-color:#1ABC9C;
  border-radius:10px;
  border:none;
  width:10vh;
  position:relative;
  right:1.5vh;
}
form{
  display:flex;
  height:8vh;
}


</style>