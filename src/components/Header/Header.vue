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
          <div ref="searchRoot" class="relative">
            <div
              v-if="!isSearchOpen"
              @click="openSearch"
              class="block-search w-[52px] h-[52px] flex justify-center items-center bg-[#dfd9d9] rounded-[1234px] cursor-pointer"
            >
              <img src="../../assets/images/search.png" alt="Search Icon" class="w-6 h-6" />
            </div>

            <div
              v-if="isSearchOpen"
              class="flex items-center gap-3 max-w-full w-[476px] h-[56px] border border-gray-300 rounded-full input-background bg-white px-4"
            >
              <button
                type="button"
                class="shrink-0 flex items-center justify-center"
                aria-label="Search"
                @click="focusSearch"
              >
                <img src="../../assets/images/search.png" alt="" class="w-6 h-6" />
              </button>
              <input
                ref="searchInput"
                v-model="searchQuery"
                type="text"
                placeholder="Search"
                class="flex-1 min-w-0 h-full bg-transparent rounded-full border-0 py-2 px-2 text-[16px] text-[#1F2933] placeholder:text-[#1F2933A3] focus:outline-none focus:ring-0"
                @focus="isSearchPanel = true"
                @keydown.escape.prevent="closeSearch"
                @keydown.enter.prevent="selectFirstResult"
              />
              <button
                type="button"
                class="shrink-0 flex items-center justify-center p-1 ml-1"
                :aria-label="searchQuery ? 'Clear search' : 'Close search'"
                @click="onClearClick"
              >
                <img src="../../assets/images/close.png" alt="" class="w-4 h-4" />
              </button>
            </div>

            <div
              v-if="isSearchOpen && isSearchPanel"
              class="absolute top-[calc(100%+8px)] left-0 bg-white border border-gray-200 rounded-[16px] w-full max-h-60 overflow-y-auto z-50 shadow-lg"
            >
              <ul v-if="filteredItems.length">
                <li
                  v-for="(item, index) in filteredItems"
                  :key="`${item.label}-${index}`"
                  class="px-4 py-3 hover:bg-[#F3F6FA] cursor-pointer text-[#1F2933] text-[16px]"
                  @mousedown.prevent="selectItem(item)"
                >
                  {{ item.label }}
                </li>
              </ul>
              <p v-else class="px-4 py-3 text-[#1F2933A3] text-[16px]">
                No results found
              </p>
            </div>
          </div>

          <div class="flex gap-[24px] items-center pl-[32px]">
            <div v-if="!isSearchOpen" class="flex gap-[24px] items-center">
              <li>
                <a
                  class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3] cursor-pointer"
                  @click="isOpenToggle"
                >For Patients</a>
                <PatientsMenu :isOpen="isOpen" @close="isOpen = false" />
              </li>
              <li>
                <router-link
                  to="/video-interview"
                  class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]"
                >
                  For Doctors
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about"
                  class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]"
                >
                  About Us
                </router-link>
              </li>
            </div>
            <li>
              <div v-if="sessionUser" class="flex items-center gap-[12px]">
                <span class="text-[14px] text-[#1F2933] font-medium max-w-[120px] truncate">
                  {{ sessionUser.name }}
                </span>
                <button
                  type="button"
                  class="h-[56px] px-[24px] rounded-[40px] border border-[#1F293314] text-[#1F2933]"
                  @click="logout"
                >
                  Log out
                </button>
              </div>
              <button
                v-else
                type="button"
                class="w-[109px] h-[56px] rounded-[40px] bg-[#1F2933] text-white"
                @click="openPopup"
              >
                Log in
              </button>
            </li>
          </div>
        </ul>
        <BurgerMenu :openPopup="openPopup" />
        <LoginForm :isVisible="isPopupVisible" @close="closePopup" @auth="onAuth" />
      </nav>
    </header>
  </div>
</template>

<script setup>
import LoginForm from "../LoginForm/LoginForm.vue";
import BurgerMenu from "../BurgerMenu/BurgerMenu.vue";
import PatientsMenu from "../PatientsMenu/PatientsMenu.vue";
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { conditions, conditionPath } from "../../data/conditions";
import { getSession, clearSession } from "../../utils/auth";

const router = useRouter();

const isOpen = ref(false);
const isSearchOpen = ref(false);
const isPopupVisible = ref(false);
const isSearchPanel = ref(false);
const searchQuery = ref("");
const searchInput = ref(null);
const searchRoot = ref(null);
const sessionUser = ref(getSession());

const searchItems = [
  ...conditions.map((item) => ({
    label: item.title,
    to: conditionPath(item.slug),
  })),
  { label: "About MedLink", to: "/about" },
  { label: "Breast Cancer", to: "/breast-cancer" },
  { label: "Case Studies", to: "/case-studies" },
  { label: "Contact Us", to: "/contact" },
  { label: "Video Interview", to: "/video-interview" },
];

const filteredItems = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) return searchItems;
  return searchItems.filter((item) =>
    item.label.toLowerCase().includes(query)
  );
});

const openSearch = async () => {
  isSearchOpen.value = true;
  isSearchPanel.value = true;
  isOpen.value = false;
  await nextTick();
  searchInput.value?.focus();
};

const closeSearch = () => {
  isSearchOpen.value = false;
  isSearchPanel.value = false;
  searchQuery.value = "";
};

const focusSearch = () => {
  isSearchPanel.value = true;
  searchInput.value?.focus();
};

const onClearClick = () => {
  if (searchQuery.value) {
    searchQuery.value = "";
    isSearchPanel.value = true;
    searchInput.value?.focus();
    return;
  }
  closeSearch();
};

const selectItem = (item) => {
  searchQuery.value = item.label;
  isSearchPanel.value = false;
  if (item.to) {
    router.push(item.to);
    closeSearch();
  }
};

const selectFirstResult = () => {
  if (filteredItems.value.length) {
    selectItem(filteredItems.value[0]);
  }
};

watch(searchQuery, () => {
  if (isSearchOpen.value) {
    isSearchPanel.value = true;
  }
});

const handleClickOutside = (event) => {
  if (!isSearchOpen.value) return;
  if (searchRoot.value && !searchRoot.value.contains(event.target)) {
    closeSearch();
  }
};

onMounted(() => {
  document.addEventListener("mousedown", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});

const isOpenToggle = () => {
  isOpen.value = !isOpen.value;
};

const openPopup = () => {
  isPopupVisible.value = true;
};

const closePopup = () => {
  isPopupVisible.value = false;
};

const onAuth = (user) => {
  sessionUser.value = { name: user.name, email: user.email };
};

const logout = () => {
  clearSession();
  sessionUser.value = null;
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
