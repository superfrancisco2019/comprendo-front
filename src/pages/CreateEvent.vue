<template>
  <div id="create-event">
    <background :image="brainstorm_img"/>
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
import background from '../components/background'

import brainstorm_img from '../assets/images/brainstorm.svg'

export default {
  name: 'CreateEvent',
  data: function(){
    return {
      brainstorm_img: brainstorm_img
    }
  },
  components: {
    background
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');


</style>