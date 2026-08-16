<template>
  <div class="pt-[150px] bg-[#E4ECF7] rounded-[40px] pl-[134px] pr-[134px] ">
    <div class="flex items-start gap-[10px]">
      <div
        class="p-[8px_16px] rounded-[27px] bg-[#BAD8F14D] max-w-[57px] flex justify-center"
      >
        <p class="text-customGray font-medium text-[24px] leading-[28.8px]">
          04
        </p>
      </div>
      <h2 class="font-normal text-[#customGray] text-[64px] leading-[64px]">
        Breast Cancer Case Studies
      </h2>
    </div>
    <div>
      <div>
        <BreastCaseItem
          v-for="(caseItem, index) in breast"
          :key="index"
          :image="caseItem.image"
          :description="caseItem.description"
          :nickName="caseItem.nickName"
          :imageHeight="caseItem.imageHeight"
          :playImage="caseItem.playImage"
          :text="index === 1 ? '' : caseItem.text"
          :womanImage="index === 1 ? caseItem.womanImage : ''"
          :userImage="caseItem.userImage"
          :message="caseItem.message"
          :messageImage="caseItem.messageImage"
          :playImageRecorder="caseItem.playImageRecorder"
          :recordingText="caseItem.recordingText"
          :pause="caseItem.pause"
        />
      </div>
    </div>
    <div class="flex justify-center py-[60px] gap-[8px] lg3:flex-col">
      <router-link
        to="/video-interview"
        class="bg-customGray rounded-[40px] text-[white] p-[32px_48px] font-dm-sans text-[16px] font-semibold leading-[16px] text-center"
      >
        Subscribe to Breast Cancer videos
      </router-link>
      <router-link
        to="/breast-cancer"
        class="bg-[#DAFF98] rounded-[40px] text-[#398B39] p-[32px_48px] font-dm-sans text-[16px] font-semibold leading-[16px] text-center"
      >
        Read about Breast Cancer
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BreastCaseItem from "./BreastCaseItem.vue";
import maskManImg from "../../assets/images/mask-man.png";
import solidPlayImg from "../../assets/images/solid-play.png";
import userImg from "../../assets/images/user.png";
import bigMicrophoneImg from "../../assets/images/big-microphone.png";
import womenMiniImg from "../../assets/images/women-mini.png";
import pauseImg from "../../assets/images/pause.png";
import bigFontSizeImg from "../../assets/images/big-font-size.png";
import fontSize01Img from "../../assets/images/font-size-01.png";
import helpImg from "../../assets/images/help.png";

const breast = ref([
  {
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
    image: maskManImg,
    nickName: "Aspen Ekstrom Bothman",
    playImage: solidPlayImg,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    userImage: userImg,
  },
  {
    description: "What did you try that didn’t help you better",
    image: bigMicrophoneImg,
    nickName: "Aspen Ekstrom Bothman",
    playImage: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    womanImage: womenMiniImg,
    userImage: "",
    playImageRecorder: solidPlayImg,
    recordingText: "Stop Recoding",
    pause: pauseImg,
  },
  {
    description:
      "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
    image: bigFontSizeImg,
    playImage: "",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    nickName: "",
    userImage: "",
    message: "Your Message",
    messageImage: fontSize01Img,
  },
  {
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since.",
    nickName: "Aspen Ekstrom Bothman",
    image: helpImg,
    playImage: solidPlayImg,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
    userImage: userImg,
  },
]);
</script>

<style>
</style>
