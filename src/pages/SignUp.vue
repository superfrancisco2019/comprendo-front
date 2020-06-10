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
  font-family:'Roboto';
  min-height:100vh;
  background-color:#DBF8FF;
  background-size: cover;
  box-sizing: border-box;
}
.page-top{
  display:flex;
}
.sign-up-frame{
  border-radius:20px;
  background-color:white;
  padding:15px;
  box-shadow: 1px 1px 15px #cccccc;
  width: calc(100% - 60px);
  margin:15px;
  position:absolute;
  bottom:10px;
  
}
.form-header{
  display:flex;
  flex-direction:row;
  align-items: center;
}
hr{
  margin:0;
  opacity:30%
}
.arrow{
  width:20px;
  height:15px;
  opacity:30%;
}
.form-header p{
  opacity:30%;
  font-size:20px;
  flex-grow: 1;
  margin-right: 20px;
  font-weight:bold
}
form{
  margin-top:15px
}
.left-align{
  text-align:left
}
label{
  font-size:15px;
}
input{
  height:40px;
  opacity:70%;
  margin-bottom:10px;
  margin-top:6px;
  border-radius:10px
}
.accept{
  font-size:15px;
  opacity:35%;
}
.cgu{
  text-decoration:underline
}
.switch {
  position: relative;
  display: inline-block;
  width: 55px;
  height: 30px;
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
  height: 20px;
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
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 5px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
.switch.is-large .switch-slider:before {
  height: 20px;
  width: 20px;
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
  -webkit-transform: translateX(27px);
  -ms-transform: translateX(27px);
  transform: translateX(27px);
}
  /* Rounded sliders */
.switch-slider.is-round {
  border-radius: 34px;
}
.switch-slider.is-round:before {
  border-radius: 50%;
}
.create-button{
  width:250px;
  height:40px;
  background-color:#60AEE3;
  border:none;
  color:white;
  font-family:'Roboto';
  font-size:21px;
  border-radius:40px;
  margin-top:20px;
}
@media (min-width: 765px){
.sign-up-frame{
  right:80px;
  width:300px;
  margin:0
}
}
</style>