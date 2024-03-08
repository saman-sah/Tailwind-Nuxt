<template>
  <section class="max-container flex justify-center flex-wrap gap-9">
    <div v-for="(service, index) in services" :key="index">
      <ServicesItem 
        :imgURL="service.imgURL"
        :label="service.label"
        :subtext="service.subtext"
      />
    </div>
  </section>
</template>

<script setup>
import { services } from '~/utils/constant'
</script>
