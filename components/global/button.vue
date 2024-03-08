<template>
  <button :class="[
      textColor,borderColor,backgroundColor,fontFamily,textSize,
      'flex justify-center items-center gap-2 px-7 py-4 border leading-none rounded-full'
    ]"
  >    
    {{ label }}
    <img 
      v-if="iconUrl"
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
  },
  textColor: {
    type: String,
    default: 'text-white'
  },
  borderColor: {
    type: String,
    default: 'border-coral-red'
  },
  backgroundColor: {
    type: String,
    default: 'bg-coral-red'
  },
  fontFamily: {
    type: String,
    default: 'font-montserrat'
  },
  textSize: {
    type: String,
    default: 'text-lg'
  }
})
</script>
