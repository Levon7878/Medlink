<template>
  <button
    type="button"
    class="w-[1140px] max-w-full p-[24px] gap-[24px] xs:max-w-[327px] rounded-[32px] flex justify-between border border-[#B4C0D0] cursor-pointer text-left bg-transparent transition-colors"
    :class="isOpen ? 'bg-[#E4ECF7] items-start' : 'items-center'"
    @click="toggleAnswer"
  >
    <div class="flex flex-col gap-[24px] flex-1 pr-[16px]">
      <p class="font-medium text-[24px] xs:max-w-[284px] leading-[28.8px] tracking-[-0.02em] text-left text-[#1F2933]">
        {{ question }}
      </p>
      <p v-if="isOpen" class="text-[18px] leading-[26px] text-[#1F2933A3]">
        {{ answer }}
      </p>
    </div>
    <div
      class="w-[48px] xs:w-[70px] xs:h-[70px] h-[48px] shrink-0 rounded-[40px] border border-[#B4C0D0] flex items-center justify-center"
      :class="{ 'bg-[#1F2933]': isOpen }"
    >
      <img v-if="isOpen" src="../../assets/images/minus.png" alt="Collapse" />
      <img v-else src="../../assets/images/plus.png" alt="Expand" />
    </div>
  </button>
</template>

<script setup>
import { ref } from "vue";

defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);

const toggleAnswer = () => {
  isOpen.value = !isOpen.value;
};
</script>
