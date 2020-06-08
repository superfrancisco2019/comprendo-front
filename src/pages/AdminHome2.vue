<template>
  <div class="adminHome2">
    <carousel-3d>
        <slide :index="0">
            <img src="@/assets/images/meeting.jpeg">
        </slide>
        <slide :index="1">
            Slide 2
        </slide>
    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'AdminHome2',

  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto');


img{
  width:100%;
  height:100%
}

</style>