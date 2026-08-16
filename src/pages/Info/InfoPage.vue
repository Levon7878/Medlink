<template>
  <div>
    <Header />
    <section class="bg-[#E4ECF7] rounded-[40px] mt-[16px] px-[80px] xs:px-[20px] py-[100px]">
      <div class="max-w-[720px] mx-auto">
        <h1 class="text-[56px] xs:text-[36px] leading-[1.1] text-[#1F2933] mb-[16px]">
          {{ title }}
        </h1>
        <p class="text-[20px] leading-[28px] text-[#1F2933A3] mb-[40px]">
          {{ intro }}
        </p>

        <form
          v-if="showForm"
          class="rounded-[24px] bg-white/80 border border-[#1F293314] p-[32px] flex flex-col gap-[16px]"
          @submit.prevent="onSubmit"
        >
          <input
            v-model="name"
            required
            type="text"
            placeholder="Your name"
            class="p-3 rounded-[12px] border border-[#1F293314] outline-none focus:border-[#1F2933]"
          />
          <input
            v-model="email"
            required
            type="email"
            placeholder="Email"
            class="p-3 rounded-[12px] border border-[#1F293314] outline-none focus:border-[#1F2933]"
          />
          <textarea
            v-model="message"
            required
            rows="5"
            placeholder="How can we help?"
            class="p-3 rounded-[12px] border border-[#1F293314] outline-none focus:border-[#1F2933]"
          />
          <p v-if="sent" class="text-[#398B39] font-medium">
            Thanks! Your message was saved locally for this demo.
          </p>
          <button
            type="submit"
            class="self-start px-[40px] py-[20px] rounded-[40px] bg-[#1F2933] text-white font-semibold"
          >
            Send message
          </button>
        </form>

        <div
          v-else
          class="rounded-[24px] bg-white/80 border border-[#1F293314] p-[32px] text-[18px] leading-[28px] text-[#1F2933]"
        >
          <p v-for="(paragraph, index) in paragraphs" :key="index" class="mb-[16px]">
            {{ paragraph }}
          </p>
          <router-link to="/" class="text-[#398B39] font-semibold">← Back to home</router-link>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import Header from "../../components/Header/Header.vue";
import Footer from "../../components/Footer/Footer.vue";

const route = useRoute();
const name = ref("");
const email = ref("");
const message = ref("");
const sent = ref(false);

const pageMap = {
  contact: {
    title: "Contact Us",
    intro: "Questions about MedLink, partnerships, or your story? Send us a note.",
    showForm: true,
  },
  privacy: {
    title: "Privacy Policy",
    intro: "How MedLink handles community content and account data in this demo.",
    paragraphs: [
      "MedLink stores demo account details in your browser localStorage only.",
      "We do not transmit passwords to a remote server in this portfolio demo.",
      "Do not use real production credentials on this site.",
    ],
  },
  terms: {
    title: "Terms of Use",
    intro: "Guidelines for using the MedLink community demo.",
    paragraphs: [
      "Content is for demonstration and educational portfolio purposes.",
      "Stories and medical insights are illustrative and not clinical advice.",
      "By using this demo you agree not to upload sensitive real-world patient data.",
    ],
  },
  advertising: {
    title: "Advertising Policy",
    intro: "Our approach to sponsored topics and transparent labeling.",
    paragraphs: [
      "Sponsored topics are clearly labeled when present.",
      "Editorial case studies remain independent from advertising partners.",
      "This demo does not currently run live ad campaigns.",
    ],
  },
  "do-not-sell": {
    title: "Do Not Sell or Share My Personal Information",
    intro: "Your privacy choices for this MedLink demo.",
    paragraphs: [
      "This portfolio demo does not sell personal information.",
      "Session data stays in your browser and can be cleared anytime.",
      "Clear site data in your browser settings to remove demo accounts.",
    ],
  },
  sitemap: {
    title: "Sitemap",
    intro: "Key pages available in the MedLink demo.",
    paragraphs: [
      "Home (/) · About (/about) · Case Studies (/case-studies) · Breast Cancer (/breast-cancer)",
      "Video Interview (/video-interview) · Conditions (/conditions/:slug)",
      "Contact (/contact) · Privacy (/privacy) · Terms (/terms)",
    ],
  },
};

const config = computed(() => pageMap[route.meta.pageKey] || pageMap.contact);
const title = computed(() => config.value.title);
const intro = computed(() => config.value.intro);
const showForm = computed(() => !!config.value.showForm);
const paragraphs = computed(() => config.value.paragraphs || []);

const onSubmit = () => {
  const payload = {
    name: name.value,
    email: email.value,
    message: message.value,
    at: new Date().toISOString(),
  };
  const existing = JSON.parse(localStorage.getItem("medlink_contact_messages") || "[]");
  existing.push(payload);
  localStorage.setItem("medlink_contact_messages", JSON.stringify(existing));
  sent.value = true;
  name.value = "";
  email.value = "";
  message.value = "";
};
</script>
