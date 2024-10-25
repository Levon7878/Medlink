<template>
  <div 
    class="relative overflow-hidden w-full h-full pl-[134px] mt-[150px]"
    
  >
  <div class="flex gap-[368px] items-center" >
    <div class="flex gap-[16px]">
      <div class="w-[57px] h-[45px] p-[8px_16px] gap-[10px] rounded-[27px] border-t border-l border-r border-b-0 bg-[#BAD8F14D] border border-solid text-[#1F2933] font-dm-sans text-[24px] font-medium leading-[28.8px] text-left border-[#1F293314]">
        01
      </div>
      <p class="text-[#1F2933] font-dm-sans text-[64px] font-normal leading-[64px] tracking-[-0.04em] text-left w-[457px]">Empower Your Health Journey</p>
    </div>
    <div>
      <p class="font-dm-sans text-[20px] font-medium leading-[24px] text-left text-[#1F2933A3] w-[242px] h-[48px]">Guidance, Inspiration, and Understanding</p>
    </div>
  </div>
  <div class="overflow-hidden max-w-[1300px]" @wheel.prevent="handleScroll">
    <div 
      class="flex transition-transform duration-300 gap-[40px] mt-[60px]" 
      :style="{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }" 
      
    >
      <div 
        v-for="(slide, index) in slides" 
        :key="index" 
        class="flex-shrink-0" 
      >
        <SliderItem01 
          :imageSrc="slide.image" 
          :title="slide.title" 
          :description="slide.description" 
          :class="{ 'active-slide': index === currentIndex }" 
        />
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SliderItem01 from './SliderItem01.vue';

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0); 

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length;
};

const handleScroll = (event) => {
  if (event.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
};
</script>

<style>
.flex-shrink-0 {
  transition: transform 0.3s ease;
}

.active-slide {
  transform: scale(0.95); 
  z-index: 10; 
}
</style>
