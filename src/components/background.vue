<template>
    <div class="background" :style="'background-image: url('+image+');'">
    </div>
</template>

<script>
export default {
    props: ['image']
}
</script>

<style scoped>
    .background {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
    }
    @media (min-width: 765px){
        .background {
            position:relative;
            background-position:left
        }
    }
</style>