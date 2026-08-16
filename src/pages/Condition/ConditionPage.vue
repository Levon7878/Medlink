<template>
  <div v-if="condition">
    <Header />
    <ConditionHeader :title="condition.title" :description="condition.description" />

    <section class="max-w-[1200px] mx-auto px-[40px] xs:px-[20px] py-[100px]">
      <div class="flex items-center gap-[16px] mb-[32px]">
        <div
          class="py-2 px-4 bg-[#BAD8F14D] rounded-[27px] text-[#1F2933] font-medium text-[24px] leading-[28.8px]"
        >
          01
        </div>
        <h2 class="text-[48px] xs:text-[32px] leading-[1.1] text-[#1F2933]">
          {{ condition.title }} Case Studies
        </h2>
      </div>

      <p class="text-[20px] leading-[28px] text-[#1F2933A3] max-w-[720px] mb-[48px]">
        Explore MedLink Community stories, treatment insights, and recovery journeys
        related to {{ condition.title.toLowerCase() }}.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        <article
          v-for="(card, index) in cards"
          :key="index"
          class="rounded-[24px] border border-[#1F293314] bg-white p-[32px] flex flex-col gap-[16px]"
        >
          <h3 class="text-[24px] font-medium leading-[28.8px] text-[#1F2933]">
            {{ card.title }}
          </h3>
          <p class="text-[18px] leading-[25px] text-[#1F2933A3]">
            {{ card.text }}
          </p>
          <router-link
            to="/case-studies"
            class="text-[#1F2933] font-semibold inline-flex items-center gap-[8px] mt-auto"
          >
            View case studies
            <img class="w-[5px] h-[10px]" src="../../assets/images/mini-right-icon.png" alt="" />
          </router-link>
        </article>
      </div>

      <div class="flex flex-wrap gap-[12px] mt-[48px]">
        <router-link
          to="/case-studies"
          class="px-[48px] py-[28px] rounded-[40px] bg-[#1F2933] text-white font-semibold"
        >
          Browse all case studies
        </router-link>
        <router-link
          to="/video-interview"
          class="px-[48px] py-[28px] rounded-[40px] bg-[#DAFF98] text-[#398B39] font-semibold"
        >
          Share your story
        </router-link>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";
import ConditionHeader from "../../components/Condition Header/ConditionHeader.vue";
import { getConditionBySlug } from "../../data/conditions";

const route = useRoute();

const condition = computed(() => getConditionBySlug(route.params.slug));

const cards = computed(() => {
  const title = condition.value?.title || "Condition";
  return [
    {
      title: `Patient journeys with ${title}`,
      text: `Real stories from people managing ${title.toLowerCase()}, including what helped and what didn’t.`,
    },
    {
      title: "Treatment insights",
      text: "A look at modalities, success patterns, and clinician notes shared across the MedLink Community.",
    },
    {
      title: "Community support",
      text: "Connect with patients and doctors discussing practical tips, recovery milestones, and daily care.",
    },
    {
      title: "Next steps",
      text: "Browse related case studies or contribute your own experience through a video interview session.",
    },
  ];
});
</script>
