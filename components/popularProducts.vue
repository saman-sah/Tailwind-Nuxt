<template>
  <section 
    id="products" 
    class="max-container max-sm:mt-12"
  >
    <div class="flex flex-col justify-start gap-5">
      <h2 class="text-4xl font-palanquin font-bold">
        <span class="text-coral-red">Popular</span> Products
      </h2>
      <p class="lg:max-w-lg mt-2 font-montserrat text-slate-gray">

      </p>
    </div>
    <div class="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
      <div v-for="(product, index) in products" :key>
        <PopularProductsItem 
          :name  ="product.name"
          :price ="product.price"
          :imgUrl="product.imgUrl" 
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { products } from '~/utils/constant'
</script>
