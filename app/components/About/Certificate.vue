<template>
  <main
    class="max-w-7xl mx-auto grid grid-col-1 md:grid-cols-2 items-center p-20"
  >
    <div class="mb-8 md:mb-0">
      <div class="rounded-md">
        <img src="/images/grapes.jpg" alt="grapes" />
      </div>

      <div
        class="flex flex-col items-center text-center gap-5 mt-8 px-6 w-[450px]"
      >
        <!-- Stars -->
        <div class="flex justify-center text-yellow-500 text-3xl">
          <span class="material-icons">star</span>
          <span class="material-icons">star</span>
          <span class="material-icons">star</span>
          <span class="material-icons">star</span>
          <span class="material-icons">star</span>
        </div>

        <!-- Testimonial -->
        <p class="text-gray-600 text-lg leading-relaxed">
          Click edit button to change this text. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
          mattis, pulvinar dapibus leo.
        </p>

        <!-- Client Info -->
        <div class="flex items-center gap-3 mt-4">
          <img
            src="/images/client01-free-img.png"
            alt="client1"
            class="h-12 w-12 rounded-full"
          />
          <p class="text-base font-semibold text-gray-700">Mila Kunis</p>
        </div>
      </div>
    </div>

    <!-- certified products -->
    <div class="flex flex-col gap-8 px-7">
      <div class="flex gap-3">
        <img
          src="/images/organic-badge-freeimg.png"
          alt="organic badge"
          class="h-20"
        />
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl font-bold text-gray-800">Certified Products</h1>
          <p>
            Click edit button to change this text. Lorem <br />
            ipsum dolor sit amet
          </p>
        </div>
      </div>
      <h1 class="text-4xl font-semibold font-serif text-gray-800">
        We Deal With Various Quality Organic Products!
      </h1>
      <img src="/images/logo-leaf-new.png" alt="logo leaf" class="h-10 w-20" />
      <div class="flex gap-16">
        <ul>
          <li class="flex items-center mb-3">
            <span class="material-icons text-[#8FC14F]"
              >check_circle_outline</span
            >Dry fruits
          </li>
          <li class="flex items-center mb-3">
            <span class="material-icons text-[#8FC14F]"
              >check_circle_outline</span
            >Fresh vegetables
          </li>
          <li class="flex items-center mb-3">
            <span class="material-icons text-[#8FC14F]"
              >check_circle_outline</span
            >Dried vegetables
          </li>
        </ul>
        <ul>
          <li class="flex items-center mb-3">
            <span class="material-icons text-[#8FC14F]"
              >check_circle_outline</span
            >Milk products
          </li>
          <li class="flex items-center mb-3">
            <span class="material-icons text-[#8FC14F]"
              >check_circle_outline</span
            >Organic honey
          </li>
          <li class="flex items-center mb-3">
            <span class="material-icons text-[#8FC14F]"
              >check_circle_outline</span
            >Organic tea
          </li>
        </ul>
      </div>
      <NuxtLink :to="`/allproducts`">
        <button
          class="mt-4 flex items-center justify-center gap-2 bg-[#6A9739] hover:bg-[#7CB342] text-white font-semibold px-10 py-3 rounded shadow transition duration-300 w-fit mx-auto md:mx-0"
        >
          <span class="material-icons">shopping_cart</span>
          SHOP NOW
        </button>
      </NuxtLink>
    </div>
  </main>
</template>