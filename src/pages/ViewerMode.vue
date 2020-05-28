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
   <img class="illustration" src="@/assets/images/meeting.jpeg">
   <p class="title"> "Comment sortir de prison en deux étapes simples" </p>
   <div class="duration">
    <fa class='clock' icon="clock" /> 
    <p class="time"> Durée de l'évènement: </p>
   </div>
   <img class="dog" src="@/assets/images/beagle.svg">
   <p class="comment-bubble"> Clique sur le chien si tu n'as pas compris ce que Patrick vient de dire ! </p>
  </div>
</template>

<script>


export default {
  name: 'ViewerMode',
  components: {
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.viewermode{
  font-family:'Roboto';
  min-height:100vh
}
.bull{
  opacity:40%;
  padding:5px;
  padding-top:8px
}

.frame{
  position:absolute;
  top:12vh;
  display:flex;
  justify-content:space-around;
  position:relative;
  z-index:2
}
#name-bubble{
  background-color:white;
  border-radius:30px;
  display:flex;
  padding:2px 5px 2px 5px
}
.user{
  opacity:40%;
  padding:5px;
  padding-top:8px
}
#number-bubble{
  background-color:white;
  border-radius:30px;
  display:flex;
  padding:2px 5px 2px 5px
}
.name{
  font-family:'Roboto';
  opacity:40%;
  font-size:18px;
  font-weight:bold;
  margin:5px;
  padding-top:3px
}
.number{
  font-family:'Roboto';
  opacity:40%;
  font-size:18px;
  font-weight:bold;
  margin:5px
}
.illustration{
  border-radius:30px;
  position:relative;
  top:8vh;
  z-index:1
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
  justify-content:space-around
}
.clock{
  opacity:40%
}
.time{
  font-size:3.5vh;
  opacity:40%;
  margin:0
}
.dog{
  width:20vh
}
.comment-bubble {
	position: relative;
	background: #60AEE3;
	border-radius: 10px;
  color:white;
  font-size:20px;
  padding:11px;
  font-family:'Roboto';
  font-weight:600;
  margin: 13px
}
.comment-bubble:after {
	content: '';
	position: absolute;
	top: 5px;
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
