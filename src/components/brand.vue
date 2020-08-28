<template>
  <div class="brand" :class="{'is-light': theme === 'light', 'is-dark': theme === 'dark'}">
    <h1 >Comprendo</h1>
    <h2 v-show="theme !== 'dark'">L'important n'est pas de participer, mais de comprendre.</h2> 
    <div class="header" v-show="theme !== 'light'"><h3 class="name"> François B.</h3> <fa icon="user-circle" class='user'/></div>
  </div>
</template>

<script>
export default {
  name: 'brand',
  data () {
    return {
      theme: "light"
    }
  },
  mounted: function(){
    this.update();
  },
  methods: {
    update: function(){
      this.theme = this.$route.path.indexOf('/user/') > -1 ? "dark" : "light"
    }
  },
  watch:{
    $route(){
        this.update(); 
      }
  }, 
  props: []
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import url('https://fonts.googleapis.com/css?family=Pacifico');

.brand {
  position: absolute;
  width: 100%;
  height: 130px;
}

.brand.is-light {
  background-color: white;
}
.brand.is-dark {
  background-color: #60AEE3;
}
h1 {
  font-weight: normal;
  color:#60AEE3;
  font-family:'Pacifico';
  margin:0;
  padding:0
}
.header{
  display:flex;
  justify-content:center;
  align-items:center;
  color:white;
}
h2 {
  font-family:'Roboto';
  opacity:16%;
  font-size:20px;
  padding-right:4vh;
  padding-left:4vh
}
.brand.is-dark h1{
  color:white;
}
.brand.is-light h1{
  color:#60AEE3;
}
.user{
  font-size:35px;
  margin-left:5px;
}
@media (min-width: 765px){
h1 {
  position:absolute;
  left: 30px;
  top:20px;
}
h2{
  position:absolute;
  right:30px;
  top:20px;
  width:500px;
  padding:0
}
.header{
  display:flex;
  align-items:center;
  position:absolute;
  right:30px;
  top:20px;
  color:white;
}
.header h3{
  margin-right:10px
}
}
</style>
