<template >
  <div class="bg-[#1F2933] mt-[150px] rounded-[40px]">
    <div>
      <div
        class="pt-[80px] flex justify-center gap-[263px] xs:flex-wrap xs:gap-[10px]"
      >
        <div class="flex items-center gap-4">
          <div
            class="p-2 pr-4 pb-2 pl-4 rounded-[27px] bg-[#BAD8F14D] max-w-[57px] flex justify-center"
          >
            <p class="text-[#FFFFFF] font-medium text-[24px] leading-[28.8px]">
              01
            </p>
          </div>
          <h2 class="font-normal text-[#FFFFFF] text-[64px] leading-[64px]">
            Latest Posts
          </h2>
        </div>
        <p
          class="text-lg font-medium leading-6 text-left max-w-[471px] text-[#FFFFFF]"
        >
          Aenean sit amet maximus dui. Nullam maximus urna leo, eu condimentum
          turpis luctus sed. Vestibulum sed urna quis urna venenatis tempor. In
          accumsan suscipit nisl et aliquam.
        </p>
      </div>
      <LatestPostsItem :currentSlide="currentSlide" :latestObj="latestObj" />
    </div>
    <div>
      <div class="p-[0px_134px] flex justify-between">
        <div
          @click="prevSlide"
          class="flex items-center p-[20px_32px] gap-[10px] cursor-pointer"
        >
          <img src="../../assets/images/left-icon.png" alt="" />
          <p class="text-[#FFFFFF] text-[16px] font-semibold leadeing-[16px]">
            Prev
          </p>
        </div>
        <div
          @click="nextSlide"
          class="flex items-center p-[20px_32px] gap-[10px] cursor-pointer"
        >
          <p class="text-[#FFFFFF] text-[16px] font-semibold leadeing-[16px]">
            Next
          </p>
          <img src="../../assets/images/rigth-icon.png" alt="" />
        </div>
      </div>
      <div class="flex items-center justify-center">
        <img src="../../assets/images/rectangle-end.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script setup>
import LatestPostsItem from "./LatestPostsItem.vue";
import { ref, reactive } from "vue";
import women2Img from "../../assets/images/women-2.png";
import womenImg from "../../assets/images/women.png";
import bigFontSizeImg from "../../assets/images/big-font-size.png";
import rectangleLatestImg from "../../assets/images/rectangle-latest.png";
import fontSize01Img from "../../assets/images/font-size-01.png";

const latestObj = reactive([
  {
    image: women2Img,
    text: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
    watch: "watch now",
    imageRectangle: rectangleLatestImg,
    play: "",
  },
  {
    image: womenImg,
    text: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
    watch: "watch now",
    imageRectangle: rectangleLatestImg,
    play: "",
  },
  {
    image: bigFontSizeImg,
    text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
    watch: "watch now",
    imageRectangle: rectangleLatestImg,
    play: fontSize01Img,
  },
  {
    image: bigFontSizeImg,
    text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
    watch: "watch now",
    imageRectangle: rectangleLatestImg,
    play: fontSize01Img,
  },
  {
    image: bigFontSizeImg,
    text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
    watch: "watch now",
    imageRectangle: rectangleLatestImg,
    play: fontSize01Img,
  },
  {
    image: bigFontSizeImg,
    text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
    watch: "watch now",
    imageRectangle: rectangleLatestImg,
    play: fontSize01Img,
  },
  {
    image: bigFontSizeImg,
    text: "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sagittis vitae eleifend vitae amet nisi cum.",
    watch: "watch now",
    imageRectangle: rectangleLatestImg,
    play: fontSize01Img,
  },
]);

const currentSlide = ref(0);
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % latestObj.length;
};

const prevSlide = () => {
  currentSlide.value =
    currentSlide.value === 0 ? latestObj.length - 1 : currentSlide.value - 1;
};
</script>
<style scoped >
</style>