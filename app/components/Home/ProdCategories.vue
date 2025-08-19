<template>
  <div class="bg-[#F8F6F3] py-6">
    <img src="/images/basil-leaf.png" alt="basil-leaf" class="h-14 mx-auto" />
    <div
      class="text-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <!-- category cards -->
      <div class="relative grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        <!-- card -->
        <div
          v-for="data in Data"
          :key="data.id"
          class="bg-white flex flex-col gap-3 items-start p-8 shadow hover:shadow-md transition rounded-md"
        >
          <h1 class="text-2xl font-bold font-serif mb-2">{{ data.name }}</h1>
          <p class="mb-4 text-left text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            saepe.
          </p>
          <NuxtLink :to="'/allproducts'">
            <button
              class="z-10 mt-auto flex items-center justify-center gap-2 bg-[#6A9739] hover:bg-[#7CB342] text-white font-semibold px-6 py-3 rounded shadow transition duration-300 w-fit"
            >
              SHOP NOW
              <span class="material-icons">arrow_right</span>
            </button>
          </NuxtLink>

          <!-- image positioned absolutely -->
          <div class="ms-32">
            <img
              :src="data.img"
              :alt="data.alt"
              class="h-40 object-contain pointer-events-none"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const Data = [
  {
    id: 1,
    name: "Farm Fresh Fruits",

    img: "/images/Lemons.png",
    alt: "lemon",
  },
  {
    id: 2,
    name: "Fresh Vegetables",

    img: "/images/cabbage.png",
    alt: "Fresh Vegetables",
  },
  {
    id: 3,
    name: "Organic Legume",

    img: "/images/chickpeas.png",
    alt: "Organic Legume",
  },
];
</script>