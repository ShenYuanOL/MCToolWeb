<template>
    <div class="main">
        <img :src="imglink"/>
        <p>{{tool_name}}</p>
    </div>
</template>

<script>
defineProps({
  imglinkk: {
    type: String,
    required: true
  },
  tool_name: {
    type: String,
    required: true
  }
})
</script>

