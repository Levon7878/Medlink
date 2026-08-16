<template>
  <div class="bg-[#FFFFFF4D] rounded-[24px] mt-[60px] lg3:mt-[18px] p-[16px] flex justify-between">
    <div class="flex gap-[45px] lg3:flex-wrap">
      <div class="max-w-[540px] lg3:max-w-[690px] w-[100%] flex justify-center">
        <div class="w-[100%] flex items-center justify-center">
          <div class="relative w-[100%] gap-[60px] justify-center flex-col flex items-center bg-[#BAD8F14D] rounded-[24px]"
            :style="{ paddingTop: !playImage ? '59px' : '0px', paddingBottom: !playImage ? '19px' : '0px' }">
            <div v-if="playImage"
              class="p-[40px] absolute left-[39%] top-[39%] backdrop-blur-[23px] rounded-[80px] max-w-[107.4px] max-h-[104px]">
              <img :src="playImage" alt="Play" />
            </div>
            <div class="w-full h-[100%] flex justify-center">
              <img :src="image" alt="image" class="max-h-[390px]" :style="{width: playImage ? '100%' : '50%'}">
            </div>
            <div class="absolute left-[94%] right-[-14px]" :style="{top: playImage ? '23%' : '31%'}">
              <img src="../../assets/images/breast-vector.png" alt="breast" />
            </div>
            <div v-if="messageImage" class="bg-[#FFFFFF] p-[17.52px] rounded-[21.89px] max-w-[312px] w-[100%]">
              <div class="max-w-[312px]">
                <div class="flex items-center gap-[4.89px]">
                  <div class="w-[16px] h-[16px]">
                    <img :src="messageImage" alt="" />
                  </div>
                  <p class="text-customGray">{{ message }}</p>
                </div>
              </div>
            </div>
            <div v-if="playImageRecorder" class="bg-[#FFFFFF] p-[17.52px] rounded-[21.89px] max-w-[312px] w-[100%]">
              <div class="max-w-[312px] w-[100%]">
                <div class="flex items-center justify-between">
                  <div
                    class="w-[20px] h-[20px] rounded-[40px] bg-[#398B39] flex justify-center items-center"
                  >
                    <img class="w-[8px]" :src="playImageRecorder" alt="playImageRecorder" />
                  </div>
                  <div class="flex gap-[5px] items-center">
                    <div
                      class="border w-[20px] h-[20px] rounded-[50%] border-[#398B39] flex justify-center items-center">
                      <img :src="pause" alt="" />
                    </div>
                    <p class="text-customGray font-medium text-[13px] leading-[11.4px]">
                      {{ recordingText }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <div class="flex" >
          <h3 class="text-[32px] font-semibold leading-[38.4px]">
            {{ description }}
          </h3>
          <div class="relative">
            <button @click="openMenu" class="rounded-full w-14 h-14 bg-white flex items-center justify-center">
              <img src="../../assets/images/menu-line.png" alt="" />
            </button>
            <div v-if="isOpen"
              class="absolute right-0 w-[206px]  bg-white border border-gray-300 shadow-lg rounded-[16px]">
              <div class="p-2 cursor-pointer hover:bg-gray-100 rounded-[16px]" @click="shareLink">
                <p class="font-medium leading-6">Share Link</p>
              </div>
              <div class="p-2 cursor-pointer hover:bg-gray-100" @click="report">
                <p class="font-medium leading-6">Report</p>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-[8px] mt-[16px]">
          <div v-if="userImage || womanImage" class="rounded-full flex items-center gap-[8px]">
            <img v-if="userImage" :src="userImage" alt="user" />
            <img v-if="womanImage" :src="womanImage" class="rounded-[100px]" alt="Woman" />
            <p>{{ nickName }}</p>
          </div>
          <h4 v-if="!womanImage"
            class="text-[20px] font-medium leading-[28px] text-left text-[#1F2933A3] max-w-[458px]">
            {{ text }}
          </h4>
        </div>
        <div>
          <div class="flex gap-[16px] flex-wrap mt-[16px]">
            <div class="p-[8px_16px] rounded-[32px] border flex items-center gap-[8px] border-[rgba(31,41,51,0.078)]">
              <img src="../../assets/images/calendar.png" alt="calendar" />
              <p>1 day ago</p>
            </div>
            <div class="p-[8px_16px] rounded-[32px] border flex items-center gap-[8px] border-[rgba(31,41,51,0.078)]">
              <img src="../../assets/images/eye1.png" alt="eye" />
              <p>100</p>
            </div>
            <div class="p-[8px_16px] rounded-[32px] border flex items-center gap-[8px] border-[rgba(31,41,51,0.078)]">
              <img src="../../assets/images/second.png" alt="second" />
              <p>1 hour</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { defineProps } from "vue";
const isOpen = ref(false);
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  nickName: {
    type: String,
    required: false,
  },
  imageHeight: {
    type: String,
    default: "390",
  },
  playImage: {
    type: String,
    required: false,
  },
  text: {
    type: String,
    required: true,
  },
  womanImage: {
    type: String,
    required: false,
  },
  userImage: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  messageImage: {
    type: String,
    required: false,
  },
  pause: {
    type: String,
    required: false,
  },
  playImageRecorder: {
    type: String,
    required: false,
  },
  recordingText: {
    type: String,
    required: false,
  },
});

const openMenu = () => {
  isOpen.value = !isOpen.value;
};

const shareLink = async () => {
  const url = window.location.href;
  try {
    if (navigator.share) {
      await navigator.share({ title: props.description, url });
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard");
    }
  } catch {
    // user cancelled share
  }
  isOpen.value = false;
};

const report = () => {
  alert("Thanks — this story was flagged for review.");
  isOpen.value = false;
};
</script>

<style></style>
