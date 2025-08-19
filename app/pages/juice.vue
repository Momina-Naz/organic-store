<template>
  <main class="bg-[#F8F6F3] flex justify-center p-6 md:px-28 px-8 py-20">
    <!-- Product Listing -->
    <section class="max-w-5xl">
      <NuxtLink :to="`/`" class="text-sm text-gray-500 mb-6"
        >Home <span>/ Juice</span>
      </NuxtLink>
      <h1 class="text-5xl font-bold mb-6 font-serif text-[#8BC34A]">Juice</h1>
      <p class="my-8 text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptate
        consectetur hic deleniti tempore quam magnam sapiente inventore earum
        odit animi, ut, consequatur recusandae rem. Quam, harum. Voluptas vel a
        architecto ut voluptatum, odio laudantium ex nihil error temporibus.
        Tempore.
      </p>
      <!-- pagination info -->
      <div class="flex justify-between items-center">
        <!-- Pagination info -->
        <p class="text-gray-800 mb-4">
          Showing {{ (currentPage - 1) * itemsPerPage + 1 }}–
          {{ Math.min(currentPage * itemsPerPage, products.length) }} of
          {{ products.length }} results
        </p>

        <!-- Sort Dropdown -->
        <select
          v-model="sortOption"
          @change="applySort"
          class="mb-7 bg-[#F8F6F3] px-4 py-3 border border-[#F8F6F3] hover:border-gray-300 cursor-pointer"
        >
          <option value="">Default</option>
          <option value="a-z">A → Z</option>
          <option value="z-a">Z → A</option>
          <option value="price-min">Price: Low →High</option>
          <option value="price-max">Price: High → Low</option>
        </select>
      </div>
      <div
        class="grid gap-x-6 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 py-8"
      >
        <!-- Product Card -->
        <div
          v-for="product in displayedProducts"
          :key="product.id"
          class="group relative"
        >
          <NuxtLink :to="`/juices/${product.linkName}`">
            <img
              :src="product.img"
              :alt="product.alt"
              class="aspect-square w-full rounded-md bg-gray-200 object-cover cursor-pointer"
            />
          </NuxtLink>

          <!-- Add to Cart Button  -->
          <div class="absolute top-2 right-2">
            <button
              @click.prevent="addToCart(product)"
              class="bg-[#8BC34A] py-2 px-2 rounded-full text-white hover:bg-[#79A14C] flex justify-center items-center"
            >
              <span class="material-icons">add_shopping_cart</span>
            </button>
          </div>

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
import { useCartStore } from "~~/stores/Cart";
import { useJuiceStore } from "~~/stores/Juices";
import { ElMessage } from "element-plus";

const cartStore = useCartStore();
const juiceStore = useJuiceStore();

const products = computed(() => juiceStore.products);
const sortOption = ref("");

// pagination
const currentPage = ref(1);
const itemsPerPage = 9;
const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

// Sort + paginate locally (ignore store sorting for displayed list)
const displayedProducts = computed(() => {
  let sorted = [...products.value];

  switch (sortOption.value) {
    case "a-z":
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "z-a":
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "price-min":
      sorted.sort(
        (a, b) =>
          parseFloat(a.price.replace("£", "")) -
          parseFloat(b.price.replace("£", ""))
      );
      break;
    case "price-max":
      sorted.sort(
        (a, b) =>
          parseFloat(b.price.replace("£", "")) -
          parseFloat(a.price.replace("£", ""))
      );
      break;
  }

  const start = (currentPage.value - 1) * itemsPerPage;
  return sorted.slice(start, start + itemsPerPage);
});

// Sorting
const applySort = () => {};

// Add to Cart with message
const addToCart = (product) => {
  cartStore.addtocart({
    ...product,
    quantity: 1,
  });

  ElMessage({
    message: `${product.name} has been added to your cart!`,
    type: "success",
    duration: 2000,
  });
};
</script>

