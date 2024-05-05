<template>
  <div class="menuitem">
    <img :src="imglink" alt="" />
    <p>{{tool_name}}</p>
  </div>
</template>

<script>
export default {
  props: {
    imglink: {
      type: String,
      required: true
    },
    tool_name: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menuitem {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;
  }

  p {
    font-size: 14px;
    color: #333;
    margin-top: 10px;
  }

}
</style>

