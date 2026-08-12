<template>
  <div class=" mt-[60px] xl:!p-[30px] ">
    <div class="relative h-[583.61px] w-[756px] lg4:w-[600px] xl:!w-full ">
      <img :src="image" class="rounded-[15px] w-full h-full" alt="Remarkable Item" />
      <div class=" absolute bottom-0 right-[10%] max-w-[600px] xl:max-w-[736px] xl:left-[17%] xl:right-[21%]">
        <img src="../../assets/images/rectangle-end.png" class="filter-black-filter" alt="Decoration" />
      </div>
    </div>
    <div>
      <h3 class="font-medium text-white text-[24px] leading-[28.8px] mt-[24px]">
        Title of the story
      </h3>
      <p class="font-medium text-[#FFFFFFA3] text-[18px] leading-[21.6px] mt-[16px]">
        <span class="font-medium text-white text-[18px] leading-[21.6px]">{{ text }}</span>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  image: String,
  text: String,
  description: String,
});
</script>

<style scoped>
</style>
