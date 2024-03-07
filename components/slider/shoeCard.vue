<template>
    <div 
        :class="[
            bigShoeImg === imgUrl.bigShoe ? ' border-coral-red' : 'border-transparent' ,
            'cursor-pointer max-sm:flex-1 border-2 rounded-xl'
        ]"        
         @click="handleClick(imgUrl.bigShoe)"
    > 

        <div class="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
            <img 
                :src="imgUrl.thumbnail" 
                alt="shoe collection"
                width="127px"
                height="103px"
                class="object-contain"
            >
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    imgUrl: {
        type: Object,
        default: {}
    },
    bigShoeImg: {
        type: String,
        default: ''
    },
})
const emit = defineEmits([
    'setBigImage'
])
function handleClick(img) {
    emit('setBigImage', img)
}
</script>