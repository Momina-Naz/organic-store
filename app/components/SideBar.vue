<template>
  <main
    class="fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 p-6 flex flex-col gap-6 transition-transform duration-1000"
  >
    <!-- Close Button -->
    <div class="flex justify-end">
      <button
        @click="$emit('close')"
        class="text-gray-500 text-xl hover:text-red-500"
      >
        <span class="material-icons">close</span>
      </button>
    </div>

    <!-- Search -->
    <div class="relative">
      <input
        type="text"
        placeholder="Search..."
        class="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#8BC34A]"
      />
      <span class="material-icons absolute left-3 top-2.5 text-gray-400">
        search
      </span>
    </div>

    <!--  Navigation -->
    <nav>
      <ul
        class="flex flex-col gap-4 text-lg ms-5 text-[#8BC34A]"
        @click="$emit('close')"
      >
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/cart">Cart</NuxtLink>
        <NuxtLink to="/checkout">Checkout</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/">My Account</NuxtLink>
        <NuxtLink to="/everything">Shop</NuxtLink>
      </ul>
    </nav>
  </main>
</template>

