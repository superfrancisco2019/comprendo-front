<template>
  <div class="or"> 
    <span>{{ msg }}</span>
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
.or{
  position: relative;
  margin: 10px 0px;
  opacity:60%
}
.or::before {
  content: "";
  position: absolute;
  top: 8px;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.1);
  height: 1px;
  
  z-index: 1;
}
.or span{
  position:relative;
  display: inline-block;
  background-color:white;
  z-index: 2;
  padding: 0px 10px;
}

</style>
