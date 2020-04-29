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
img{
  width:200vh;
  height:200vh;
  position:absolute;
  left:-75vh;
  top:-50vh
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
  border-radius:30px
  }

#frame{
  border-radius : 20px;
  background-color:white;
  padding:2vh;
  box-shadow: 1px 1px 15px #cccccc;
  position:absolute;
  top:65vh;
  left:1vh
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