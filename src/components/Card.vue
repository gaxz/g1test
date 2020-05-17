<template>
  <div class="preview-main">
    <div class="preview-inner">
      <h4 class="title">
        {{title}}
      </h4>
      <div class="content">
        {{content}}
      </div>
    </div>
    
    <b-button variant="primary" @click="$emit('showModal', {title: title, content: content})">View</b-button>
  </div>
</template>

<script>
/**
 * Represents single preview item in a list
 */
export default {
  name: 'Card',
  props: {
      title: String,
      content: String
  }
}
</script>

<style scoped>
.preview-main {
  height: 100%;
}
.preview-inner {
  min-height: 160px;
}

.content {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

.title {
    overflow: hidden;
    text-overflow: clip;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>