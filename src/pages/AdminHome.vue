<template>
  <div class="adminHome" :class="{'event-created': theme === 'dashboard', 'no-event': theme === 'default'}">
    <div class="image"><background :image="manager_img"/></div>
    <p class="default-text"> Vous n'avez pas encore créé d'évènement, cliquez sur le bouton '+' pour commencer l'aventure !</p>
    <fa icon="plus-circle" class="circle"/>
  </div>
</template>

<script>
import background from '../components/background'
import manager_img from '../assets/images/manager.svg'

export default {
  name: 'AdminHome',
  data: function(){
    return {
      manager_img: manager_img,
      theme :'default'
    }
  },
  components: {
    background
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');
.user{
  font-size:30px;
  margin-left:10px
}
.name{
  font-family:'Roboto';
  position:absolute;
  right:30px;
  top:20px;
  color:white;
  font-size:20px;
  font-weight:900;
}
.default-text{
  font-family:'Roboto';
  position:absolute;
  bottom:70px;
  width:calc(100%-500px);
  padding: 0 120px 0 120px;
  font-size:23px;
  font-weight:500;
  opacity:25%;
}
.circle{
  position:absolute;
  bottom:10px;
  right:10px;
  color:#1ABC9C;
  font-size:50px
}
.image{
  width:100px
}
.background{
  background-position:center center;
  width:500px;
  position:fixed
}
</style>