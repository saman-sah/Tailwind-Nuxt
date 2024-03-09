<template>
  <section 
    id="contact-us"
    class="max-container flex justify-between items-center max-xl:flex-col gap-10"
  >
    <h3 class="text-4xl leading-[68px] font-palanquin font-bold">
      Sign Up form 
      <span class="text-coral-red">
        Updates
      </span>
      & Newsletter
    </h3>

    <div class="xl:max-w-[40%] lg:max-w-[50%]  max-lg:w-full w-full flex items-center max-sm:flex-col gap-5 p-2.5 border border-slate-gray rounded-full">
      <input 
        type="text"
        placeholder="subscribe@nike.com"
        class="input"
      >
        <div class="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label="Sign Up"
            fullWidth
          />
        </div>
    </div>
  </section>
</template>

<script setup>
</script>
