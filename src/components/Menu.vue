<template>
  <div class="menu-item">
    <img :src="img_link" alt="" />
    <p>{{tool_name}}</p>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    img_link: {
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
.menu-item {
  border: 1px solid #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 20%;
    border-radius: 10%;
  }

  p {
    font-size: 14px;
    color: #333;
    margin-top: 10px;
  }

}
</style>

