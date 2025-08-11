<template>
  <main>
    <div class="grid grid-col-1 md:grid-cols-2 mx-auto">
      <CheckoutForm />
      <BillingDetail />
    </div>
  </main>
</template>
<script setup>
import BillingDetail from "~/components/checkout/BillingDetail.vue";
import CheckoutForm from "~/components/checkout/CheckoutForm.vue";

{
  definePageMeta({
    layout: "checkoutnav",
  });
}
</script>


