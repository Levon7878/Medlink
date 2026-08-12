<template>
    <div
        class="relative bg-[#B4C0D0] bg-cover bg-no-repeat bg-right w-full h-[881px] rounded-[0px_24px_24px_24px]"
        :style="{ backgroundImage: `url(${breastCancerImg})` }"
    >
        <div class="flex pl-[136px] lg3:pl-[0px] lg3:justify-center pt-[210px] bg-gradient-to-l from-transparent to-[#B4C0D0]  h-[100%] rounded-[0px_0px_0px_24px]">
            <div class="flex flex-col gap-[48px]">
                <p class="max-w-[430px] lg3:max-w-[600px] font-dm-sans text-[96px] font-normal leading-[96px] tracking-[-0.06em] text-left text-[#1F2933]">Breast Cancer</p>
                <p class="max-w-[454px] font-dm-sans text-[24px] font-normal leading-[28.8px] tracking-[-0.02em] text-left">Lorem ipsum dolor sit amet consectetur. Sed interdum enim at eget <span class="text-[#1F2933A3]"> massa rhoncus quis eu risus. Quisque praesent justo.</span></p>
            </div>
        </div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img src="../../assets/images/clip-path-community.png" alt="">
        </div>
    </div>
</template>

<script setup>
import breastCancerImg from "../../assets/images/BreastCancer.png";
</script>

<style scoped>
</style>
