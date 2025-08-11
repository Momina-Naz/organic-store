<template>
  <main>
    <div
      class="flex flex-col md:flex-row overflow-auto justify-around items-center h-70 md:h-40 bg-[#111111] text-3xl text-white"
    >
      <h1 class="font-serif">
        Numbers Speak For <br />
        Themselves!
      </h1>
      <div class="flex flex-col gap-1">
        <h1 class="font-semibold text-5xl">
          <CountUp
            :start-val="48000"
            :end-val="50000"
            :duration="2"
            suffix="+"
          />
        </h1>
        <p class="text-xl">Curated Products</p>
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="font-semibold text-5xl">
          <CountUp :start-val="0" :end-val="800" :duration="2" suffix="+" />
        </h1>
        <p class="text-xl">Curated Products</p>
      </div>
      <div class="flex flex-col gap-1">
        <h1 class="font-semibold text-5xl">
          <CountUp :start-val="0" :end-val="800" :duration="2" suffix="+" />
        </h1>
        <p class="text-xl">Product Categories</p>
      </div>
    </div>
  </main>
</template>
<script setup>
import CountUp from "vue-countup-v3";
</script>
