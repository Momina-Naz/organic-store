<template>
  <main
    class="felx flex-col justify-around items-center my-auto bg-black text-white"
  >
    <!-- top section -->
    <div
      class="flex flex-col md:flex-row items-center md:justify-around border-b border-gray-600 py-16"
    >
      <div class="flex flex-col gap-12 text-lg w-[220px]">
        <img
          src="/images/organic-store-white-logo.png"
          alt="logo"
          class="w-[180px]"
        />
        <p class="font-bold italic">
          Maecenas mi justo, interdum at consectetur vel, tristique et arcu.
        </p>
      </div>
      <!-- list 1 -->
      <ul class="font-medium flex flex-col md:mt-0 mt-5">
        <li class="text-xl font-bold font-serif mb-4">Websites of us</li>
        <NuxtLink to="/about" class="text-gray-400 hover:text-white"
          >About</NuxtLink
        >
        <NuxtLink to="/everything" class="text-gray-400 hover:text-white"
          >Everything</NuxtLink
        >
        <NuxtLink to="/groceries" class="text-gray-400 hover:text-white"
          >Groceries</NuxtLink
        >
        <NuxtLink to="/juice" class="text-gray-400 hover:text-white"
          >Juice</NuxtLink
        >
        <NuxtLink to="/contact" class="text-gray-400 hover:text-white"
          >Contact</NuxtLink
        >
      </ul>
      <!-- second list -->
      <ul class="font-medium flex flex-col md:mt-0 mt-5 mb-6">
        <li class="text-xl font-bold font-serif mb-4">Quick Links</li>
        <NuxtLink to="/about" class="text-gray-400 hover:text-white"
          >Know More About Us</NuxtLink
        >
        <NuxtLink to="/about" class="text-gray-400 hover:text-white"
          >Visit Store</NuxtLink
        >
        <NuxtLink to="/about" class="text-gray-400 hover:text-white"
          >Let's Connect</NuxtLink
        >
        <NuxtLink to="/about" class="text-gray-400 hover:text-white"
          >Locate Store</NuxtLink
        >
      </ul>
      <!-- Third list -->
      <ul class="font-medium flex flex-col md:mt-0 mt-5 mb-6">
        <li class="text-xl font-bold font-serif mb-4">Site Links</li>
        <NuxtLink to="/about" class="text-gray-400 hover:text-white"
          >Know More About Us</NuxtLink
        >
        <NuxtLink to="/about" class="text-gray-400 hover:text-white"
          >Visit Store</NuxtLink
        >
        <NuxtLink to="/about" class="text-gray-400 hover:text-white"
          >Let's Connect</NuxtLink
        >
        <NuxtLink to="/about" class="text-gray-400 hover:text-white"
          >Locate Store</NuxtLink
        >
      </ul>
    </div>
    <!-- bottom section -->

    <div class="flex justify-center text-white py-10">
      <p>Copyright © {{ currentYear }} | Organic Store</p>
    </div>
  </main>
</template>
<!-- js -->
<script setup>
const currentYear = new Date().getFullYear();
</script>