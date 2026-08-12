<template>
    <div
        class="relative overflow-hidden  lg:flex-col lg:items-center gap-0 rounded-[0px_40px_40px_40px] flex justify-between" style="background: radial-gradient(43.15% 96.48% at 58.91% 45.43%, #BAD8F1 0%, #B4C0D0 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
">
        <div class="pt-[99px] pb-0 pl-[134px] lg2:pl-[50px] pr-[15px]">
            <div class='max-w-[560px] xs:max-w-[500px] h-[482px]'>
                <p class="font-dm-sans text-[96px] font-normal leading-[96px] tracking-[-0.06em] text-left">MedLink
                    Community</p>
                <p class="font-dm-sans text-[32px] font-normal leading-[32px] tracking-[-0.06em] mt-[32px] text-left">
                    Creating new patient outcomes, one patient at a time</p>
                <p class="font-dm-sans text-[24px] font-normal leading-[28.8px] text-left mt-[20px]">Welcome to a
                    vibrant community where patients and doctors come together to transform healthcare experiences. By
                    joining our community, you're stepping into a space that prioritizes collaboration, support, and
                    innovation in medical care.</p>
            </div>
            <div class="max-w-[435px] h-[80px] flex gap-[8px] rounded-[80px] mt-[50px]">
                <button
                    class="max-w-[243px] h-[80px] p-[32px_64px] gap-[16px] rounded-[40px] bg-[#1F2933] text-[#FFFFFF] font-dm-sans text-[16px] font-semibold leading-[16px] text-left">Learn
                    about us</button>
                <button
                    class="max-w-[184px] h-[80px] p-[32px_64px] gap-[10px] rounded-[40px] font-dm-sans text-[16px] font-semibold leading-[16px] text-left bg-[#DAFF98] text-[#398B39]">Join
                    Us</button>
            </div>
        </div>
        <div
            class="max-w-[780px] w-full bg-center bg-no-repeat h-[780px]"
            :style="{ backgroundImage: `url(${communityImg})` }"
        >
        </div>
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <img src="../../assets/images/clip-path-community.png" alt="">
        </div>

        <div ref="statsRef" class="absolute flex flex-col gap-[160px] lg2:gap-[80px] lg:top-[55%] lg2:right-[10%] lg:!right-[25%] right-[133px] top-[125px]">
            <div class="flex items-center justify-end">
                <div
                    class="w-[263px] h-[263px] rounded-[8px] bg-[#1F293314] backdrop-blur-[24px] p-[32px_24px_24px_24px] flex flex-col gap-[24px]">
                    <div class="flex items-center justify-between">
                        <p class="text-[#E7E7E7] font-dm-sans text-[16px] font-medium leading-[16px] text-left">
                            Statistics</p>
                        <img src="../../assets/images/star-community.png" alt="">
                    </div>
                    <div class="relative flex items-center justify-center h-[117px]">
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
            <div class="flex gap-[16px] lg2:flex-col">
                <div
                    class="w-[263px] h-[120px] rounded-[8px] bg-[#1F293314] backdrop-blur-[24px] p-[16px] flex flex-col gap-[16px]">
                    <p class="font-dm-sans text-[40px] font-medium leading-[40px] text-left text-[#FFFFFF]">{{ healthGoals }}%</p>
                    <p class="font-dm-sans text-[16px] font-medium leading-[16px] text-left text-[#FFFFFF]">achieve
                        their health goals with our help.</p>
                </div>
                <div
                    class="w-[263px] h-[120px] rounded-[8px] bg-[#1F293314] backdrop-blur-[24px] p-[16px] flex flex-col gap-[16px]">
                    <p class="font-dm-sans text-[40px] font-medium leading-[40px] text-left text-[#FFFFFF]">{{ formattedTransformations }}</p>
                    <p class="font-dm-sans text-[16px] font-medium leading-[16px] text-left text-[#FFFFFF]">
                        transformations documented.</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import communityImg from '../../assets/images/community-img.png';

const progress = ref(0);
const healthGoals = ref(0);
const transformations = ref(0);
const statsRef = ref(null);

let observer = null;
let hasAnimated = false;

const progressStroke = computed(() => {
    const totalLength = 140;
    return `${(progress.value / 100) * totalLength} ${totalLength}`;
});

const formattedTransformations = computed(() =>
    `${Math.round(transformations.value).toLocaleString('en-US')}+`
);

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

function animateValue(targetRef, target, duration = 1500) {
    const start = performance.now();

    function step(now) {
        const t = Math.min((now - start) / duration, 1);
        targetRef.value = Math.round(target * easeOutCubic(t));
        if (t < 1) requestAnimationFrame(step);
        else targetRef.value = target;
    }

    requestAnimationFrame(step);
}

function startAnimations() {
    if (hasAnimated) return;
    hasAnimated = true;
    animateValue(progress, 95);
    animateValue(healthGoals, 80);
    animateValue(transformations, 10000, 2000);
}

onMounted(() => {
    observer = new IntersectionObserver(
        (entries) => {
            if (entries.some((entry) => entry.isIntersecting)) {
                startAnimations();
                observer?.disconnect();
            }
        },
        { threshold: 0.3 }
    );

    if (statsRef.value) observer.observe(statsRef.value);
});

onUnmounted(() => observer?.disconnect());
</script>
<style scoped>


</style>