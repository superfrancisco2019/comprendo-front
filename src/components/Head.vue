<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>   
  </div>
</template>

<script>
export default {
  name: 'Head',
  data () {
    return {
      msg: 'Comprendo',
      text: "L'important n'est pas de participer, mais de comprendre"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Pacifico');
h1 {
  font-weight: normal;
  color:#60AEE3;
  font-family:'Pacifico';
}
h2 {
  font-family:'Roboto';
  opacity:16%;
  font-size:17px;
}


</style>
