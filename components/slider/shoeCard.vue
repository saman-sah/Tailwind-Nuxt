<template>
    <div 
        :class="[
            bigShoeImg === imgUrl ? 'border-coral-red' : 'border-transparent'
        ],
         'cursor-pointer max-sm:flex-1'"        
         @click="handleClick()"
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
        dsdsdsd
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
    changeBigShoeImg: {
        type: Function,
        default: () => {}
    }
})
console.log('props', props);
function handleClick() {
console.log('hanle click');
}
</script>