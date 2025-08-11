<template>
  <div class="bg-white py-10 ms-11 px-10 md:ps-40">
    <!-- Contact Info -->
    <section class="mb-8">
      <h1 class="text-2xl font-serif font-semibold mb-8 text-gray-900">
        Contact
      </h1>
      <input type="email" required placeholder="Email Address" class="w-full" />
    </section>

    <!-- Billing Info -->
    <section class="mb-8 flex flex-col gap-6">
      <h1 class="text-2xl font-serif font-semibold mb-8 text-gray-900">
        Billing Details
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First name *" required class="input" />
        <input type="text" placeholder="Last name *" required class="input" />
      </div>
      <input type="text" placeholder="Country/Region" required />
      <input type="text" placeholder="House number and street number *" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="City/Town *" required class="input" />
        <input type="text" placeholder="Zip Code *" required class="input" />
      </div>
      <input type="tel" placeholder="Phone*" required />
    </section>

    <!-- Additional Info -->
    <section class="mb-8">
      <h1 class="text-2xl font-serif font-semibold mb-8 text-gray-900">
        Additional information
      </h1>
      <textarea
        placeholder="Notes about your order, e.g special notes for your delivery."
        class="w-full px-2 py-2 border border-gray-800 rounded"
      ></textarea>
    </section>

    <!-- Payment Details -->
    <section class="mb-8 flex flex-col">
      <h1 class="text-2xl font-serif font-semibold mb-6 text-gray-900">
        Payment
      </h1>

      <div class="space-y-4">
        <!-- Check Payments Option -->
        <label
          class="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:border-gray-400 transition"
        >
          <input
            type="radio"
            name="payment"
            class="w-5 h-5 text-[[#8BC34A] focus:ring-2 focus:ring-[[#8BC34A]"
          />
          <span class="text-gray-700">Check payments</span>
        </label>

        <!-- Cash on Delivery Option -->
        <label
          class="flex items-center gap-3 p-4 border rounded-lg cursor-pointer"
        >
          <input
            type="radio"
            name="payment"
            class="w-5 h-5 text-[[#8BC34A] focus:ring-2 focus:ring-[[#8BC34A]"
          />
          <span class="text-gray-700">Cash on delivery</span>
        </label>
      </div>
    </section>

    <!-- Place Order Button -->
    <NuxtLink :to="`/everything`">
      <button
        type="submit"
        class="w-full bg-[#8BC34A] hover:bg-[#79A14C] text-white py-3 rounded-lg font-semibold"
      >
        Place Order
      </button>
    </NuxtLink>
  </div>
</template>



<style scoped>
input {
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px 3px;
}

.input {
  width: 250px;
}
</style>
