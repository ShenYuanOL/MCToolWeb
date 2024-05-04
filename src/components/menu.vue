<template>
    <div class="main">
        <img :src="imglink" alt=""/>
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

