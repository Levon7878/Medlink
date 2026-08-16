<template>
  <div class="latest-container overflow-hidden max-w-[1750px] w-full">
    <div class="flex mt-[60px]  transition-transform duration-500 w-[600px]" :style="{transform:`translateX(-${currentSlide * (100 / 3)}%)`}">
      <div
        v-for="(item, index) in props.latestObj"
        :key="index"
        class="latest-item p-4 mb-4"
        :v-show="index === currentSlide"
      >
        <div class="relative max-w-[400px]">
          <div class="absolute right-0 top-[-1px]">
            <img
              :src="item.imageRectangle"
              alt="Rectangle"
              class="rectangle-image"
            />
          </div>
          <div
            class="w-[400px] h-[400px] flex justify-center items-center flex-wrap bg-[#BAD8F14D]"
          >
            <img
              :style="getDynamicStyles(index)"
              class="w-full h-full"
              :src="item.image"
              alt="Image"
            />
          </div>
        </div>
        <div>
          <div class="flex flex-start gap-[16px]">
            <img
              v-if="item.play"
              :src="item.play"
              alt="Play"
              class="play-image"
            />
            <h3
              class="max-w-[326px] font-medium text-[#FFFFFF] text-[24px] leading-[28.8px]  overflow-hidden whitespace-nowrap text-ellipsis i"
            >
              {{ item.text }}
            </h3>
          </div>
          <p
            class="text-[#FFFFFF] max-w-[326px] text-[16px] leading-[19.2px] font-medium"
          >
            {{ item.description }}
          </p>
          <router-link to="/video-interview" class="text-[#FFFFFF] hover:opacity-80">
            {{ item.watch }}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import {  defineProps } from "vue";

    const props = defineProps({
      currentSlide: Number,
      latestObj: Array,
    });

    const getDynamicStyles = (index) => {
      if (index === 2 || index === 3) {
        return {
          width: "200px",
          height: "200px",
        };
      }
      return {};
    };
</script>
  
  <style>
.rectangle-image {
}

.play-image {
}
</style>
  