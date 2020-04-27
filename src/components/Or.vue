<template>
  <div class="hello">
    <hr>
    <h1>{{ msg }}</h1>  
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
  font-size:20px;
  font-family:roboto;
  opacity:20%;
  position:absolute;
  left:25vh;
  top:108vh;
  background-color:white;
  z-index:1
}
hr{
  color:#00000;

}
.hello{
  flex-direction:row
}
</style>
