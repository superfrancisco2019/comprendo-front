<template>
  <div class="adminHome2">
    <div class="statistics-container">
      <div class="statistics-cards">
        <img src="@/assets/images/manager.svg">
        <div class="events-container">  
          <p class="statistics-title"> Evènements </p>
          <p> 9 </p>
      </div>
      </div>
      <div class="statistics-cards">
        <img src="@/assets/images/user_profile.svg">
        <div class="events-container">  
          <p class="statistics-title"> Evènements </p>
          <p> 9 </p>
        </div>
      </div>
      <div class="statistics-cards">
        <img src="@/assets/images/heart_face.svg">
        <div class="events-container">  
          <p class="statistics-title"> Evènements </p>
          <p> 9 </p>
        </div>
      </div>
      <div class="statistics-cards">
        <img src="@/assets/images/waiting.svg">
        <div class="events-container">  
          <p class="statistics-title"> Evènements </p>
          <p> 9 </p>
        </div>
      </div>
    </div>
    <div class="carousel-container">
      <carousel-3d>
          <slide :index="0">
              <img class='carousel-img' src="@/assets/images/meeting.jpeg">
          </slide>
          <slide :index="1">
              Slide 2
          </slide>
      </carousel-3d>
      <div class="event-title-container"> 
        <p class="event-title"> "Comment sortir de prison en deux étapes simpes"</p> 
        <fa icon="plus-circle" class="circle"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'AdminHome2',

  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

.statistics-container{
  width:100%;
  padding-top:150px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.statistics-cards{
  width:20%;
  display:flex;
  box-shadow: 1px 1px 15px #cccccc;
  border-radius:20px;
  padding:7px;
  align-items:center;
  margin: 0px 10px;
}
.statistics-cards img{
  width:8vw;
  height:12vh
}
.events-container{
  display:flex;
  flex-direction:column;
  box-shadow:none;
  font-size:12px;
  flex-grow: 1;
  text-align: center;
}
.events-container p{
  margin:1px;
  font-weight:700
}
.statistics-title{
  color:#1ABC9C;
}
.carousel-img{
  width:100%;
  height:100%
}
.carousel-3d-slide{
  border-radius:30px;
  box-shadow: 1px 1px 15px #cccccc;
  border:none
}
.carousel-3d-slide.current{
  
}
.event-title-container{
  display:flex;
  justify-content:center;
  align-items:center;
}
.event-title{
  opacity:60%;
  margin-top:10px;
  flex-grow:1;
  margin-left:80px
}
.circle{
  color:#1ABC9C;
  font-size:50px;
  margin-right:20px
}
@media (max-width: 1001px){
.adminHome2{
  display:grid;
  grid-template-columns:200px 200px;
  grid-template-rows:500px 500px 
}
}
</style>