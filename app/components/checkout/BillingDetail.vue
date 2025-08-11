<template>
  <main class="bg-[#FAF9F7] p-6 space-y-6 md:pr-40 md:ps-20 px-10 md:px-0">
    <!-- Product Row -->
    <div v-for="item in cartItems" :key="item.id">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          <!-- Product Image -->
          <div class="relative w-16 h-16">
            <img
              :src="item.img"
              :alt="item.alt"
              class="w-full h-full object-cover rounded"
            />
            <!-- Badge -->
            <span
              class="absolute -top-2 -right-2 bg-[#82B745] text-white text-xs font-bold px-2 py-0.5 rounded-full"
              >{{ item.quantity }}</span
            >
          </div>
          <span class="text-gray-800 font-medium">{{ item.name }}</span>
        </div>
        <span class="text-gray-700">{{ item.price }}</span>
      </div>
    </div>

    <!-- Coupon Input -->
    <div class="flex gap-2">
      <input
        type="text"
        placeholder="Coupon Code"
        class="flex-1 border rounded-lg px-3 py-2 focus:outline-none"
      />

      <button
        class="bg-[#82B745] text-white font-medium px-5 py-2 rounded-lg transition"
      >
        Apply
      </button>
    </div>

    <!-- Subtotal -->
    <div class="flex justify-between text-gray-600">
      <span>Subtotal</span>
      <span>£{{ cartStore.priceCount }}</span>
    </div>

    <!-- Total -->
    <div class="flex justify-between font-semibold text-lg">
      <span>Total</span>
      <span class="text-black">£{{ cartStore.priceCount }}</span>
    </div>
  </main>
</template>
<script setup>
import { useCartStore } from "~~/stores/Cart";
import { storeToRefs } from "pinia";

const cartStore = useCartStore();
const { cartItems } = storeToRefs(cartStore);
</script>