<template>
  <main class="bg-[#FAF9F7] py-10">
    <div class="max-w-7xl mx-auto px-4">
      <!--  Cart Items -->
      <div class="space-y-6">
        <h1 class="text-3xl font-serif font-bold mb-4">Cart</h1>

        <!-- Cart Table -->
        <div class="border border-gray-200 rounded-lg overflow-hidden bg-white">
          <!-- Header -->
          <div
            class="grid grid-cols-4 md:grid-cols-5 gap-5 md:gap-0 bg-gray-50 border-b border-gray-200 py-3 px-4 font-semibold text-gray-700 text-sm"
          >
            <span></span>
            <span>Product</span>
            <span class="hidden md:block">Price</span>
            <span>Quantity</span>
            <span class="hidden md:block">Subtotal</span>
          </div>

          <!-- Items -->
          <div
            v-for="item in cartItems"
            :key="item.id"
            class="grid grid-cols-4 md:grid-cols-5 gap-5 md:gap-0 items-center border-b border-gray-200 px-4 py-4 text-sm"
          >
            <!-- Remove Button -->
            <button @click="handleRemove(item.id)" class="text-gray-400">
              ✕
            </button>

            <!-- Product Info -->
            <div class="flex items-center gap-3">
              <img
                :src="item.img"
                :alt="item.name"
                class="w-12 h-12 object-cover rounded"
              />
              <NuxtLink
                :to="`/product/${item.linkName}`"
                class="text-[#6A9739] hover:underline font-medium"
              >
                {{ item.name }}
              </NuxtLink>
            </div>

            <!-- Price -->
            <span class="hidden md:block">{{ item.price }}</span>

            <!-- Quantity -->
            <input
              type="number"
              min="1"
              v-model.number="item.quantity"
              class="w-16 border border-gray-300 rounded p-1 text-center"
            />

            <!-- Subtotal -->
            <span class="hidden md:block font-medium"
              ><span>{{ item.quantity }}</span> × <span>{{ item.price }}</span>
            </span>
          </div>
        </div>

        <!-- Coupon & Update Cart -->
        <div class="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Coupon code"
            class="border rounded px-4 py-2 flex-1"
          />
          <button class="bg-[#6A9739] text-white px-6 py-2 rounded">
            APPLY COUPON
          </button>
          <button
            class="px-6 bg-[#6A9739] text-white cursor-not-allowed py-2 rounded"
          >
            UPDATE CART
          </button>
        </div>
      </div>

      <!--  Cart Totals -->
      <div
        class="bg-white border border-gray-200 rounded-lg p-6 h-fit max-w-[600px] mt-6"
      >
        <h2 class="text-xl font-semibold border-b border-gray-200 pb-3 mb-4">
          Cart totals
        </h2>

        <!-- Subtotal -->
        <div class="flex justify-between py-2 border-b border-gray-200">
          <span class="text-gray-600">Subtotal</span>
          <span>£{{ cartStore.priceCount }}</span>
        </div>

        <!-- Total -->
        <div class="flex justify-between py-3 font-semibold text-lg">
          <span>Total</span>
          <span>£{{ cartStore.priceCount }}</span>
        </div>

        <!-- Checkout Button -->
        <NuxtLink
          to="/checkout"
          class="block bg-[#6A9739] text-white text-center py-3 rounded mt-4 font-medium"
        >
          PROCEED TO CHECKOUT
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "~~/stores/Cart";

const cartStore = useCartStore();
const { cartItems } = storeToRefs(cartStore);
const handleRemove = (productId) => {
  cartStore.removeFromcart({
    productId,
  });
};
</script>
