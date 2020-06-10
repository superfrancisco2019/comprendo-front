<template>
  <div class="adminHome2">
  <div class="frame">
    <div class="events">
      <img src="@/assets/images/manager.svg">
      <div class="events-container">  
        <h2> Evènements </h2>
        <h3> 9 </h3>
      </div>
    </div>
    <div class="participants">
      <img src="@/assets/images/user_profile.svg">
      <div class="events-container">  
        <h2> Evènements </h2>
        <h3> 9 </h3>
      </div>
    </div>
    <div class="comprehension">
      <img src="@/assets/images/heart_face.svg">
      <div class="events-container">  
        <h2> Evènements </h2>
        <h3> 9 </h3>
      </div>
    </div>
    <div class="time">
      <img src="@/assets/images/waiting.svg">
      <div class="events-container">  
        <h2> Evènements </h2>
        <h3> 9 </h3>
      </div>
    </div>
  </div>
    <carousel-3d>
        <slide :index="0">
            <img class='carousel-img' src="@/assets/images/meeting.jpeg">
        </slide>
        <slide :index="1">
            Slide 2
        </slide>
    </carousel-3d>
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

.frame{
  width:100%;
  padding-top:150px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.frame>div{
  width:20%;
  display:flex;
  box-shadow: 1px 1px 15px #cccccc;
  border-radius:20px;
  padding:7px;
  align-items:center;
  margin: 0px 10px;
}
.frame div img{
  width:8vw;
  height:12vh
}
.frame div div{
  display:flex;
  flex-direction:column;
  box-shadow:none;
  font-size:10px;
  flex-grow: 1;
  text-align: center;
}
.frame div div h2{
  margin:0
}
.frame div div h3{
  margin:0
}



.carousel-img{
  width:100%;
  height:100%
}
.carousel-3d-slide{
  border-radius:30px
}
</style>