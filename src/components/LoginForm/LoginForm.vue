<template>
  <div
    class="fixed inset-0 flex flex-col items-center justify-center z-[5000] backdrop-blur-24"
    v-if="isVisible"
  >
    <div class="flex justify-between max-w-[384px] animate-fade-in">
      <img
        :src="popupImg"
        alt=""
        class="w-[72%]"
        style="filter: brightness(0) saturate(100%) invert(93%) sepia(7%) saturate(2133%) hue-rotate(32deg) brightness(108%) contrast(101%);"
      />
      <button
        type="button"
        @click="close"
        class="w-[56px] flex bg-[#1F2933] h-[56px] p-4 rounded-[40px] border-2 border-[#1F293314] items-center justify-center cursor-pointer"
      >
        <img
          :src="closeImg"
          alt="close"
          style="filter: brightness(0) saturate(100%) invert(79%) sepia(100%) saturate(2%) hue-rotate(201deg) brightness(107%) contrast(101%);"
        />
      </button>
    </div>

    <div
      class="bg-[#DAFF98] p-8 rounded-[0px_40px_40px_40px] shadow-lg w-96 animate-fade-in relative"
    >
      <div class="absolute top-[-35px]">
        <img :src="logoImg" alt="MedLink" />
      </div>

      <div v-if="successMessage" class="text-center py-6">
        <h2 class="text-2xl font-semibold text-[#1F2933] mb-3">Success</h2>
        <p class="text-[#1F2933] mb-6">{{ successMessage }}</p>
        <button
          type="button"
          class="w-full bg-[#1F2933] text-white py-2 rounded-md"
          @click="close"
        >
          Continue
        </button>
      </div>

      <template v-else>
        <h2 class="text-2xl font-semibold text-center mb-6 text-[#1F2933]">
          {{ isRegister ? "Register" : "Login" }}
        </h2>

        <div v-if="isRegister">
          <RegisterForm @register="onRegistered" />
        </div>
        <form v-else @submit.prevent="onLogin">
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700">Email</label>
            <input
              v-model="email"
              type="email"
              required
              class="p-[8px] mt-1 block w-full border-2 border-gray-300 rounded-md focus:border-[#1F2933] focus:outline-none"
              placeholder="Enter Your Email"
            />
          </div>
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700">Password</label>
            <input
              v-model="password"
              type="password"
              required
              class="p-[8px] mt-1 block w-full border-2 border-gray-300 rounded-md focus:border-[#1F2933] focus:outline-none"
              placeholder="Enter Your Password"
            />
          </div>
          <p v-if="error" class="mb-3 text-sm text-red-600">{{ error }}</p>
          <button
            type="submit"
            class="w-full bg-[#1F2933] text-white py-2 rounded-md hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <p class="mt-4 text-center text-sm">
          <span v-if="isRegister">Already have an account? </span>
          <span v-else>Don't have an account? </span>
          <button
            type="button"
            @click="toggleForm"
            class="text-[#1c3146] font-[800]"
          >
            {{ isRegister ? "Login" : "Register" }}
          </button>
        </p>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import RegisterForm from "../RegisterForm/RegisterForm.vue";
import popupImg from "../../assets/images/delete-record-popup-img.png";
import closeImg from "../../assets/images/close.png";
import logoImg from "../../assets/images/medlink-logo.png";
import { loginUser } from "../../utils/auth";

const props = defineProps({
  isVisible: {
    type: Boolean,
    required: true,
  },
  startAsRegister: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["close", "auth"]);

const email = ref("");
const password = ref("");
const isRegister = ref(false);
const error = ref("");
const successMessage = ref("");

watch(
  () => props.isVisible,
  (open) => {
    if (open) {
      isRegister.value = props.startAsRegister;
      email.value = "";
      password.value = "";
      error.value = "";
      successMessage.value = "";
    }
  }
);

const toggleForm = () => {
  isRegister.value = !isRegister.value;
  error.value = "";
  successMessage.value = "";
};

const onLogin = () => {
  const result = loginUser({ email: email.value, password: password.value });
  if (!result.ok) {
    error.value = result.message;
    return;
  }
  successMessage.value = result.message;
  emit("auth", result.user);
};

const onRegistered = (result) => {
  successMessage.value = result.message;
  emit("auth", result.user);
};

const close = () => {
  emit("close");
};
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fade-in 0.5s ease-in-out;
}
</style>
