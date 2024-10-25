<template>
    <div
        class="relative overflow-hidden w-[1408px] h-[788px] gap-0 rounded-[0px_40px_40px_40px] bg-[radial-gradient(circle_at_58.91%_45.43%,_#BAD8F1_0%,_#B4C0D0_100%)] flex">
        <div class="pt-[99px] pb-0 pl-[134px]">
            <div class='w-[560px] h-[482px]'>
                <p class="font-dm-sans text-[96px] font-normal leading-[96px] tracking-[-0.06em] text-left">MedLink
                    Community</p>
                <p class="font-dm-sans text-[32px] font-normal leading-[32px] tracking-[-0.06em] mt-[32px] text-left">
                    Creating new patient outcomes, one patient at a time</p>
                <p class="font-dm-sans text-[24px] font-normal leading-[28.8px] text-left mt-[20px]">Welcome to a
                    vibrant community where patients and doctors come together to transform healthcare experiences. By
                    joining our community, you're stepping into a space that prioritizes collaboration, support, and
                    innovation in medical care.</p>
            </div>
            <div class="w-[435px] h-[80px] flex gap-[8px] rounded-[80px] mt-[50px]">
                <button
                    class="w-[243px] h-[80px] p-[32px_64px] gap-[16px] rounded-[40px] bg-[#1F2933] text-[#FFFFFF] font-dm-sans text-[16px] font-semibold leading-[16px] text-left">Learn
                    about us</button>
                <button
                    class="w-[184px] h-[80px] p-[32px_64px] gap-[10px] rounded-[40px] font-dm-sans text-[16px] font-semibold leading-[16px] text-left bg-[#DAFF98] text-[#398B39]">Join
                    Us</button>
            </div>
        </div>
        <div class="w-[780px] h-[780px] bg-[url(src/assets/images/community-img.png)]">

        </div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img src="../../assets/images/clip-path-community.png" alt="">
        </div>

        <div class="absolute flex flex-col gap-[160px] right-[133px] top-[125px]">
            <div class="flex items-center justify-end">
                <div
                    class="w-[263px] h-[263px] rounded-[8px] bg-[#1F293314] backdrop-blur-[24px] p-[32px_24px_24px_24px] flex flex-col gap-[24px]">
                    <div class="flex items-center justify-between">
                        <p class="text-[#E7E7E7] font-dm-sans text-[16px] font-medium leading-[16px] text-left">
                            Statistics</p>
                        <img src="../../assets/images/star-community.png" alt="">
                    </div>
                    <div class="flex items-center justify-center h-screen">
                        <svg class="w-48 h-[117px]" viewBox="0 0 100 50">
                            <path d="M 5 45 A 45 45 0 0 1 95 45" fill="none" stroke="#f3f4f6" stroke-width="10" />
                            <path d="M 5 45 A 45 45 0 0 1 95 45" fill="none" stroke="#DAFF98" stroke-width="10"
                                :stroke-dasharray="progressStroke" stroke-linecap="round" />
                        </svg>
                        <div class="absolute text-[#F5F5F5] font-dm-sans text-[40px] font-medium leading-[40px] text-center">
                            {{ progress }}%
                        </div>
                    </div>
                    <div class="flex items-center gap-[16px]">
                        <div class="w-[16px] h-[16px] rounded-[50%] bg-[#DAFF98]"></div>
                        <p class="font-dm-sans text-[16px] font-medium leading-[16px] text-left text-[#FFFFFF]">User
                            satisfaction rate.</p>
                    </div>
                </div>
            </div>
            <div class="flex gap-[16px]">
                <div
                    class="w-[263px] h-[120px] rounded-[8px] bg-[#1F293314] backdrop-blur-[24px] p-[16px] flex flex-col gap-[16px]">
                    <p class="font-dm-sans text-[40px] font-medium leading-[40px] text-left text-[#FFFFFF]">80%</p>
                    <p class="font-dm-sans text-[16px] font-medium leading-[16px] text-left text-[#FFFFFF]">achieve
                        their health goals with our help.</p>
                </div>
                <div
                    class="w-[263px] h-[120px] rounded-[8px] bg-[#1F293314] backdrop-blur-[24px] p-[16px] flex flex-col gap-[16px]">
                    <p class="font-dm-sans text-[40px] font-medium leading-[40px] text-left text-[#FFFFFF]">10,000+</p>
                    <p class="font-dm-sans text-[16px] font-medium leading-[16px] text-left text-[#FFFFFF]">
                        transformations documented.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';

const progress = ref(95);

const progressStroke = computed(() => {
    const totalLength = 140;
    return `${(progress.value / 100) * totalLength} ${totalLength}`;
});
</script>
<style></style>