<template>
  <section class="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
    <div class="flex-1">
      <img 
        :src="offer" 
        alt="" 
        width="773" 
        height="687px"
        class="object-contain w-full"
      >
    </div>
    <div class="flec flex-1 flex-col">
      <h2 class="text-4xl capitalize mt-10 font-palanquin font-bold lg:max-w-lg">
        <span class="text-coral-red inline-block mt-3">
          Special
        </span>
        Offer
      </h2>
      <p class='mt-4 info-text'>
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
      </p>
      <p class='mt-6 info-text'>
        Navigate a realm of possibilities designed to fulfill your unique
        desires, surpassing the loftiest expectations. Your journey with us is
        nothing short of exceptional.
      </p>
      <div class='mt-11 flex flex-wrap gap-4'>
        <Button 
          label='Shop now' 
          :iconURL="arrowRight" 
        />
        <Button
          label='Learn more'
          textColor="text-slate-gray"
          borderColor="border-slate-gray"
          backgroundColor="bg-white"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { offer } from '~/assets/images'
import { arrowRight } from "~/assets/icons";
</script>
