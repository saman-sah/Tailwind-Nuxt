<template>
  <header class="padding-x py-8 absolute z-10 w-full">
    <nav class="flex justify-between items-center max-container">

      <NuxtLink to="/">
        <img :src="headerLogo" alt="" width="130px" height="29px">
      </NuxtLink>

      <ul class="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        <li v-for="(item, index) in NAV_LINKS" :key="index">
          <NuxtLink 
          :to="item.to"
          class="font-montserrat leading-normal text-lg text-slate-gray"
          >
            {{ item.label }}
          </NuxtLink>
        </li>
      </ul>

      <div class="hidden max-lg:block">
        <img :src="hamburger" alt="" width="25px" height="25px">
      </div>

    </nav>
  </header>
</template>

<script setup>
import { hamburger } from 'assets/icons/index'
import { headerLogo } from 'assets/images/index'
import { NAV_LINKS } from '~/utils/constant';

</script>