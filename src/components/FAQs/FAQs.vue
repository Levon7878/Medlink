<template>
  <div class="mt-[150px]">
    <div class="flex flex-col items-center gap-[40px]">
      <div class="flex items-center gap-[16px]">
        <div
          class="w-[63px] h-[45px] p-[8px_16px] rounded-[27px] border border-gray-300 flex items-center justify-center bg-[#1F293314] text-[#1F2933] font-medium text-[24px] leading-[28.8px]"
        >
          04
        </div>
        <p class="font-normal text-[64px] leading-[64px] text-[#1F2933]">FAQs</p>
      </div>
      <div class="w-[280px] h-[78px] p-[4px] rounded-[40px] border border-gray-300 flex items-center">
        <button
          type="button"
          class="flex-1 h-[70px] rounded-[40px] font-medium text-[16px] transition"
          :class="activeTab === 'all' ? 'bg-[#DAFF98] text-[#398B39]' : 'text-[#1F2933]'"
          @click="activeTab = 'all'"
        >
          All
        </button>
        <button
          type="button"
          class="flex-1 h-[70px] rounded-[40px] font-medium text-[16px] transition"
          :class="activeTab === 'practitioner' ? 'bg-[#DAFF98] text-[#398B39]' : 'text-[#1F2933]'"
          @click="activeTab = 'practitioner'"
        >
          Practitioner
        </button>
      </div>
    </div>
    <div class="flex flex-col items-center gap-[8px] mt-[40px]">
      <div v-for="(item, index) in filteredData" :key="index" class="w-full flex justify-center">
        <FAQsItem :question="item.question" :answer="item.answer" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import FAQsItem from "./FAQsItem.vue";

const activeTab = ref("all");

const data = [
  {
    category: "all",
    question: "What is the purpose of this community?",
    answer:
      "MedLink connects patients and doctors so people can learn from real healing journeys, treatment insights, and peer support.",
  },
  {
    category: "all",
    question: "How can I join the community?",
    answer:
      "Click Join Us or Log in, create an account, and start exploring case studies or sharing your own story.",
  },
  {
    category: "all",
    question: "Are there any membership fees?",
    answer:
      "Browsing community stories is free in this demo. Future premium clinician tools may be offered separately.",
  },
  {
    category: "practitioner",
    question: "Can I contribute content to the site?",
    answer:
      "Yes. Practitioners can submit case insights and patients can record video interviews from the For Doctors flow.",
  },
  {
    category: "all",
    question: "How do I participate in events and webinars?",
    answer:
      "Watch the home page Empower Your Health Journey section for upcoming event-style resources and community sessions.",
  },
  {
    category: "practitioner",
    question: "Are there guidelines for writing or recording my journey?",
    answer:
      "Keep stories factual, avoid sharing identifiable third-party medical data, and focus on what helped or didn’t help.",
  },
  {
    category: "all",
    question: "How is my privacy protected?",
    answer:
      "This portfolio demo stores account data in your browser only. See Privacy Policy for details.",
  },
  {
    category: "practitioner",
    question: "Can I edit or delete my story after posting?",
    answer:
      "In a production version you would manage stories from your dashboard. This demo focuses on the recording and browsing experience.",
  },
];

const filteredData = computed(() => {
  if (activeTab.value === "all") return data;
  return data.filter((item) => item.category === "practitioner");
});
</script>
