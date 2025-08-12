<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="w-[400px] h-80 bg-white shadow-lg py-4 px-3">
      <div class="flex justify-between px-2">
        <h2 class="text-[#92c355] text-2xl font-bold">Login</h2>
      </div>

      <form @submit.prevent="login" class="flex flex-col gap-6 my-10">
        <input
          type="text"
          placeholder="Username"
          v-model="username"
          required
          class="bg-gary-100 border border-[#92C355] rounded px-2 py-2"
        />
        <input
          type="password"
          placeholder="Password"
          required
          class="bg-gary-100 border border-[#92C355] rounded px-2 py-2"
        />
        <button class="bg-[#92C355] text-white font-bold text-xl rounded py-2">
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const username = ref();
const router = useRouter();
// creating cookie
const user = useCookie("user");

// login function
const login = () => {
  // setting cookie's value
  user.value = { username: username, role: "user" };
  router.push("/");
};

definePageMeta({
  layout: ["loginlayout"],
});
</script>