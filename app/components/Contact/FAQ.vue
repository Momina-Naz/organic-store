<template>
  <div class="w-full max-w-xl mx-auto">
    <div class="border-b border-gray-300 py-4">
      <button
        @click="isOpen = !isOpen"
        class="w-full flex justify-between items-center text-left"
      >
        <span class="text-lg text-gray-800">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur?
        </span>
        <span
          class="material-icons transition-transform duration-300"
          :class="{ 'rotate-180': isOpen }"
        >
          expand_more
        </span>
      </button>

      <transition name="fade">
        <div v-if="isOpen" class="mt-2 text-gray-600 text-sm text-left">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore ab
          facilis earum maiores, soluta autem facere in provident perspiciatis
          explicabo.
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  max-height: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>

