<template>
  <footer class="max-container">
    <div class="flex justify-between items-center gap-20 flex-wrap max-lg:flex-col">
      <div class="flex flex-col items-center">
        <NuxtLink to="/">
          <img 
            :src="footerLogo" 
            alt="footer logo"
            width="150px"
            height="46px"
          />
        </NuxtLink>
        <p class="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footerLogo } from '~/assets/images';
</script>
