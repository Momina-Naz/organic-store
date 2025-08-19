<template>
  <div class="bg-[#FDFDFC] py-6">
    <div
      class="text-center mx-auto max-w-2xl px-4 pt-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-4xl font-bold font-serif tracking-tight text-gray-800">
        Customers Reviews
      </h2>
      <div class="flex justify-center my-7">
        <img src="/images/logo-leaf-new.png" alt="leaf" />
      </div>
      <!-- category cards -->
      <div class="relative grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <!-- card1 -->
        <div
          class="flex flex-col items-center gap-4 bg-[#FDFDFC] shadow-md p-12"
        >
          <div class="flex justify-center text-gray-600">
            <span class="material-icons text-yellow-500">star</span>
            <span class="material-icons text-yellow-500">star</span>
            <span class="material-icons text-yellow-500">star</span>
            <span class="material-icons text-yellow-500">star</span>
            <span class="material-icons text-yellow-500">star</span>
          </div>
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div class="flex gap-3 items-center justify-center">
            <img src="/images/client02-free-img.png" alt="client1" />
            <p>Mila Kunis</p>
          </div>
        </div>
        <!-- card2 -->
        <div
          class="flex flex-col items-center gap-4 bg-[#FDFDFC] text-white shadow-md p-12 bg-[url('/images/bg.jpg')] bg-no-repeat bg-contain bg-center opacity-77"
        >
          <h1 class="text-4xl font-bold font-serif">
            Deal Of The Day 15% Off On All Vegetables!
          </h1>
          <p>I am text block. Click edit button to change this tex em ips.</p>
          <NuxtLink :to="'/allproducts'">
            <button
              class="z-10 mt-auto flex items-center justify-center gap-2 bg-[#6A9739] hover:bg-[#7CB342] text-white font-semibold px-6 py-3 rounded shadow transition duration-300 w-fit"
            >
              SHOP NOW
              <span class="material-icons">arrow_right</span>
            </button>
          </NuxtLink>
        </div>
        <!-- card3 -->

        <div
          class="flex flex-col items-center gap-4 bg-[#FDFDFC] shadow-md p-12"
        >
          <div class="flex justify-center text-gray-600">
            <span class="material-icons text-yellow-500">star</span>
            <span class="material-icons text-yellow-500">star</span>
            <span class="material-icons text-yellow-500">star</span>
            <span class="material-icons text-yellow-500">star</span>
            <span class="material-icons text-yellow-500">star</span>
          </div>
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
          <div class="flex gap-3 items-center justify-center">
            <img src="/images/client01-free-img.png" alt="client1" />
            <p>Mila Kunis</p>
          </div>
        </div>
      </div>
      <!-- Featured Brands -->

      <div class="flex flex-col gap-4 md:flex-row md:gap-16 items-center py-16">
        <h1 class="text-xl font-bold font-serif">Featured Brands:</h1>
        <img src="/images/logoipsum-215.svg" alt="brand logo" />
        <img src="/images/logoipsum-215.svg" alt="brand logo" />
        <img src="/images/logoipsum-215.svg" alt="brand logo" />
        <img src="/images/logoipsum-215.svg" alt="brand logo" />
        <img src="/images/logoipsum-215.svg" alt="brand logo" />
      </div>
    </div>
  </div>
</template>