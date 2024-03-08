<template>
  <section class="max-container flex justify-center flex-wrap gap-9">
    <div v-for="(service, index) in services" :key="index">
      {{ service.label }}
    </div>
  </section>
</template>

<script setup>
import { services } from '~/utils/constant'
</script>
