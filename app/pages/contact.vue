<template>
  <main class="relative bg-[#F8F6F3]">
    <!-- Heading Section -->
    <div class="flex justify-center items-center h-64 relative">
      <h1 class="text-6xl font-bold font-serif text-gray-900">Get In Touch</h1>
    </div>

    <!-- Contact Cards -->
    <div
      class="absolute top-[14rem] left-1/2 -translate-x-1/2 w-full max-w-7xl px-6"
    >
      <ContactInfo />
    </div>

    <!-- FAQ Section  -->
    <div class="mt-96">
      <FAQSection />
    </div>
  </main>
</template>



<script setup >
import ContactInfo from "~/components/Contact/ContactInfo.vue";
import FAQSection from "~/components/Contact/FAQSection.vue";
</script>