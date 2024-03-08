<template>
  <main class="relative">

    <HeaderNav />
    
    <section class="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    
    <section class="padding">
      <PopularProducts />
    </section>
    
    <section class="padding">
      <SuperQuality />
    </section>
    
    <section class="padding-x py-10">
      <Services />
    </section>
    
    <section class="padding">
      <SpecialOffers />
    </section>
    
    <section class="padding bg-pale-blue">
      <CustomerReviews />
    </section>
    
    <section class="padding-x sm:py-32 py-16 w-full">
      <FooterSubscribe />
    </section>
    
    <section class="bg-black padding-x padding-t pb-8 text-white">
      <Footer />
    </section>
    
  </main>
</template>

<script setup>
useHead({
  title: 'nike'
})
</script>