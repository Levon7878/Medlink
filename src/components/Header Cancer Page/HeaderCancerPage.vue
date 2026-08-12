<template>
    <div
        class="relative bg-[#B4C0D0] bg-cover bg-no-repeat bg-right w-full h-[881px] rounded-[0px_24px_24px_24px]"
        :style="{ backgroundImage: `url(${participantImg})` }"
    >
        <div class="flex pl-[136px] pt-[210px] xs:p-[0px] background: linear-gradient(270deg, rgba(180, 192, 208, 0) 0%, #B4C0D0 58.87%) h-[100%] rounded-[0px_0px_0px_24px] max-w-[1130px] bg-gradient-to-l from-transparent to-[#B4C0D0]" style="background: linear-gradient(270deg, rgba(180, 192, 208, 0) 0%, #B4C0D0 58.87%);">
                <div class=" flex flex-col gap-[48px]">
                    <p class=" font-dm-sans text-[96px] font-normal leading-[96px] tracking-[-0.06em] text-left text-[#1F2933]">Breast Cancer Healing Journeys Participant Summary  </p>
                   <div class="max-w-[517px]">
                       <p class="font-dm-sans text-[24px] font-normal leading-[28.8px] tracking-[-0.02em] text-left">Welcome to our comprehensive analysis of breast cancer healing journeys.<span class="text-[#1F2933A3]"> This page delves into real stories, offering insights into effective healing methods and personal experiences.</span></p>
                   </div>
                </div>
            </div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img src="../../assets/images/clip-path-community.png" alt="">
        </div>
    </div>
</template>

<script setup>
import participantImg from "../../assets/images/participant.png";
</script>

<style scoped>
</style>
