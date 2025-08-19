<template>
  <div>
    <TransitionRoot as="template" :show="cart">
      <Dialog class="relative z-10" @close="$emit('close')">
        <TransitionChild
          as="template"
          enter="ease-in-out duration-500"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in-out duration-500"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-gray-300/15 transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16"
            >
              <TransitionChild
                as="template"
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enter-from="translate-x-full"
                enter-to="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leave-from="translate-x-0"
                leave-to="translate-x-full"
              >
                <DialogPanel class="pointer-events-auto w-screen max-w-md">
                  <div
                    class="flex h-full flex-col overflow-y-auto bg-white shadow-xl"
                  >
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div class="flex items-start justify-between">
                        <DialogTitle class="text-lg font-medium text-gray-900"
                          >Shopping cart</DialogTitle
                        >
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                            @click="$emit('close')"
                          >
                            <span class="absolute -inset-0.5" />
                            <span class="sr-only">Close panel</span>
                            <XMarkIcon class="size-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div class="mt-8">
                        <div class="flow-root">
                          <ul
                            role="list"
                            class="-my-6 divide-y divide-gray-200"
                          >
                            <li
                              v-for="product in products"
                              :key="product.id"
                              class="flex py-6"
                            >
                              <div
                                class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200"
                              >
                                <img
                                  :src="product.img"
                                  :alt="product.alt"
                                  class="size-full object-cover"
                                />
                              </div>

                              <div class="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div
                                    class="flex justify-between text-base font-medium text-gray-900"
                                  >
                                    <h3>
                                      <a :href="product.href">{{
                                        product.name
                                      }}</a>
                                    </h3>
                                    <p class="ml-4">
                                      <span>{{ product.quantity }}</span
                                      >×{{ product.price }}
                                    </p>
                                  </div>
                                  <p class="mt-1 text-sm text-gray-500">
                                    {{ product.category }}
                                  </p>
                                </div>
                                <div
                                  class="flex flex-1 items-end justify-between text-sm"
                                >
                                  <p class="text-gray-500">
                                    Qty {{ product.quantity }}
                                  </p>

                                  <div class="flex">
                                    <button
                                      type="button"
                                      class="font-medium text-[#7CB342]"
                                      @click="handleRemove(product.id)"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div
                        class="flex justify-between text-base font-medium text-gray-900"
                      >
                        <p>Subtotal</p>
                        <p>£{{ totalPrice }}</p>
                      </div>
                      <p class="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div class="mt-6">
                        <NuxtLink
                          :to="`/checkout`"
                          class="flex items-center justify-center rounded-md border border-transparent bg-[#7CB342] px-6 py-3 text-base font-medium text-white shadow-xs"
                          >Checkout</NuxtLink
                        >
                        <NuxtLink
                          to="/cart"
                          @click="$emit('close')"
                          class="flex items-center justify-center rounded-md border border-transparent bg-[#7CB342] px-6 py-3 text-base font-medium text-white shadow-xs mt-5"
                        >
                          View Cart
                        </NuxtLink>
                      </div>
                      <div
                        class="mt-6 flex justify-center text-center text-sm text-gray-500"
                      >
                        <p>
                          or{{ " " }}
                          <button
                            type="button"
                            class="font-medium text-[#7CB342]"
                            @click="$emit('close')"
                          >
                            <NuxtLink :to="`/allproducts`">
                              Continue Shopping</NuxtLink
                            >
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import { computed } from "vue";
import { useCartStore } from "~~/stores/Cart";
// importing cart state
const cartStore = useCartStore();
const products = computed(() => cartStore.cartItems);
const handleRemove = (productId) => {
  cartStore.removeFromcart({
    productId,
  });
};
// total price
const totalPrice = computed(() => cartStore.priceCount); //if we do not use computed the value of total price will not update in real time

const props = defineProps({
  cart: true,
});

const emit = defineEmits(["close"]);

import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
</script>