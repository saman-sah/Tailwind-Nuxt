<template>
  <section class="max-container">
    <h3 class="font-palanquin text-center text-4xl font-bold">
      What Our
      <span class="text-coral-red">
        Customers
      </span>
      Says?      
    </h3>
    <p class="info-text m-auto mt-4 max-w-lg text-center">
      Hear genuine stories from our satisfied customers about their
      exceptional experiences with us.
    </p>

    <div class="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
      <div v-for="(review, index) in reviews" :key="index">
        <ReviewsItem
          :imgURL="review.imgURL"
          :customerName="review.customerName"
          :rating="review.rating"
          :feedback="review.feedback"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { reviews } from '~/utils/constant'
</script>
