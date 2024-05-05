<template>
  <div class="head">
    <div></div>
    <Clock class="clock"/>
    <div></div>
  </div>
  <div class="hinder">
    <button @click="main_show=!main_show">^</button>
  </div>
  <div class="main" v-show="main_show">
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
    <Menu imglink="src\assets\Minecraft.png" tool_name="menutest"/>
  </div>
</template>

<script>
import Clock from '../components/Clock.vue'
import Menu from '../components/Menu.vue'

export default {
  data() {
    return {
      main_show: true,
    }
  },
  components: {
    Clock,
    Menu
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
    display: flex;
    width: 100%;
    height: 100vh;
    padding: 25px 10px;
    flex-wrap: wrap;
    background-color: white;
    border: 1px solid black;
    border-radius: 20px 20px 0 0;
  }
}
</style>