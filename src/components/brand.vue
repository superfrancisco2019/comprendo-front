<template>
  <div class="brand" :class="{'is-light': theme === 'light', 'is-dark': theme === 'dark'}">
    <h1 >Comprendo</h1>
    <h2 v-show="theme !== 'dark'">L'important n'est pas de participer, mais de comprendre.</h2>  
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
@media (min-width: 765px){
  h1 {
    position:absolute;
    right:57vh;
    top:2vh
  }
  h2{
    position:absolute;
    left:24vh;
    top:2.5vh;
    width:50vh;
    padding:0
  }
}
</style>
