<template>
  <div class="relative overflow-hidden w-full h-full mt-[150px]">
    <div class="flex items-center justify-around xs:flex-wrap gap-[10px]">
      <div class="flex gap-[16px]">
        <div
          class="w-[57px] h-[45px] p-[8px_16px] gap-[10px] rounded-[27px] border-t border-l border-r border-b-0 bg-[#BAD8F14D] border border-solid text-[#1F2933] font-dm-sans text-[24px] font-medium leading-[28.8px] text-left border-[#1F293314]"
        >
          01
        </div>
        <p
          class="text-[#1F2933] font-dm-sans text-[64px] font-normal leading-[64px] tracking-[-0.04em] text-left max-w-[457px]"
        >
          Empower Your Health Journey
        </p>
      </div>
      <div>
        <p
          class="font-dm-sans text-[20px] font-medium leading-[24px] text-left text-[#1F2933A3] max-w-[242px] h-[48px]"
        >
          Guidance, Inspiration, and Understanding
        </p>
      </div>
    </div>
    <div class="flex items-center justify-center">
      <div
        class="max-w-[1300px] overflow-hidden cursor-grab select-none active:cursor-grabbing"
        @wheel.prevent="handleScroll"
        @mousedown="onDragStart"
        @touchstart.passive="onDragStart"
      >
        <div
          class="flex gap-[40px] mt-[60px] transition-transform duration-300"
          :class="{ '!transition-none': isDragging }"
          :style="trackStyle"
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
  </div>
</template>

<script setup>
import { ref, computed, onUnmounted } from "vue";
import SliderItem01 from "./SliderItem01.vue";

const props = defineProps({
  slides: {
    type: Array,
    required: true,
  },
});

const currentIndex = ref(0);
const isDragging = ref(false);
const dragOffset = ref(0);
const dragStartX = ref(0);

const trackStyle = computed(() => ({
  transform: `translateX(calc(-${currentIndex.value * (100 / 3)}% + ${dragOffset.value}px))`,
}));

const getClientX = (event) => {
  if (event.touches?.length) return event.touches[0].clientX;
  if (event.changedTouches?.length) return event.changedTouches[0].clientX;
  return event.clientX;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.slides.length;
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.slides.length) % props.slides.length;
};

const handleScroll = (event) => {
  if (event.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }
};

const onDragMove = (event) => {
  if (!isDragging.value) return;

  if (event.type === "touchmove") {
    event.preventDefault();
  }

  dragOffset.value = getClientX(event) - dragStartX.value;
};

const onDragEnd = () => {
  if (!isDragging.value) return;

  const threshold = 50;

  if (dragOffset.value < -threshold) {
    nextSlide();
  } else if (dragOffset.value > threshold) {
    prevSlide();
  }

  isDragging.value = false;
  dragOffset.value = 0;

  document.removeEventListener("mousemove", onDragMove);
  document.removeEventListener("mouseup", onDragEnd);
  document.removeEventListener("touchmove", onDragMove);
  document.removeEventListener("touchend", onDragEnd);
};

const onDragStart = (event) => {
  if (event.type === "mousedown" && event.button !== 0) return;

  isDragging.value = true;
  dragStartX.value = getClientX(event);
  dragOffset.value = 0;

  document.addEventListener("mousemove", onDragMove);
  document.addEventListener("mouseup", onDragEnd);
  document.addEventListener("touchmove", onDragMove, { passive: false });
  document.addEventListener("touchend", onDragEnd);
};

onUnmounted(() => {
  document.removeEventListener("mousemove", onDragMove);
  document.removeEventListener("mouseup", onDragEnd);
  document.removeEventListener("touchmove", onDragMove);
  document.removeEventListener("touchend", onDragEnd);
});
</script>

<style scoped>
.flex-shrink-0 {
  transition: transform 0.3s ease;
}

.active-slide {
  transform: scale(0.95);
  z-index: 10;
}
</style>
