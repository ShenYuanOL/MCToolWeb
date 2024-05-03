<template>
    <div class="head">
        <div></div>
        <Clock class="clock" />
        <div></div>
    </div>
    <div class="main">
    
    </div>
</template>

<script>
import Clock from '../components/Clock.vue'

export default {
  components: {
    Clock
  },
}
</script>

<style lang="scss" scoped>
* {
    position: relative;
    .head {
        background-image: linear-gradient(rgba(255, 255, 255), rgb(181, 255, 187));
        width: 100%;
        height: 350px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-content: center;
    }

    .main {
        position: absolute;
        top: 35%;
        z-index: 1;
        width: 100%;
        height: 100vh;
        background-color: white;
        border: 1px solid black;
        border-radius: 20px 20px 0px 0px;
    }
}
</style>