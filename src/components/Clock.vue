<template>
    <div class="clock">
        <div class="time">
            <div class="hour">{{hour}}</div>
            <div>:</div>
            <div class="minute">{{minute}}</div>
            <div>:</div>
            <div class="second">{{second}}</div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      hour: '',
      minute: '',
      second: ''
    }
  },
  mounted() {
    setInterval(() => {
      let date = new Date();
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
      this.hour = this.hour < 10 ? '0' + this.hour : this.hour;
      this.minute = this.minute < 10 ? '0' + this.minute : this.minute;
      this.second = this.second < 10 ? '0' + this.second : this.second;
    }, 10);
  }
}
</script>

<style lang="scss" scoped>
.clock {
    .time {
        display: grid;
        grid-template-columns: 3fr 1fr 3fr 1fr 3fr;
        grid-gap: 10px;
        font-size: 50px;
        color: black;

        div {
            text-align: center;
            font-weight: 700;
        }
    }
}
</style>