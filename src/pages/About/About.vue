<template>
  <div>
    <Header />
    <section class="bg-[#E4ECF7] rounded-[40px] mt-[16px] px-[80px] xs:px-[20px] py-[100px]">
      <div class="max-w-[1000px] mx-auto">
        <div class="flex items-center gap-[16px] mb-[32px]">
          <div class="py-2 px-4 bg-[#BAD8F14D] rounded-[27px] text-[24px] font-medium text-[#1F2933]">
            About
          </div>
          <h1 class="text-[64px] xs:text-[40px] leading-[1.05] text-[#1F2933]">
            About MedLink
          </h1>
        </div>
        <p class="text-[24px] leading-[32px] text-[#1F2933] max-w-[760px] mb-[24px]">
          MedLink is a community platform where patients and doctors share real healing journeys,
          treatment insights, and peer support.
        </p>
        <p class="text-[20px] leading-[28px] text-[#1F2933A3] max-w-[760px] mb-[48px]">
          We built this experience to make healthcare stories searchable, human, and actionable —
          so people can learn from outcomes that actually happened.
        </p>

        <div class="grid md:grid-cols-3 gap-[20px] mb-[48px]">
          <article
            v-for="item in pillars"
            :key="item.title"
            class="rounded-[24px] bg-white/70 border border-[#1F293314] p-[28px]"
          >
            <h3 class="text-[22px] font-medium text-[#1F2933] mb-[12px]">{{ item.title }}</h3>
            <p class="text-[16px] leading-[24px] text-[#1F2933A3]">{{ item.text }}</p>
          </article>
        </div>

        <div class="flex flex-wrap gap-[12px]">
          <router-link
            to="/case-studies"
            class="px-[48px] py-[28px] rounded-[40px] bg-[#1F2933] text-white font-semibold"
          >
            Explore case studies
          </router-link>
          <router-link
            to="/video-interview"
            class="px-[48px] py-[28px] rounded-[40px] bg-[#DAFF98] text-[#398B39] font-semibold"
          >
            Share your story
          </router-link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";

const pillars = [
  {
    title: "Patient stories",
    text: "Real journeys across conditions — what helped, what didn’t, and what people wish they knew earlier.",
  },
  {
    title: "Clinician insight",
    text: "Doctors contribute context around diagnoses, modalities, and care pathways.",
  },
  {
    title: "Community support",
    text: "A safer space to learn from peers and find practical next steps.",
  },
];
</script>
