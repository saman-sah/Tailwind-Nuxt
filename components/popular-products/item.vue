<template>
    <div class="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
          :src="imgUrl" 
          :alt="name"
          class="w-[280px] h-[280px]"
        >
        <div class="mt-8 flex justify-center gap-2.5">
            <img 
              :src="star" 
              alt="rating"
              width="24px"
              height="24px"
            />
        </div>
    </div>
</template>

<script setup>
import { star } from '~/assets/icons'
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