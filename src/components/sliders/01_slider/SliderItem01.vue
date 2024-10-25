<template>
    <div class="w-[518px] h-[447px] bg-[#E4ECF7] p-[32px] gap-[10px] flex flex-col rounded-[16px]">
        <div>
            <img :src="imageSrc" alt="Access Resources">
        </div>
        <div>
            <p class="font-dm-sans text-[32px] font-medium leading-[38.4px] tracking-[-0.02em] text-left text-[#1F2933] mt-[32px]">
                {{ title }}
            </p>
        </div>
        <div>
            <p class="font-dm-sans text-[18px] font-medium leading-[25.2px] text-left text-[#1F2933A3]">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    imageSrc: {
        type: String,
        required: true,
    },
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

<style>
</style>
