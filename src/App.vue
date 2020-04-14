<template>
  <div id="app">
    <Head/>
    <div id="buton">
      <button v-on:click='x'> Créer un nouvel évènement </button>
    </div> 
    <Or/>
    <p> Rejoindre un évènement : </p>
    <form id="form" @submit="checkform" action="" method="post">
      <input type="text" code="code" placeholder="Code (Ex:12345)" id="code" required>
    </form>
  </div>
</template>

<script>
import Head from './components/Head'
import Or from './components/Or'

export default {
  name: 'App',
  components: {
    Head,
    Or
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 30px;
}
p{
  text-align:left;
  margin-left:1.5vh;
  opacity:40%;
  font-size:19px
}
button{
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
.form{
  background-color:red
}


</style>
