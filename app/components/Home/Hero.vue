<template>
  <main
    class="bg-[#FAFAF8] flex flex-col md:flex-row items-center justify-center px-16 py-28 gap-16"
  >
    <!-- hero image -->
    <div>
      <img src="/images/organic-products-hero.png" alt="hero image" class="" />
    </div>

    <!-- hero text -->
    <div class="flex flex-col gap-4 text-center md:text-left">
      <img src="/images/logo-leaf-new.png" alt="basil leaf" class="w-20" />
      <h3 class="text-xl font-serif font-semibold text-gray-800 w-80">
        Best Quality Products
      </h3>
      <h1 class="text-5xl font-serif font-bold leading-snug w-[450px]">
        Join The Organic Movement!
      </h1>
      <p class="text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
        Culpa iure reprehenderit iste molestiae fuga animi!
      </p>
      <NuxtLink :to="'/everything'">
        <button
          class="mt-4 flex items-center justify-center gap-2 bg-[#6A9739] hover:bg-[#7CB342] text-white font-semibold px-6 py-3 rounded shadow transition duration-300 w-fit mx-auto md:mx-0"
        >
          <span class="material-icons">shopping_cart</span>
          SHOP NOW
        </button>
      </NuxtLink>
    </div>
  </main>
</template>
