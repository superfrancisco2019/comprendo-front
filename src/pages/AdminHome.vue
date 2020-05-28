<template>
  <div calss="adminHome" :class="{'event-created': theme === 'dashboard', 'no-event': theme === 'default'}">>
    <background :image="manager_img"/>
    <div class="user-profile">
      <p class="name"> François B. 
        <fa icon="user-circle" class='user'/>
      </p>
    </div>
    <p class="default-text"> Vous n'avez pas encore créé d'évènement, cliquez sur le bouton '+' pour commencer l'aventure !</p>
    <fa icon="plus-circle"/>
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

.name{
  font-family:'Roboto';
  position:absolute;
  right:30px;
  top:3vh;
  color:white;
  font-size:20px;
  font-weight:900
}

.default-text{
  font-family:'Roboto';
  position:absolute;
  top:80vh;
  width:calc(100%-500px);
  padding: 0 120px 0 120px;
  font-size:23px;
  font-weight:500;
  opacity:25%;
}

</style>