<template>
  <div class="connexion">
    <div class="page-body">
      <div>
        <background :image="rocket_img"/>
      </div>
      <div id="frame">
        <div class="top-frame">
          <img class="arrow" src="@/assets/images/back.png">
          <p> Connexion </p>
        </div>
        <hr/>
        <form id="form" @submit="checkform" action="" method="post">
          <label for="email"> Email* </label>
          <input type="text" required>
          <label for="password"> Mot de passe* </label>
          <input type="text" required placeholder="********">
          <button id="connect-button" v-on:click='x'> Se connecter </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import background from '../components/background'
import rocket_img from '../assets/images/rocket.svg'

export default {
  name: 'Connexion',
  data: function(){
    return {
      rocket_img: rocket_img
    }
  },
  components: {
    background
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.connexion{
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
.top-frame p{
  font-family:'Roboto'; 
  opacity:40%;
  font-size:28px;
  font-weight:500;
  margin:0;
  padding-left:10vh
}
.arrow{
  width:4vh;
  height:4vh;
  opacity:40%
}
#connect-button{
  width:calc(100%-30px);
  height:40px;
  background-color:#60AEE3;
  border:none;
  color:white;
  font-family:'Roboto';
  font-size:18px;
  border-radius:30px
  }
form{
  font-family:'Roboto';
  display:flex;
  flex-direction:column;
}
input{
  margin-bottom:15px;
  font-size:18px;
  opacity:60%;
  height:40px
}
hr{
  opacity:30%
}
#frame{
  border-radius : 20px;
  background-color:white;
  margin:15px;
  padding:15px;
  box-shadow: 1px 1px 15px #cccccc;
  position:absolute;
  bottom:10px;
  width: calc(100% - 60px);
}
@media (min-width: 765px){
.page-body{
  width:100%;
  display:flex;
  justify-content:space-between;
}
.connexion{
  display: flex;
  align-items: center;
  height:100%
}
#frame{
  width:300px;
  position:unset;
  margin-right:150px
}
}
</style>