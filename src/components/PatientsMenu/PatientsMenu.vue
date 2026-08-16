<template>
  <div class="absolute z-10 right-[160px] top-[80px]" :class="{ hidden: !isOpen }">
    <div class="max-w-[1140px] p-[40px] rounded-[24px] bg-[#FFFFFF]">
      <div>
        <h3 class="font-medium text-[24px] leading-[32px] text-customGray">
          Featured
        </h3>
        <div class="w-full border mt-[20px]"></div>
      </div>
      <div class="flex gap-[118.33px] mt-[20px]">
        <div class="max-w-[176px] flex flex-col gap-[20px]">
          <router-link
            v-for="item in columns[0]"
            :key="item.to"
            :to="item.to"
            class="font-normal leading-[24px] text-customGray text-[16px] hover:text-[#003b80] hover:font-[800]"
            :class="{ 'font-[800] text-[#003b80]': item.featured }"
            @click="$emit('close')"
          >
            {{ item.label }}
          </router-link>
        </div>
        <div class="max-w-[176px] flex flex-col gap-[20px]">
          <router-link
            v-for="item in columns[1]"
            :key="item.to"
            :to="item.to"
            class="font-normal leading-[24px] text-customGray text-[16px] hover:text-[#003b80]"
            @click="$emit('close')"
          >
            {{ item.label }}
          </router-link>
        </div>
        <div class="max-w-[176px] flex flex-col gap-[20px]">
          <router-link
            v-for="item in columns[2]"
            :key="item.to"
            :to="item.to"
            class="font-normal leading-[24px] text-customGray text-[16px] hover:text-[#003b80]"
            @click="$emit('close')"
          >
            {{ item.label }}
          </router-link>
        </div>
        <div class="max-w-[176px] flex flex-col gap-[20px]">
          <router-link
            v-for="item in columns[3]"
            :key="item.to"
            :to="item.to"
            class="font-normal leading-[24px] text-customGray text-[16px] hover:text-[#003b80]"
            @click="$emit('close')"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
      <div class="mt-[40px]">
        <router-link
          to="/case-studies"
          class="inline-block bg-customGray text-white p-[20px_32px] rounded-[40px]"
          @click="$emit('close')"
        >
          Read More
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { conditionPath } from "../../data/conditions";

defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

defineEmits(["close"]);

const columns = [
  [
    { label: "Breast Cancer", to: "/breast-cancer", featured: true },
    { label: "IBD", to: conditionPath("ibd") },
    { label: "Migraine", to: conditionPath("migraine") },
    { label: "Multiple Sclerosis (MS)", to: conditionPath("multiple-sclerosis") },
    { label: "Rheumatoid Arthritis", to: conditionPath("rheumatoid-arthritis") },
    { label: "Type 2 Diabetes", to: conditionPath("type-2-diabetes") },
    { label: "Sponsored Topics", to: "/case-studies" },
  ],
  [
    { label: "Acid Reflux", to: conditionPath("acid-reflux") },
    { label: "ADHD", to: conditionPath("adhd") },
    { label: "Allergies", to: conditionPath("allergies") },
    { label: "Alzheimer’s & Dementia", to: conditionPath("alzheimers-dementia") },
    { label: "Bipolar Disorder", to: conditionPath("bipolar-disorder") },
    { label: "Cancer", to: conditionPath("cancer") },
    { label: "Crohn’s Disease", to: conditionPath("crohns-disease") },
  ],
  [
    { label: "Chronic Pain", to: conditionPath("chronic-pain") },
    { label: "Cold & Flu", to: conditionPath("cold-flu") },
    { label: "COPD", to: conditionPath("copd") },
    { label: "Depression", to: conditionPath("depression") },
    { label: "Fibromyalgia", to: conditionPath("fibromyalgia") },
    { label: "Heart Disease", to: conditionPath("heart-disease") },
    { label: "High Cholesterol", to: conditionPath("high-cholesterol") },
  ],
  [
    { label: "HIV", to: conditionPath("hiv") },
    { label: "Hypertension", to: conditionPath("hypertension") },
    { label: "IPF", to: conditionPath("ipf") },
    { label: "Osteoarthritis", to: conditionPath("osteoarthritis") },
    { label: "Psoriasis", to: conditionPath("psoriasis") },
    { label: "Skin Disorders Care", to: conditionPath("skin-disorders-care") },
    { label: "STDs", to: conditionPath("stds") },
  ],
];
</script>

<style></style>
