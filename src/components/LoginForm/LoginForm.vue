<template>
    <div class="fixed inset-0 flex flex-col items-center justify-center z-[5000] backdrop-blur-24" v-if="isVisible">
        <div class="flex justify-between max-w-[384px] transition-transform transform scale-100 animate-fade-in">
            <img :src="popupImg" alt="" class="w-[72%]"
                style="filter: brightness(0) saturate(100%) invert(93%) sepia(7%) saturate(2133%) hue-rotate(32deg) brightness(108%) contrast(101%);">
            <div @click="close"
                class="w-[56px] flex bg-[#1F2933] h-[56px] p-4 gap-[10px] rounded-[40px] border-2 border-[#1F293314] items-center justify-center cursor-pointer">
                <img :src="closeImg" alt="close"
                    style="filter: brightness(0) saturate(100%) invert(79%) sepia(100%) saturate(2%) hue-rotate(201deg) brightness(107%) contrast(101%);">
            </div>
        </div>
        <div
            class="bg-[#DAFF98] p-8 rounded-[0px_40px_40px_40px] shadow-lg w-96 transition-transform transform scale-100 animate-fade-in relative">
            <div class="absolute top-[-35px]"><img :src="logoImg" alt=""></div>
            <h2 class="text-2xl font-semibold text-center mb-6 text-[#1F2933]">
                {{ isRegister ? 'Register' : 'Login' }}
            </h2>
            <div v-if="isRegister">
                <RegisterForm @register="handleRegister" />
            </div>
            <div v-else>
                <form @submit.prevent="handleLogin">
                    <div class="mb-6">
                        <label
                            class="block text-sm font-medium text-gray-700 transition duration-300 transform hover:scale-105">Email</label>
                        <input type="email" v-model="email" required
                            class="p-[8px] mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:shadow-xl hover:border-blue-400"
                            placeholder="Enter Your Email" />
                    </div>
                    <div class="mb-6">
                        <label
                            class="block text-sm font-medium text-gray-700 transition duration-300 transform hover:scale-105">Password</label>
                        <input type="password" v-model="password" required
                            class="p-[8px] mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 transform hover:shadow-xl hover:border-blue-400"
                            placeholder="Enter Your Password" />
                    </div>
                    <button type="submit"
                        class="w-full bg-[#1F2933] text-white py-2 rounded-md hover:bg-[#1F2933] transition duration-300 transform hover:scale-105">
                        Sign In
                    </button>
                </form>
            </div>
            <p class="mt-4 text-center text-sm">
                <span v-if="isRegister">Already have an account? </span>
                <span v-else>Don't have an account? </span>
                <button @click="toggleForm"
                    class="text-[#1c3146] font-[800] transition duration-300 transform hover:scale-105">
                    {{ isRegister ? 'Login' : 'Register' }}
                </button>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import RegisterForm from '../RegisterForm/RegisterForm.vue';
import popupImg from '../../assets/images/delete-record-popup-img.png';
import closeImg from '../../assets/images/close.png';
import logoImg from '../../assets/images/medlink-logo.png';

const props = defineProps({
    isVisible: {
        type: Boolean,
        required: true,
    },
});

const emit = defineEmits(['close']);

const email = ref('');
const password = ref('');
const isRegister = ref(false);

const handleRegister = (userData) => {
    close();
};

watch(() => props.isVisible, (newValue) => {
    if (newValue) {
        isRegister.value = false;
    }
});

const toggleForm = () => {
    isRegister.value = !isRegister.value;
};

const close = () => {
    emit('close');
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