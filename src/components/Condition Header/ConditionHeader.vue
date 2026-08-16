<template>
  <div
    class="relative bg-[#B4C0D0] bg-cover bg-no-repeat bg-right w-full min-h-[881px] rounded-[0px_24px_24px_24px]"
    :style="{ backgroundImage: `url(${participantImg})` }"
  >
    <div
      class="flex pl-[136px] pt-[210px] xs:p-[20px] h-full min-h-[881px] rounded-[0px_0px_0px_24px] max-w-[1130px]"
      style="background: linear-gradient(270deg, rgba(180, 192, 208, 0) 0%, #B4C0D0 58.87%)"
    >
      <div class="flex flex-col gap-[48px]">
        <p
          class="font-dm-sans text-[96px] xs:text-[48px] xs:leading-[52px] font-normal leading-[96px] tracking-[-0.06em] text-left text-[#1F2933] max-w-[700px]"
        >
          {{ title }}
        </p>
        <div class="max-w-[517px]">
          <p
            class="font-dm-sans text-[24px] xs:text-[18px] font-normal leading-[28.8px] tracking-[-0.02em] text-left text-[#1F2933]"
          >
            {{ description }}
          </p>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <img src="../../assets/images/clip-path-community.png" alt="" />
    </div>
  </div>
</template>

<script setup>
import participantImg from "../../assets/images/participant.png";

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
</script>
