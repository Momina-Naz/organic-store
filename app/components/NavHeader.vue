<template>
  <header
    class="flex md:justify-around justify-between px-8 md:px-4 items-center p-4 bg-[#F8F6F3]"
  >
    <!-- LOGO -->
    <div class="w-[150px]">
      <NuxtLink to="/">
        <img src="/images/organic-store-logo5.svg" alt="logo" />
      </NuxtLink>
    </div>

    <!-- Nav links (hidden on small screens) -->
    <nav class="hidden md:block">
      <ul class="flex gap-10 text-gray-700">
        <NuxtLink to="/about" class="hover:text-[#8BC34A]">About</NuxtLink>
        <NuxtLink to="/allproducts" class="hover:text-[#8BC34A]"
          >All products</NuxtLink
        >
        <NuxtLink to="/groceries" class="hover:text-[#8BC34A]"
          >Groceries</NuxtLink
        >
        <NuxtLink to="/juice" class="hover:text-[#8BC34A]">Juice</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-[#8BC34A]">Contact</NuxtLink>
      </ul>
    </nav>

    <!-- Cart + Account  -->
    <div class="gap-3 hidden md:flex">
      <div
        class="relative cursor-pointer flex gap-3 items-center"
        @click="cart = true"
      >
        <p class="font-bold text-[#8BC34A]">£{{ cartStore.priceCount }}.00</p>
        <span class="material-icons text-[#8BC34A]">shopping_cart</span>
        <span
          class="absolute top-[-6px] right-[-6px] bg-[#8BC34A] text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center"
        >
          {{ cartCount }}
        </span>
      </div>
      <div class="relative">
        <!-- Profile Icon -->
        <span class="material-icons cursor-pointer" @click="open = !open">
          person
        </span>

        <!-- Dropdown Menu -->
        <div
          v-if="open"
          class="absolute left-1/2 -translate-x-1/2 mt-2 w-32 bg-white shadow-md rounded-lg transition"
        >
          <NuxtLink
            to="/logout"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Hamburger Icon -->
    <div class="block md:hidden">
      <button
        @click="sideBar = true"
        class="material-icons bg-[#8BC34A] text-white p-2"
      >
        menu
      </button>
    </div>

    <!-- Sidebar Component -->
    <Teleport to="body">
      <SideBar v-if="sideBar" @close="sideBar = false" />
    </Teleport>
    <!-- cart -->
    <Teleport to="body">
      <Cart v-if="cart" @close="cart = false" :cart="cart" />
    </Teleport>
  </header>
</template>

<script setup>
import { ref } from "vue";
import Cart from "./Cart.vue";
import SideBar from "./SideBar.vue";
import { useCartStore } from "~~/stores/Cart";
// logout dropdown
const open = ref(false);
const cartStore = useCartStore();
// cartcount
const cartCount = computed(() => cartStore.cartCount);
const sideBar = ref(false);
const cart = ref(false);
</script>

