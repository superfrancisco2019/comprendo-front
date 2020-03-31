<template>
  <div id="button">
    <button v-on:click='x'> Créer un nouvel évènement  </button>
    <p> Rejoindre un évènement </p>
    <form id="form" @submit="checkform" action="" method="post">
  </div> 
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style scoped>
  #button{
  width:500px;
  height:400px
  color:black;}
</style>