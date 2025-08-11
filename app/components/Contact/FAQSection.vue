

<template>
  <div class="bg-white py-6">
    <div
      class="text-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-4xl font-bold font-serif tracking-tight text-gray-800">
        Frequently Asked Question!
      </h2>
      <div class="flex justify-center my-7">
        <img src="/images/logo-leaf-new.png" alt="leaf" />
      </div>
      <div class="flex gap-5">
        <div class="flex flex-col gap-8"><FAQ /><FAQ /><FAQ /></div>
        <div class="flex flex-col gap-8"><FAQ /><FAQ /><FAQ /></div>
      </div>
    </div>
  </div>
</template>
<script setup >
import FAQ from "~/components/Contact/FAQ.vue";
</script>