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
        <div class="flex items-center gap-5 mt-8">
          <div
            class="flex justify-center items-center w-12 h-12 bg-white rounded-full"
            v-for="(icon, index) in socialMedia" 
            :key="index"
          >            
            <img 
              :src="icon.src" 
              :alt="icon.alt"
              width="24px"
              height="24px"
            >
          </div>
        </div>
      </div>

      <div class="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        <div v-for="(item, index) in footerLinks" :key="index">
          <h4 class="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
            {{ item.title }}
          </h4>
          <ul>
            <li
              class="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
              v-for="(link, i) in item.links" 
              :key="i"
            >
              <nuxt-link :to="link.to">{{ link.label }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
      <div class="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
        <img 
          :src="copyrightSign" 
          alt="copy right sign"
          width="20px"
          height="20px"
          class="rounded-full m-0"
        >
        <p>
          Copyright. all rights reserved
        </p>
        <p class="font-montserrat cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { footerLogo } from '~/assets/images'
import { copyrightSign } from '~/assets/icons'
import { footerLinks, socialMedia } from '~/utils/constant'
</script>
