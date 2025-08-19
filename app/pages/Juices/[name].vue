<template>
  <main>
    <div
      v-if="showalert"
      class="max-w-7xl mx-auto flex justify-between p-8 border border-gray-600 rounded-lg mt-4 bg-[#F7F6F7]"
    >
      <p v-if="product" class="flex items-center">
        <span class="material-icons text-[#8BC34A] text-xl">check_circle</span>
        "{{ product.name }}" has been added to your cart.
      </p>
      <NuxtLink
        :to="'/cart'"
        class="bg-[#6A9739] px-10 py-3 text-white rounded"
      >
        <button>View Cart</button>
      </NuxtLink>
    </div>
    <div
      class="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10"
    >
      <div class="w-full overflow-hidden">
        <img
          :src="product.img"
          :alt="product.alt"
          class="h-[550px] w-full object-cover"
        />
      </div>
      <div class="space-y-6 mt-8">
        <!-- breadcrumbs -->
        <NuxtLink :to="`/`" class="text-sm text-gray-500 mb-4"
          >Home
          <span
            ><NuxtLink :to="`/groceries`" class="text-sm text-gray-500 mb-4"
              >/ Groceries</NuxtLink
            ></span
          >
          <span class="text-sm text-gray-500 mb-4"> / {{ product.name }}</span>
        </NuxtLink>

        <!-- Product Name -->
        <h1 class="text-3xl font-bold font-serif text-gray-900">
          {{ product.name }}
        </h1>

        <!-- Price and Free Shipping -->
        <p class="text-2xl text-gray-800 font-bold flex items-center">
          {{ product.price }}
          <span class="ml-1 text-sm text-gray-500">+ Free Shipping</span>
        </p>

        <!-- Description -->
        <div>
          <p class="text-lg text-gray-700 leading-relaxed">
            Neque porro quisquam est, qui dolore ipsum quia dolor sit amet,
            consectetur adipisci velit, sed quia non incidunt lores ta porro
            ame. numquam eius modi tempora incidunt lores ta porro ame.
          </p>
        </div>

        <!-- Quantity & Button -->
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-4">
            <!-- Decrement Button -->
            <button
              @click="decrement"
              class="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-lg rounded"
            >
              −
            </button>

            <!-- Quantity Display -->
            <p class="text-lg font-semibold w-6 text-center">
              {{ quantity }}
            </p>

            <!-- Increment Button -->
            <button
              @click="increment"
              class="px-3 py-1 bg-gray-200 hover:bg-gray-300 text-lg rounded"
            >
              +
            </button>
          </div>
          <button
            class="bg-[#6A9739] text-white px-16 py-2 rounded-md font-medium"
            @click="addToCart"
          >
            Add to Cart
          </button>
        </div>

        <!-- Category -->
        <p class="text-gray-500 text">
          Category:
          <span class="font-medium text-[#6A9739]">{{ product.category }}</span>
        </p>
      </div>
    </div>
  </main>
</template>
<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useJuiceStore } from "~~/stores/Juices";
import { useCartStore } from "~~/stores/Cart";
const showalert = ref(false);

const quantity = ref(1);

const increment = () => {
  quantity.value++;
};

const decrement = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const route = useRoute();
const name = route.params.name;
const juiceStore = useJuiceStore();

const product = computed(() =>
  juiceStore.products.find((p) => p.linkName === name)
);
// add to cart function
const cartStore = useCartStore();
const addToCart = () => {
  cartStore.addtocart({
    ...product.value,
    quantity: quantity.value,
  });
  showalert.value = true;
  setTimeout(() => {
    showalert.value = false;
  }, 2000);
};
</script>