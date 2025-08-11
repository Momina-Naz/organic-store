<template>
  <!-- Basil Leaf (Optional) -->
  <div class="flex justify-center items-center">
    <img src="/images/basil-leaf.png" alt="basil leaf" class="h-14 absolute" />
  </div>

  <div
    class="bg-white shadow-lg h-[600px] md:h-64 flex flex-col md:flex-row items-center justify-around p-8"
  >
    <div
      v-for="card in contactCards"
      :key="card.id"
      class="border border-gray-200 rounded p-6 bg-white text-center w-72"
    >
      <span class="material-icons text-[#8BC34A] text-3xl">{{
        card.icon
      }}</span>
      <p class="text-gray-800 mt-2">{{ card.line1 }}</p>
      <p class="text-gray-600">{{ card.line2 }}</p>
    </div>
  </div>
</template>



<script setup>
const contactCards = [
  {
    id: 1,
    icon: "phone",
    line1: "+123 456 7890",
    line2: "+123 456 7890",
  },
  {
    id: 2,
    icon: "email",
    line1: "info@example.com",
    line2: "support@example.com",
  },
  {
    id: 3,
    icon: "location_on",
    line1: "1569 Ave, New York,",
    line2: "NY 10028, USA",
  },
];
</script>