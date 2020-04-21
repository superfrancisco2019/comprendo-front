<template>
  <div class="hello">
    <h1>{{ msg }}</h1>  
  </div>
</template>

<script>
export default {
  name: 'Logo',
  data () {
    return {
      msg: 'Comprendo',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Pacifico');
h1 {
  font-weight: normal;
  color:#60AEE3;
  font-family:'Pacifico';
}
</style>
