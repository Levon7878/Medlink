<template>
  <div class="relative z-50 hidden lg:block focus:outline-none">
    <button @click="toggleMenu"
      class="focus:outline-none w-[56px] h-[56px] p-[16px] gap-[10px] rounded-[40px] bg-[#1F2933] flex items-center justify-center">
      <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1.5H19M1 8.5H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </button>

    <div v-if="isOpen" class="fixed inset-0 flex flex-col items-end pt-[8px] backdrop-blur-24 l2:px-[8px]"
      @click.self="toggleMenu">

      <div class="l2:w-[100%] l2:max-w-[360px]">
        <div class="l2:flex l2:justify-between">
          <img src="../../assets/images/delete-record-popup-img.png" alt="" class="w-[72%]"
            style="filter: brightness(0) saturate(100%) invert(93%) sepia(7%) saturate(2133%) hue-rotate(32deg) brightness(108%) contrast(101%);">
          <div
            class="w-[56px] l2:flex hidden l2:bg-[#1F2933] h-[56px] p-4 gap-[10px] rounded-[40px] border-2 border-[#1F293314] items-center justify-center cursor-pointer"
            @click="toggleMenu">
            <img src="../../assets/images/close.png" alt="close"
              style="filter: brightness(0) saturate(100%) invert(79%) sepia(100%) saturate(2%) hue-rotate(201deg) brightness(107%) contrast(101%);">
          </div>
        </div>
        <div>
          <div class="relative bg-[#DAFF98] px-[16px] pt-[48px] pb-[16px] rounded-[0px_40px_40px_40px]">
            <div class="flex flex-col" :class="{ 'gap-[160px]': !isVisible, 'gap-[0px]': isVisible }">
              <ul>
                <li
                  class="font-dm-sans text-[24px] font-medium leading-[28.8px] tracking[-0.02em] text-left text-[#1F2933] pb-[24px] border-b border-[#1F293314]">
                  <router-link to="/" @click="toggleOverflow">
                    Home
                  </router-link>
                </li>
                <li
                  class="font-dm-sans text-[24px] font-medium leading-[28.8px] tracking[-0.02em] text-left text-[#1F2933] pb-[24px] pt-[24px] border-b border-[#1F293314]"
                  @click="toggle">
                  For Patients
                  <div class="pt-[24px]" :class="{ 'hidden': !isVisible, 'block': isVisible }">
                    <ul class="flex flex-col gap-[20px] h-[285px] overflow-auto">
                      <li
                        v-for="item in patientLinks"
                        :key="item.to"
                        class="font-dm-sans text-[16px] leading-[24px] text-left text-[#1F2933]"
                        :class="{ 'font-[800] text-[#003b80]': item.featured }"
                      >
                        <router-link :to="item.to" @click="toggleMenu">
                          {{ item.label }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li
                  class="font-dm-sans text-[24px] font-medium leading-[28.8px] tracking[-0.02em] text-left text-[#1F2933] pb-[24px] pt-[24px] border-b border-[#1F293314]">
                  <router-link to="/video-interview" @click=toggleOverflow>
                    For Doctors
                  </router-link>
                </li>
                <li
                  class="font-dm-sans text-[24px] font-medium leading-[28.8px] tracking[-0.02em] text-left text-[#1F2933] pb-[24px] pt-[24px] border-b border-[#1F293314]">
                  <router-link to="/about" @click="toggleOverflow">
                    About Us
                  </router-link>
                </li>
              </ul>
              <button
                class="max-w-[327px] w-[100%] bg-[#1F2933] h-[80px] p-[32px] gap-[10px] rounded-[40px] font-dm-sans text-[16px] font-semibold leading-[16px] text-[#FFFFFF]"
                @click="openPopup">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { conditionPath } from "../../data/conditions";

const isOpen = ref(false);
const isVisible = ref(false);

defineProps({
  openPopup: {
    type: Function,
    required: true,
  },
});

const patientLinks = [
  { label: "Breast Cancer", to: "/breast-cancer", featured: true },
  { label: "IBD", to: conditionPath("ibd") },
  { label: "Migraine", to: conditionPath("migraine") },
  { label: "Multiple Sclerosis (MS)", to: conditionPath("multiple-sclerosis") },
  { label: "Rheumatoid Arthritis", to: conditionPath("rheumatoid-arthritis") },
  { label: "Type 2 Diabetes", to: conditionPath("type-2-diabetes") },
  { label: "Sponsored Topics", to: "/case-studies" },
  { label: "Acid Reflux", to: conditionPath("acid-reflux") },
  { label: "ADHD", to: conditionPath("adhd") },
  { label: "Allergies", to: conditionPath("allergies") },
  { label: "Alzheimer’s & Dementia", to: conditionPath("alzheimers-dementia") },
  { label: "Bipolar Disorder", to: conditionPath("bipolar-disorder") },
  { label: "Cancer", to: conditionPath("cancer") },
  { label: "Crohn’s Disease", to: conditionPath("crohns-disease") },
  { label: "Chronic Pain", to: conditionPath("chronic-pain") },
  { label: "Cold & Flu", to: conditionPath("cold-flu") },
  { label: "COPD", to: conditionPath("copd") },
  { label: "Depression", to: conditionPath("depression") },
  { label: "Fibromyalgia", to: conditionPath("fibromyalgia") },
  { label: "Heart Disease", to: conditionPath("heart-disease") },
  { label: "High Cholesterol", to: conditionPath("high-cholesterol") },
  { label: "HIV", to: conditionPath("hiv") },
  { label: "Hypertension", to: conditionPath("hypertension") },
  { label: "IPF", to: conditionPath("ipf") },
  { label: "Osteoarthritis", to: conditionPath("osteoarthritis") },
  { label: "Psoriasis", to: conditionPath("psoriasis") },
  { label: "Skin Disorders Care", to: conditionPath("skin-disorders-care") },
  { label: "STDs", to: conditionPath("stds") },
];

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

const toggle = () => {
  isVisible.value = !isVisible.value;
};

onMounted(() => {
  isOpen.value = false;
});

const toggleOverflow = () => {
  isOpen.value = false;
};

watch(isOpen, (newValue) => {
  document.body.style.overflow = newValue ? "hidden" : "auto";
});
</script>

<style scoped></style>