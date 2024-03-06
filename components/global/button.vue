<template>
  <button class="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
    {{ label }}
    <img 
    :src="iconUrl" 
    class="ml-2 rounded-full w-5 h-5"
    alt=""
    />
  </button>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    defult: 'Submit'
  },
  iconUrl: {
    type: String,
    default: ''
  }
})
</script>
