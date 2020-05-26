<template>
  <div id="home">
    <background :image="rocket_img"/>
    <div id="frame">
        <div id="buton">
          <button id="create" v-on:click='x'> Créer un nouvel évènement </button>
        </div> 
        <Or/>
        <p> Rejoindre un évènement : </p>
        <form id="form" @submit="checkform" action="" method="post">
          <input type="text" code="code" placeholder="Code (Ex:12345)" id="code" required>
          <button id="check"> 
            <fa icon="check" />  
          </button>
        </form>
    </div>
  </div>
</template>
<script>

import Or from '../components/Or'
import background from '../components/background'
import rocket_img from '../assets/images/rocket.svg'

export default {
  name: 'Home',
  data: function(){
    return {
      rocket_img: rocket_img
    }
  },
  components: {
    Or,
    background
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
  padding-top: 20px;
  font-family:'Roboto';
  min-height:100vh;
  background-color:#DBF8FF;
  background-size: cover;
  box-sizing: border-box;
}
p{
  text-align:left;
  margin-left:25px;
  opacity:40%;
  font-size:19px;
  margin-top:0;
  margin-bottom:10px
}
#create{
  width:90%;
  height:10%;
  background-color:#60AEE3;
  border:none;
  color:white;
  font-family:'Roboto';
  font-size:21px;
  height:60px;
  border-radius:30px;
  margin-top:20px;
}
#frame{
  border-radius:20px;
  background-color:white;
  box-shadow: 1px 1px 15px #cccccc;
  position:absolute;
  bottom:10px;
  width: calc(100% - 30px);
  margin:15px
}
#check{
  background-color:#1ABC9C;
  border-radius:10px;
  border:none;
  position:relative;
  bottom:-5px;
  right:20px;
  height:55px;
  width:60px;
}
form{
  display:flex;
  padding-left:20px;
  padding-bottom:20px;
}
input{
  height:55px;
  font-size:18px;
  padding-left:20px;
  opacity:80%;
  padding-bottom:5px
}
@media (min-width: 765px){
  #frame{
    width:30%;
    position:absolute;
    right:50px;
    bottom:120px
  }
}
</style>