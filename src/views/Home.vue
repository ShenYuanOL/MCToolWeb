<template>
  <div class="head">
    <div></div>
    <Clock class="clock" />
    <div></div>
  </div>
  <div class="hinder">
    <button @click="main_show=!main_show">^</button>
  </div>
  <div class="main" v-show="main_show">
    <div class="left">
      <Left/>
    </div>
    <div class="center">
      <Center/>
    </div>
    <div class="right">
      <Right/>
    </div>
  </div>
</template>

<script>
import Clock from '../components/Clock.vue'
import Left from '../components/Left.vue'
import Center from '../components/Center.vue'
import Right from '../components/Right.vue'

export default {
  name: 'Home',
  data() {
    return {
      main_show: true,
    }
  },
  components: {
    Clock,
    Left,
    Center,
    Right
  }
}
</script>

<style lang="scss" scoped>
body {

  .head {
    width: 100%;
    height: 350px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-content: center;
  }


  .hinder {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .main {
    width: 100%;
    height: 100vh;
    padding: 25px 10px;
    // background-color: white;
    border: 1px solid black;
    border-radius: 20px 20px 0 0;
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;

    div{
      border: 1px solid black;
    }
  }
}
</style>