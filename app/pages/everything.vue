<template>
  <main class="bg-[#F8F6F3] flex gap-6 p-6 md:px-28 px-8 py-20">
    <!--sidebar -->
    <aside
      class="md:w-1/4 w-2/4 pe-10 md:pe-16 border-e-2 border-gray-200 flex flex-col"
    >
      <!-- filter by price -->
      <div>
        <h1 class="text-2xl font-bold font-serif">Filter by price</h1>
        <!-- Price Range Slider -->
        <div class="mb-4">
          <input
            type="range"
            v-model="selectedPrice"
            step="1"
            min="15"
            max="35"
            @change="filterByPrice"
            class="w-full accent-[#8BC34A]"
          />
          <div class="flex justify-end gap-2">
            <div>
              <p
                class="bg-white text-gray-800 border border-gray-400 p-2 text-center"
              >
                £15
              </p>
              <p>Min Price</p>
            </div>
            <div>
              <p
                class="bg-white text-gray-800 border border-gray-400 p-2 text-center"
              >
                £{{ selectedPrice }}
              </p>
              <p>Max Price</p>
            </div>
          </div>
          <div class="flex justify-end">
            <button
              @click="resetFilter"
              class="bg-[#8BC34A] text-white rounded-md px-6 py-3 font-medium text-lg mt-4"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <div>
        <p class="mb-4"><span class="text-[#8BC34A]">Groceries</span>(10)</p>
        <p class="mb-8"><span class="text-[#8BC34A]">Juice</span>(9)</p>
        <div v-for="item in asideprods" :key="item.id">
          <NuxtLink :to="`/product/${item.linkName}`">
            <img :src="item.img" :alt="item.alt"
          /></NuxtLink>
          <div class="my-6">
            <p class="text-[#8BC34A] text-md mb-1">{{ item.name }}</p>
            <p class="text-gray-800">{{ item.price }}</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Product Listing -->
    <section class="flex-1 ps-4 md:ps-9">
      <NuxtLink :to="`/`" class="text-sm text-gray-500 mb-4"
        >Home <span>/ Shop</span>
      </NuxtLink>
      <h1 class="text-5xl font-bold mb-6 font-serif text-[#8BC34A]">Shop</h1>
      <!-- pagination  -->
      <p class="text-gray-800">
        Showing {{ (currentPage - 1) * itemsPerPage + 1 }}–
        {{ Math.min(currentPage * itemsPerPage, products.length) }} of
        {{ products.length }} results
      </p>
      <div
        class="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-8"
      >
        <!-- Product Card -->
        <div
          v-for="product in displayedProducts"
          :key="product.id"
          class="group relative"
        >
          <NuxtLink :to="`/product/${product.linkName}`">
            <img
              :src="product.img"
              :alt="product.alt"
              class="aspect-square w-full rounded-md bg-gray-200 object-cover cursor-pointer"
            />
          </NuxtLink>

          <!-- Product Info -->
          <div class="mt-4 flex flex-col items-center">
            <div>
              <h3 class="text-sm text-gray-600 text-center">
                {{ product.category }}
              </h3>
              <h3 class="text-lg font-bold text-gray-700 text-center">
                {{ product.name }}
              </h3>
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
      <!-- pagination buttons -->
      <div class="flex gap-1">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'py-2 px-4 border',
            page === currentPage
              ? 'bg-[#8BC34A] text-white border-[#8BC34A]'
              : 'bg-white text-[#8BC34A] border-[#8BC34A]',
          ]"
        >
          {{ page }}
        </button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
// auto import of useproductstore

import { useProductStore } from "~~/stores/Product";

const productStore = useProductStore();
const products = productStore.products;
const asideprods = productStore.onSale;
const filteredProducts = ref([]);
const selectedPrice = ref(35);
//pagination
const currentPage = ref(1);
const itemsPerPage = 9;
const totalPages = computed(() => Math.ceil(products.length / itemsPerPage));

const displayedProducts = computed(() => {
  const source =
    filteredProducts.value.length > 0 ? filteredProducts.value : products;
  const start = (currentPage.value - 1) * itemsPerPage;
  return source.slice(start, start + itemsPerPage);
});
// filter function

const filterByPrice = () => {
  filteredProducts.value = products.filter((product) => {
    const price = parseFloat(product.price.replace("£", ""));
    return price <= selectedPrice.value;
  });
  currentPage.value = 1;
};
// reset function
const resetFilter = () => {
  selectedPrice.value = 35;
  filteredProducts.value = [];
  currentPage.value = 1;
};
</script>