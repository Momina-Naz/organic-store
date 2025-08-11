

<template>
  <main>
    <!-- Heading Section -->
    <div class="bg-[#F8F6F3] flex justify-center items-center h-52 relative">
      <h1 class="text-6xl font-bold font-serif text-gray-800">About Us</h1>
    </div>
    <div class="flex justify-center items-center">
      <img
        src="/images/basil-leaf.png"
        alt="basil leaf"
        class="h-14 absolute"
      />
    </div>
    <!-- Main Content Section -->
    <div
      class="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      <!-- Text Content -->
      <div class="flex flex-col gap-6">
        <h2 class="text-4xl font-bold font-serif text-gray-800 mb-4 leading-7">
          We Are Your Favourite Store.
        </h2>
        <p class="text-gray-600 mb-4">
          Tuas quisquam quo gravida proident harum, aptent ligula anim
          consequuntur, ultrices mauris, nunc voluptates lobortis, varius,
          potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero
          penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio
          ultrices consequuntur numqu.
        </p>
        <p class="text-gray-600">
          Officiis fuga harum porro et? Similique rhoncus atque! Netus
          blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus
          elit, hic sem tenetur anim amet quas, malesuada proident platea
          corrupti expedita.
        </p>
      </div>

      <!-- Image Section -->
      <div>
        <img
          src="/images/banner-01.jpg"
          alt="banner"
          class="w-full rounded shadow-md"
        />
      </div>
    </div>
    <!-- Count Banner -->
    <CountBanner />
    <!-- Certified Products -->
    <Certificate />
  </main>
</template>
<script setup >
import Certificate from "~/components/About/Certificate.vue";
import CountBanner from "~/components/About/CountBanner.vue";
</script>
