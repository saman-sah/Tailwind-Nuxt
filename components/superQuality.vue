<template>
  <section 
    id="about-us"
    class="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
  >
  <div class="flec flex-1 flex-col">
      <h2 class="text-4xl capitalize mt-10 font-palanquin font-bold lg:max-w-lg">
        We Provide You
        <br />
        <span class="text-coral-red inline-block mt-3">
          Super
        </span>
        <span class="text-coral-red inline-block mt-3">
          Quality
        </span>
        Shoes
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
      </p>
      <p className='mt-6 lg:max-w-lg info-text'>
        Our dedication to detail and excellence ensures your satisfaction
      </p>
      <div className='mt-11'>
        <Button label='View details' />
      </div>
  </div>

  <div class="flex-1 flex justify-center items-center">
    <img 
      :src="shoe8" 
      alt="shoe8" 
      width="500px"
      height="522px"
      class="object-contain"
    >
  </div>

</section>
</template>

<script setup>
import { shoe8 } from '~/assets/images'
</script>
