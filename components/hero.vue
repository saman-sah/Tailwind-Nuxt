<template>
  <section 
    id="home"
    class="w-full flex xl:flex-row flex-col justify-start min-h-screen gap-10 max-container"
  >
    <div class="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl: padding-x pt-28">
      <p class="text-xl font-montserrat text-coral-red">
        Our Summer Collection
      </p>
      <h1 class="text-8xl  mt-10 font-palanquin max-sm:text-[72px] max-sm:leading-[82px] font-bold">
        <span class="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
          The New Arrival
        </span>
        <br />
        <span class="text-coral-red inline-block mt-3">
          Nike
        </span>
        Shoes
      </h1>
      <p class="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
        Discover Stylish Nike arrivals, quality comfort, and innovation for your active life.
      </p>
      <Button label="Click me!" :iconUrl="arrowRight" />
      <div class="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
        <div v-for="(stat, index) in statistics" :key="index">
          <p class="text-4xl font-palanquin font-bold">
            {{ stat.value }}
          </p>
          <p class="leading-7 font-montserrat text-slate-gray" >
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>

    <div class="relative flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
      <img 
        :src="bigShoeImage" 
        alt="shoe collection"  
        width="610px" 
        height="500px"
        class="object-contain relative z-10"
      />
      <div class="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
        <div v-for="(shoe, index) in shoes" :key="index">
          <SliderShoeCard 
            :imgUrl="shoe"
            :bigShoeImg="bigShoeImage"
            @setBigImage="(img) => bigShoeImage = img"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { bigShoe1 } from '~/assets/images'
import { arrowRight } from '~/assets/icons'
import { statistics, shoes } from '~/utils/constant.js'

const bigShoeImage = ref(bigShoe1)
</script>
