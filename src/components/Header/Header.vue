<template>
  <div>
    <header class="py-0">
      <nav class="max-w-[1640px] w-full flex justify-between lg:items-center lg:pr-[15px]">
        <div class="container-logo h-20 w-full max-w-[500px]">
          <div class="pt-[30px] pl-[134px] max-w-[184px]">
            <router-link to="/">
              <img class="cursor-pointer" src="../../assets/images/medlink-logo.png" alt="MedLink Logo" />
            </router-link>
          </div>
        </div>
        <ul class="lg:hidden flex items-center">
          <div class="relative">
            <div v-if="!isSearchOpen" @click="toggleSearch"
              class="block-search w-[52px] h-[52px] flex justify-center items-center bg-[#dfd9d9] rounded-[1234px]">
              <img src="../../assets/images/search.png" alt="Search Icon" class="w-6 h-6" />
            </div>
            <div v-if="isSearchOpen"
              class="flex items-center gap-3 max-w-full w-[476px] h-[56px] border border-gray-300 rounded-full input-background bg-white px-4">
              <button
                type="button"
                class="shrink-0 flex items-center justify-center"
                aria-label="Close search"
                @click="toggleSearch"
              >
                <img src="../../assets/images/search.png" alt="" class="w-6 h-6" />
              </button>
              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Search"
                class="flex-1 min-w-0 h-full bg-transparent rounded-full border-0 py-2 px-2 text-[16px] text-[#1F2933] placeholder:text-[#1F2933A3] focus:outline-none focus:ring-0"
                @click="openSearchPanel"
                @focus="openSearchPanel"
              />
              <button
                type="button"
                class="shrink-0 flex items-center justify-center p-1 ml-1"
                aria-label="Clear search"
                @click="toggleSearch"
              >
                <img src="../../assets/images/close.png" alt="" class="w-4 h-4" />
              </button>
            </div>
            <div v-if="isSearchPanel"
              class="absolute bg-white border border-gray-300 rounded-lg w-full max-h-60 overflow-y-auto z-10">
              <ul>
                <li v-for="(item, index) in items" :key="index" @click="selectItem(item)"
                  class="p-3 hover:bg-gray-100 cursor-pointer">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <div class="flex gap-[24px] items-center pl-[32px]">
            <div v-if="!isSearchOpen" class="flex gap-[24px] items-center">
              <li>
                <a class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3] cursor-pointer"
                  @click="isOpenToggle">For Patients</a>
                <PatientsMenu :isOpen="isOpen" />
              </li>
              <li>
                <router-link to="/video-interview"
                  class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]">
                  For Doctors</router-link>
              </li>
              <li>
                <router-link to="/case-studies"
                  class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]">
                  About Us
                </router-link>
              </li>
            </div>
            <li>
              <button type="button" class="w-[109px] h-[56px] p-[20px32px] rounded-[40px] bg-[#1F2933] text-white" @click="openPopup">
                Log in
              </button>
            </li>
          </div>
        </ul>
        <BurgerMenu :openPopup="openPopup" />
        <LoginForm :isVisible="isPopupVisible" @close="closePopup" />
      </nav>
    </header>
  </div>
</template>

<script setup>
import LoginForm from "../LoginForm/LoginForm.vue";
import BurgerMenu from "../BurgerMenu/BurgerMenu.vue";
import { ref, watch, nextTick } from "vue";
import PatientsMenu from "../PatientsMenu/PatientsMenu.vue";
const isOpen = ref(false);
const isSearchOpen = ref(false);
const isPopupVisible = ref(false);
const isSearchPanel = ref(false);
const searchQuery = ref("");
const searchInput = ref(null);
const items = ref([
  "Abdominal Pain",
  "Antibiotics",
  "Arrhythmia",
  "Autoimmune Disorders",
]);

const toggleSearch = () => {
  isSearchOpen.value = !isSearchOpen.value;
  if (!isSearchOpen.value) {
    isSearchPanel.value = false;
    searchQuery.value = "";
  }
};

watch(isSearchOpen, async (open) => {
  if (open) {
    await nextTick();
    searchInput.value?.focus();
  }
});

const openSearchPanel = () => {
  isSearchPanel.value = true;
};

const selectItem = (item) => {
  searchQuery.value = item;
  isSearchPanel.value = false;
};

const isOpenToggle = () => {
  isOpen.value = !isOpen.value;
};

const openPopup = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
};
</script>

<style scoped>
.container-logo {
  background-image: url("../../assets/images/header-phone.png");
  background-repeat: no-repeat;
}

.input-background {
  box-shadow: 0 0 0 4px rgba(218, 255, 152, 0.24);
}
</style>
