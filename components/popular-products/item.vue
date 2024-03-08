<template>
    <div class="flex flex-1 flex-col w-full max-sm:w-full">
        <img :src="imgUrl" alt="">
    </div>
</template>

<script setup>
defineProps({
    name: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        default: ''
    },
    imgUrl: {
        type: String,
        default: ''
    }
})
</script>