<template>
    <div class="modal-main">
        <h1>{{title}}</h1>
        <div>{{content}}</div>
    </div>
</template>

<script>
export default {
    name: 'CardModal',
    props: {
        title: String,
        content: String,
    },
}
</script>

<style scoped>
.modal-main {
    padding: 30px;
    height: 100%;
}
</style>