<template>
  <div class="bg-[#1F2933] rounded-[40px] mt-[16px] relative overflow-hidden">
    <div class="pt-[115px]  ml-[160px] xs:m-0">
      <div class="flex items-center gap-[16px]">
        <div class="w-[63px] h-[45px] p-2 gap-2 rounded-[27px] border-l bg-[#BAD8F14D] text-[#FFFFFF] font-medium text-[24px] leading-[28.8px] tracking[-0.02em] text-center border border-[#FFFFFF29]">03</div>
        <p class="font-normal text-6xl leading-[64px] tracking[-0.04em] text-left text-[#FFFFFF]">Video Showcase</p>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div class="w-full max-w-[1550px] lg:max-w-[1200px] relative overflow-hidden">
        <div class="flex gap-[20px] transition-transform duration-800" :style="{ transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)` }">
          <RemarkableItem
            v-for="(item, index) in latestObj"
            :key="index"
            :image="item.image"
            :text="item.text"
            :description="item.description"
            class="flex-shrink-0" 
            :style="{ width: itemsPerSlide === 1 ? '100%' : 'calc(50% - 10px)' }"
          />
        </div>
      </div>
    </div>
    <div>
      <div class="p-[0px_134px] flex justify-between">
        <div @click="prevSlide" class="flex items-center p-[20px_32px] gap-[10px] cursor-pointer">
          <img src="../../assets/images/left-icon.png" alt="Previous" />
          <p class="text-[#FFFFFF] text-[16px] font-semibold leading-[16px]">Prev</p>
        </div>
        <div @click="nextSlide" class="flex items-center p-[20px_32px] gap-[10px] cursor-pointer">
          <p class="text-[#FFFFFF] text-[16px] font-semibold leading-[16px]">Next</p>
          <img src="../../assets/images/rigth-icon.png" alt="Next" />
        </div>
      </div>
      <div class="flex items-center justify-center">
        <img src="../../assets/images/rectangle-end.png" alt="Decoration" />
      </div>
    </div>
  </div>
</template>

<script setup>
import RemarkableItem from "./RemarkableItem.vue";
import { ref, computed, onMounted } from "vue";
import doctorsImg from "../../assets/images/doctors.jpeg";
import doctorImg from "../../assets/images/doctor.jpeg";

const latestObj = ref([
  {
    image: doctorsImg,
    text: "Summary:",
    description: "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
  {
    image: doctorImg,
    text: "Summary:",
    description: "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
  {
    image: doctorsImg,
    text: "Summary:",
    description: "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
  {
    image: doctorImg,
    text: "Summary:",
    description: "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
  {
    image: doctorsImg,
    text: "Summary:",
    description: "Those who have successfully navigated their healing journey often advise others to seek multiple opinions, stay proactive in managing their health, and explore integrative therapies that align with their values and lifestyle. Building a supportive community and prioritizing self-care are also frequently emphasized as key components of recovery.",
  },
]);

const currentSlide = ref(0);
const itemsPerSlide = ref(2); // По умолчанию показываем 2 элемента

const updateItemsPerSlide = () => {
  itemsPerSlide.value = window.innerWidth < 1200 ? 1 : 2;
};

onMounted(() => {
  updateItemsPerSlide();
  window.addEventListener('resize', updateItemsPerSlide);
});

const totalSlides = computed(() => Math.ceil(latestObj.value.length / itemsPerSlide.value));

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides.value; 
};

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? totalSlides.value - 1 : currentSlide.value - 1; 
};
</script>

<style scoped>
/* Добавьте дополнительные стили, если необходимо */
</style>
