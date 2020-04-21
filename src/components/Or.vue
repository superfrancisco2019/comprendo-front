<template>
  <div class="hello">
    <hr>
    <h1>{{ msg }}</h1>  
    <hr>
  </div>
</template>

<script>
export default {
  name: 'Or',
  data () {
    return {
      msg: 'OU',
    }
  }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');
h1{
  font-weight: normal;
  color:#00000;
  font-size:3vh;
  font-family:roboto;
  opacity:20%
}
hr{
color:#00000;

}
.hello{
  flex-direction:row
}
</style>
