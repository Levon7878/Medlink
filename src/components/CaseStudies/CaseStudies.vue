<template>
  <div class="mt-150px">
    <section class="bg-[#E4ECF7] mt-[150px] rounded-[40px]">
      <div class="pt-[80px] flex gap-[134px]  justify-center xs:flex-wrap xs:gap-[10px]">
        <div class="flex items-center flex-wrap gap-[16px]">
          <div class="py-2 px-4 bg-[#BAD8F14D] rounded-[27px]">
            <p class="font-medium text-[24px] leading-[28.8px] text-[#1F2933]">
              02
            </p>
          </div>
          <h2 class="text-[64px] leading-[64px] text-[#1F2933]">
            Case Studies
          </h2>
        </div>
        <p class="text-[20px] leading-[24px] font-medium max-w-[463px] text-[#1F2933A3]">
          Explore many case studies from doctors and patients, witness the
          MedLink Community in action.
        </p>
      </div>
      <div class="flex justify-center pl-[85px] xs:pl-0">
        <div class="relative max-w-[1128px] w-full mt-[40px]">
          <div
            ref="filterScroll"
            class="flex gap-[4px] bg-[#FFFFFF33] rounded-[110px] items-center p-[4px] pl-[58px] pr-[58px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <div class="flex-shrink-0 py-6 px-8 bg-[#DAFF98] rounded-[40px]">
              <p class="text-[#398B39] font-medium whitespace-nowrap">All</p>
            </div>
            <div
              v-for="category in categories"
              :key="category"
              class="flex-shrink-0 py-6 px-8"
            >
              <p class="whitespace-nowrap">{{ category }}</p>
            </div>
          </div>
          <button
            type="button"
            class="absolute left-[4px] top-1/2 -translate-y-1/2 z-10 w-[54px] h-[54px] bg-[#FFFFFF] rounded-full flex justify-center items-center shrink-0"
            aria-label="Scroll categories left"
            @click="scrollFiltersLeft"
          >
            <img :src="leftIcon" alt="" class="w-[20px] h-[20px] brightness-0" />
          </button>
          <button
            type="button"
            class="absolute right-[4px] top-1/2 -translate-y-1/2 z-10 w-[54px] h-[54px] bg-[#FFFFFF] rounded-full flex justify-center items-center shrink-0"
            aria-label="Scroll categories right"
            @click="scrollFiltersRight"
          >
            <img :src="rightIcon" alt="" class="w-[20px] h-[20px] brightness-0" />
          </button>
        </div>
      </div>
      <div class="mt-[40px] flex justify-center">
        <div class="flex gap-[20px]  pl-[100px] xs:pl-0 justify-center flex-wrap">
          <div class="max-w-[560px] xs:max-w-[329px] flex flex-col gap-[40px]">
            <div class="relative overflow-hidden">
              <img class=" w-full " src="../../assets/images/nurse.png" alt="Nurse" />
              <div class="rotate-[-90deg] absolute left-[370px] right-[-308px] top-[226px] max-w-[363px] h-[24px]  xs:max-w-[212px] xs:!top-[128px] xs:right-[186px] xs:left-[223px]">
                <img src="../../assets/images/clip-path-community.png" class="filter-custom-filter" alt="" />
              </div>
            </div>
            <div>
              <h4 class="font-medium text-[24px] leading-[28.8px]">
                Overcoming Cancer: Emily's Triumph
              </h4>
              <div class="overflow-hidden whitespace-nowrap overflow-ellipsis">
                <p
                  class="mt-[16px] text-[20px] text-medium leading-[24px] text-[#1F2933A3] w-[560px] overflow-ellipsis">
                  Follow Emily's inspiring journey through diagnosis, treatment,
                  and resilience as she shares her strategies for maintaining
                  hope and strength.
                </p>
              </div>
              <div class="flex items-center mt-[16px] gap-[8px]">
                <a> Watch now </a>
                <div class="">
                  <img class="w-[5px] h-[10px] " src="../../assets/images/mini-right-icon.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-[16px] xs:items-center">
            <div class="max-w-[554px] flex border border-[#1F293314] rounded-[40px] p-[24px] xs:flex-col-reverse xs:w-[329px]">
              <div class="">
                <h3 class="text-[#1F2933] text-[24px] leading-[28.8px] xs:mt-[24px] font-medium max-w-[281px]">
                  From Darkness to Light: Someone’s Battle with Depression
                </h3>
                <p class="w-[100px] max-w-[222px] xs:!max-w-[281px] xs:mt-[8px] overflow-hidden whitespace-nowrap overflow-ellipsis">
                  Join Sarah as she opens up about her battle with depression,
                  offering insights into the healing power of community and
                  self-care.
                </p>
                <div class="flex items-center gap-[8px] xs:mt-[16px]">
                  <a> Watch now </a>

                  <img class="w-[5px] h-[10px]" src="../../assets/images/mini-right-icon.png" alt="" />
                </div>
              </div>
              <div>
                <img src="../../assets/images/nurse-2.png" class="w-full" alt="" />
              </div>
            </div>
            <div class="max-w-[554px] xs:max-w-[329px] flex flex-col border border-[#1F293314] rounded-[40px] p-[24px]">
              <div class="flex gap-[16px] items-start">
                <img src="../../assets/images/microphone-01.png" alt="" />
                <h3 class="text-[24px] font-medium leading-[28.8px]">
                  What did you try that didn’t help you better?
                </h3>
              </div>
              <div>
                <div class="w-[24px] h-[24px] bg-[#398B39] flex items-center justify-center rounded-[80px]">
                  <img class="w-[9px] h-[12px]" src="../../assets/images/solid-play.png" alt="" />
                </div>
                <div class="flex items-center mt-[16px] gap-[8px]">
                  <a> Listen now </a>

                  <img class="w-[5px] h-[10px]" src="../../assets/images/mini-right-icon.png" alt="" />
                </div>
              </div>
            </div>
            <div class="max-w-[554px] xs:max-w-[329px] flex flex-col gap-[16px] border border-[#1F293314] rounded-[40px] p-[24px]">
              <div class="flex items-start gap-[16px]">
                <img src="../../assets/images/font-size-01.png" alt="" />
                <h3 class="w-[448px]">
                  What symptoms did you have? What was the western medical
                  diagnosis and/or the eastern medicine diagnosis?
                </h3>
              </div>
              <p class="text-[#1F2933A3] font-medium text-[20px] rounded-[24px]">
                Join Sarah as she opens up about her battle with depression,
                offering insights into the healing power of community and
                self-care.
              </p>
              <div class="flex items-center mt-[16px] gap-[8px]">
                <a> Listen now </a>

                <img class="w-[5px] h-[10px]" src="../../assets/images/mini-right-icon.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-[40px] pb-[104px]">
        <router-link to="/case-studies">
          <button class="pt-[32px] pb-[32px] pl-[64px] pr-[64px] bg-[#1F2933] rounded-[40px] text-[#FFFFFF]">View All
            Conditions</button>
        </router-link>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import rightIcon from "../../assets/images/rigth-icon.png";
import leftIcon from "../../assets/images/left-icon.png";

const categories = [
  "Cancer",
  "Chronic Pain",
  "High Blood Pressure",
  "Diabetes",
  "Skin issues",
  "Depression",
  "Suicidal Thoughts",
];

const filterScroll = ref(null);

const scrollStep = 240;

const scrollFiltersRight = () => {
  filterScroll.value?.scrollBy({ left: scrollStep, behavior: "smooth" });
};

const scrollFiltersLeft = () => {
  filterScroll.value?.scrollBy({ left: -scrollStep, behavior: "smooth" });
};
</script>
<style scoped></style>