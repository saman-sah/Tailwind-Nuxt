<template>
    <div class="flex flex-1 flex-col w-full max-sm:w-full">
        <img 
          :src="imgUrl" 
          :alt="name"
          class="w-[280px] h-[280px]"
        >
        <div class="mt-8 flex justify-start gap-2.5">
            <img 
              :src="star" 
              alt="rating"
              width="24px"
              height="24px"
            />
            <p class="font-montserrat text-xl leading-normal text-slate-gray">
                (4.5)
            </p>
        </div>
            <h3 class="mt-2 text-2xl  leading-normal font-semibold font-palanquin">
                {{ name }}
            </h3>
            <p class="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">
                {{ price }}
            </p>
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