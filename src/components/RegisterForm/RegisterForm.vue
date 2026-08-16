<template>
  <form @submit.prevent="onSubmit" class="space-y-0">
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700">Name</label>
      <input
        v-model="name"
        type="text"
        required
        class="mt-1 p-[8px] block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-[#1F2933] focus:outline-none"
        placeholder="Enter Your Name"
      />
    </div>
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700">Email</label>
      <input
        v-model="email"
        type="email"
        required
        class="mt-1 p-[8px] block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-[#1F2933] focus:outline-none"
        placeholder="Enter Your Email"
      />
    </div>
    <div class="mb-6">
      <label class="block text-sm font-medium text-gray-700">Password</label>
      <input
        v-model="password"
        type="password"
        required
        minlength="6"
        class="mt-1 p-[8px] block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-[#1F2933] focus:outline-none"
        placeholder="Enter Your Password"
      />
    </div>
    <p v-if="error" class="mb-3 text-sm text-red-600">{{ error }}</p>
    <button
      type="submit"
      class="w-full bg-[#1F2933] text-white py-2 rounded-md hover:opacity-90 transition"
    >
      Register
    </button>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { registerUser } from "../../utils/auth";

const emit = defineEmits(["register"]);

const name = ref("");
const email = ref("");
const password = ref("");
const error = ref("");

const onSubmit = () => {
  const result = registerUser({
    name: name.value,
    email: email.value,
    password: password.value,
  });

  if (!result.ok) {
    error.value = result.message;
    return;
  }

  error.value = "";
  emit("register", result);
};
</script>
