<template>
    <div :class="head_statue">
        <div></div>
        <Clock class="clock" />
        <div></div>
    </div>
    <div class="hinder">
        <button @click="change">^</button>
    </div>
    <div class="main">
        
    </div>
</template>

<script>
import Clock from '../components/Clock.vue'

export default {
  data() {
    return {
      head_statue: 'head_show',
    }
  },
  components: {
    Clock
  },
  methods: {
    change() {
      if (this.head_statue == 'head_show') {
        this.head_statue = 'head_hide'
      } else if (this.head_statue == 'head_hide') {
        this.head_statue = 'head_show'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
body {
    .head_show {
        width: 100%;
        height: 350px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-content: center;
    }

    .head_hide {
        display: none;
    }

    .hinder {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .main {
        width: 100%;
        height: 100vh;
        background-color: white;
        border: 1px solid black;
        border-radius: 20px 20px 0px 0px;
    }
}
</style>