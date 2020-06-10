<template>
  <div id="viewermode">
    <div class="frame"> 
      <div id="name-bubble"> 
        <fa class="bull" icon="bullhorn" /> 
        <p class ="name">Patrick Balkany </p>
      </div> 
      <div id="number-bubble">
        <fa class="user" icon="user" /> 
        <p class="number"> 52 </p>
      </div> 
    </div>
    <div class="illustration"><background :image="meeting_img"/></div>
    <p class="title"> "Comment sortir de prison en deux étapes simples" </p>
    <div class="duration">
      <fa class='clock' icon="clock" /> 
      <p class="time"> Durée de l'évènement : </p>
    </div>
    <button class="dog-button"> <img class="dog" src="@/assets/images/beagle.svg"> </button>
    <div class="bubble-container">
      <p class="comment-bubble"> Clique sur le chien si tu n'as pas compris ce que Patrick vient de dire ! </p>
    </div>
  </div>
</template>

<script>

import background from '../components/background'
import meeting_img from '../assets/images/meeting.jpeg'

export default {
  name: 'ViewerMode',

  data: function(){
    return {
      meeting_img: meeting_img
    }
  },
  components: {
    background
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.viewermode{
  min-height:100vh;
  width:100%;
  max-width:300px
}
.bull{
  opacity:40%;
  padding-left:5px;
  padding-right:5px
}
.frame{
  top:12vh;
  display:flex;
  justify-content:center;
  position:relative;
  z-index:2;
}
#name-bubble{
  background-color:white;
  border-radius:30px;
  display:flex;
  padding:2px 5px 2px 5px;
  margin-right:65px;
  align-items:center
}
.name{
  opacity:40%;
  font-size:18px;
  font-weight:bold;
  margin:5px;
  padding-top:3px
}
.user{
  opacity:40%;
  padding:5px;
}
#number-bubble{
  background-color:white;
  border-radius:30px;
  display:flex;
  padding:2px 5px 2px 5px;
  align-items:center
}
.number{
  opacity:40%;
  font-size:18px;
  font-weight:bold;
  margin:5px
}
.illustration{
  display:flex;
  justify-content:center
}
.background{
  border-radius:30px;
  position:relative;
  z-index:1;
  width:300px;
  height:200px;
  background-size: cover;
  top:40px
}
.title{
  font-size:23px;
  margin-top: 11vh;
  margin-left:6vh;
  margin-right:6vh;
  font-weight:bold;
  font-family:'Roboto';
  opacity:65%
}
.duration{
  display:flex;
  justify-content:center
}
.clock{
  opacity:40%
}
.time{
  font-size:3.5vh;
  opacity:40%;
  margin:0
}
.dog-button{
  border:none;
  background-color:white;

}
.dog{
  width:20vh
}
.bubble-container{
  display:flex;
  justify-content:center
}
.comment-bubble {
	position: relative;
	background: #60AEE3;
	border-radius: 10px;
  color:white;
  font-size:20px;
  padding:11px;
  font-weight:600;
  margin: 13px;
}
.comment-bubble:after {
	content: '';
	position: absolute;
	top: 6px;
	left: 50%;
	width: 0;
	height: 0;
	border: 15px solid transparent;
	border-bottom-color: #60AEE3;
	border-top: 0;
	margin-left: -20px;
	margin-top: -20px;
}
</style>
