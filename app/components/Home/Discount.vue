<template>
  <main class="flex flex-col">
    <div
      class="bg-black flex flex-col md:flex-row justify-center items-center md:justify-around text-white py-12 px-2"
    >
      <h1 class="text-4xl font-bold font-serif">
        Get 25% Off On Your First Purchase!
      </h1>
      <NuxtLink :to="`/everything`">
        <button
          class="mt-4 flex items-center justify-center gap-2 bg-[#6A9739] hover:bg-[#7CB342] text-white font-semibold px-6 py-3 rounded shadow transition duration-300 w-fit mx-auto md:mx-0"
        >
          <span class="material-icons">shopping_cart</span>
          SHOP NOW
        </button>
      </NuxtLink>
    </div>
    <div class="bg-[#F8F6F3] text-gray-800 text-center py-8">
      <h1 class="text-2xl font-bold font-serif">
        Try It For Free. No Registration Needed.
      </h1>
    </div>
  </main>
</template>