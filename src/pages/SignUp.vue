<template>
  <div class="sign-up">
    <background :image="rocket_img"/>
    <div class="sign-up-frame">
      <div class="form-header">
          <img class="arrow" src="@/assets/images/back.png">
          <p> Inscription </p>
      </div>  
      <hr>
      <form id="formulaire" @submit="checkform" action="" method="post">
        <div class="left-align">
          <label for="firstname"> Prénom * </label>
          <input type="text" required>
          <label for="lastname"> Nom * </label>
          <input type="text" required>
          <label for="email"> Email * </label>
          <input type="text" required>
          <p class="accept"> J'accepte les <span class ="cgu"> CGU* </span> </p>
          <div class="input-container">
            <label class="switch">
            <input name="is_test" type="checkbox" ng-model="event.is_test">
            <span class="switch-slider is-round"></span>
            </label>
            <label for="is-test">
            </label>
          </div>
        </div>
          <div class="create-button-container">
            <button class="create-button" v-on:click='x'> Créer mon compte </button>
          </div>
      </form>
    </div>
  </div>
</template>

<script>
import background from '../components/background'
import rocket_img from '../assets/images/rocket.svg'

export default {
  name: 'SignUp',
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

body{
  margin:0;
  padding:0
}
.sign-up{
  text-align: center;
  padding-top: 20px;
  font-family:'Roboto';
  min-height:100vh;
  background-color:#DBF8FF;
  background-size: cover;
  box-sizing: border-box;
}
.sign-up p{

}
.page-top{
  display:flex;
}
.sign-up-frame{
  border-radius : 20px;
  background-color:white;
  margin:20px;
  padding:30px;
  box-shadow: 1px 1px 15px #cccccc;
  width:40vh;
  position:relative;
  top:12vh;
  left:25vh
}
.form-header{
  display:flex
}
.arrow{
  width:4vh;
  height:4vh;
  opacity:40%;
}
form{
  margin-top:30px
}
.left-align{
  text-align:left
}
label{
  font-size:27px;
}
input{
  height:80px;
  opacity:70%;
  margin-bottom:20px;
  margin-top:20px;
  border-radius:15px
}
.accept{
  font-size:25px;
  opacity:35%;
}
.cgu{
  text-decoration:underline
}
.switch {
  position: relative;
  display: inline-block;
  width: 100px;
  height: 50px;
  margin-bottom: 0;
  }
.field label.switch {
  display: inline-block;
}
.field .switch+label{
  line-height: 24px;
  display:inline-block;
  margin-bottom: 0;
}
.switch.is-large {
  height: 34px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.switch-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.switch-slider:before {
  position: absolute;
  content: "";
  height: 40px;
  width: 40px;
  left: 3px;
  bottom: 5px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
.switch.is-large .switch-slider:before {
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
}

input:checked + .switch-slider {
  background-color: #2196F3;
}
input:focus + .switch-slider {
  box-shadow: 0 0 1px #2196F3;
}
input:checked + .switch-slider:before {
  -webkit-transform: translateX(52px);
  -ms-transform: translateX(52px);
  transform: translateX(52px);
}
  /* Rounded sliders */
.switch-slider.is-round {
  border-radius: 34px;
}
.switch-slider.is-round:before {
  border-radius: 50%;
}
.create-button{
  width:36vh;
  height:4vh;
  background-color:#60AEE3;
  border:none;
  color:white;
  font-family:'Roboto';
  font-size:27px;
  height:6.5vh;
  border-radius:40px;
  margin-top:30px;
  float:center
}
</style>