<template>
  <div class="min-h-screen flex flex-col items-center justify-center gap-[24px] bg-[#E4ECF7] px-[20px]">
    <h1 class="text-4xl font-bold text-[#1F2933]">404 — Page Not Found</h1>
    <p class="text-[#1F2933A3] text-center max-w-[420px]">
      The page you’re looking for doesn’t exist or was moved.
    </p>
    <router-link
      to="/"
      class="px-[40px] py-[20px] rounded-[40px] bg-[#1F2933] text-white font-semibold"
    >
      Back to Home
    </router-link>
  </div>
</template>

<script setup>
</script>
