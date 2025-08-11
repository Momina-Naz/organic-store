<template>
  <main>
    <Hero />
    <Services />
    <BestSelling />
    <ProdCategories />
    <Discount />
    <TrendingProd />
    <Reviews />
  </main>
</template>

<script setup>
import Hero from "~/components/Home/Hero.vue";
import Services from "~/components/Home/Services.vue";
import BestSelling from "~/components/Home/BestSelling.vue";
import ProdCategories from "~/components/Home/ProdCategories.vue";
import Discount from "~/components/Home/Discount.vue";
import TrendingProd from "~/components/Home/TrendingProd.vue";
import Reviews from "~/components/Home/Reviews.vue";
</script>