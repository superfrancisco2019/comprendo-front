<template>
  <div class="hello">
    <h2>{{ text }}</h2>   
  </div>
</template>

<script>
export default {
  name: 'Tagline',
  data () {
    return {
      text: "L'important n'est pas de participer, mais de comprendre."
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');

h2 {
  font-family:'Roboto';
  opacity:16%;
  font-size:20px;
  padding-right:4vh;
  padding-left:4vh
}

</style>