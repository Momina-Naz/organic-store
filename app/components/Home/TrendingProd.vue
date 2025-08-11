<template>
  <div class="bg-white py-6">
    <div
      class="text-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-4xl font-bold font-serif tracking-tight text-gray-800">
        Trending
      </h2>
      <div class="flex justify-center my-7">
        <img src="/images/logo-leaf-new.png" alt="leaf" />
      </div>
      <!-- product cards -->

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.id"
          class="group relative"
        >
          <NuxtLink :to="`/product/${product.linkName}`">
            <img
              :src="product.img"
              :alt="product.alt"
              class="aspect-square w-full rounded-md bg-gray-200 object-cover lg:aspect-auto lg:h-80 cursor-pointer"
            />
          </NuxtLink>
          <!-- product info -->
          <div class="mt-4 flex flex-col">
            <div>
              <h3 class="text-sm text-gray-600">{{ product.category }}</h3>
              <NuxtLink :to="`/product/${product.linkName}`">
                <h3 class="text-lg font-bold text-gray-700">
                  {{ product.name }}
                </h3>
              </NuxtLink>
              <div class="flex justify-center text-gray-600">
                <span class="material-icons">star_border</span>
                <span class="material-icons">star_border</span>
                <span class="material-icons">star_border</span>
                <span class="material-icons">star_border</span>
                <span class="material-icons">star_border</span>
              </div>
            </div>
            <p class="text-sm font-bold text-gray-900">{{ product.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from "~~/stores/Product";
const productStore = useProductStore();
const products = productStore.trending;
</script>