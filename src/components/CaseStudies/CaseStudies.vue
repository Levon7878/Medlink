<template>
  <div class="mt-150px">
    <section class="bg-[#E4ECF7] mt-[150px] rounded-[40px]">
      <div class="pt-[80px] flex gap-[134px] justify-center xs:flex-wrap xs:gap-[10px]">
        <div class="flex items-center flex-wrap gap-[16px]">
          <div class="py-2 px-4 bg-[#BAD8F14D] rounded-[27px]">
            <p class="font-medium text-[24px] leading-[28.8px] text-[#1F2933]">
              02
            </p>
          </div>
          <h2 class="text-[64px] leading-[64px] text-[#1F2933]">
            Case Studies
          </h2>
        </div>
        <p class="text-[20px] leading-[24px] font-medium max-w-[463px] text-[#1F2933A3]">
          Explore many case studies from doctors and patients, witness the
          MedLink Community in action.
        </p>
      </div>

      <div class="flex justify-center pl-[85px] xs:pl-0">
        <div class="relative max-w-[1128px] w-full mt-[40px]">
          <div
            ref="filterScroll"
            class="flex gap-[4px] bg-[#FFFFFF33] rounded-[110px] items-center p-[4px] pl-[58px] pr-[58px] overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <button
              v-for="category in categories"
              :key="category"
              type="button"
              class="flex-shrink-0 py-6 px-8 rounded-[40px] transition-colors"
              :class="
                activeCategory === category
                  ? 'bg-[#DAFF98] text-[#398B39]'
                  : 'text-[#1F2933] hover:bg-white/40'
              "
              @click="selectCategory(category)"
            >
              <p class="font-medium whitespace-nowrap">{{ category }}</p>
            </button>
          </div>
          <button
            type="button"
            class="absolute left-[4px] top-1/2 -translate-y-1/2 z-10 w-[54px] h-[54px] bg-[#FFFFFF] rounded-full flex justify-center items-center shrink-0"
            aria-label="Scroll categories left"
            @click="scrollFiltersLeft"
          >
            <img :src="leftIcon" alt="" class="w-[20px] h-[20px] brightness-0" />
          </button>
          <button
            type="button"
            class="absolute right-[4px] top-1/2 -translate-y-1/2 z-10 w-[54px] h-[54px] bg-[#FFFFFF] rounded-full flex justify-center items-center shrink-0"
            aria-label="Scroll categories right"
            @click="scrollFiltersRight"
          >
            <img :src="rightIcon" alt="" class="w-[20px] h-[20px] brightness-0" />
          </button>
        </div>
      </div>

      <div class="mt-[40px] flex justify-center">
        <div class="flex gap-[20px] pl-[100px] xs:pl-0 justify-center flex-wrap">
          <div class="max-w-[560px] xs:max-w-[329px] flex flex-col gap-[40px]">
            <div class="relative overflow-hidden rounded-[16px]">
              <img
                class="w-full transition-opacity duration-300"
                :src="featured.image"
                :alt="featured.title"
              />
              <div
                class="rotate-[-90deg] absolute left-[370px] right-[-308px] top-[226px] max-w-[363px] h-[24px] xs:max-w-[212px] xs:!top-[128px] xs:right-[186px] xs:left-[223px]"
              >
                <img
                  src="../../assets/images/clip-path-community.png"
                  class="filter-custom-filter"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h4 class="font-medium text-[24px] leading-[28.8px] text-[#1F2933]">
                {{ featured.title }}
              </h4>
              <div class="overflow-hidden">
                <p class="mt-[16px] text-[20px] leading-[24px] text-[#1F2933A3] line-clamp-3">
                  {{ featured.description }}
                </p>
              </div>
              <router-link
                to="/video-interview"
                class="flex items-center mt-[16px] gap-[8px] cursor-pointer hover:opacity-80"
              >
                <span>{{ featured.cta }}</span>
                <img
                  class="w-[5px] h-[10px]"
                  src="../../assets/images/mini-right-icon.png"
                  alt=""
                />
              </router-link>
            </div>
          </div>

          <div class="flex flex-col gap-[16px] xs:items-center">
            <button
              type="button"
              class="max-w-[554px] w-full text-left flex border border-[#1F293314] rounded-[40px] p-[24px] xs:flex-col-reverse xs:w-[329px] transition hover:border-[#1F293333]"
              :class="{ 'bg-white/50 border-[#DAFF98]': activeSideIndex === 0 }"
              @click="setFeaturedFromSide(0)"
            >
              <div class="flex-1">
                <h3
                  class="text-[#1F2933] text-[24px] leading-[28.8px] xs:mt-[24px] font-medium max-w-[281px]"
                >
                  {{ sideCards[0].title }}
                </h3>
                <p
                  class="max-w-[222px] xs:!max-w-[281px] xs:mt-[8px] overflow-hidden whitespace-nowrap text-ellipsis text-[#1F2933A3]"
                >
                  {{ sideCards[0].description }}
                </p>
                <router-link to="/video-interview" class="flex items-center gap-[8px] xs:mt-[16px] hover:opacity-80">
                  <span>{{ sideCards[0].cta }}</span>
                  <img
                    class="w-[5px] h-[10px]"
                    src="../../assets/images/mini-right-icon.png"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="shrink-0">
                <img :src="sideCards[0].image" class="w-full max-w-[180px] rounded-[16px]" alt="" />
              </div>
            </button>

            <button
              type="button"
              class="max-w-[554px] xs:max-w-[329px] w-full text-left flex flex-col border border-[#1F293314] rounded-[40px] p-[24px] transition hover:border-[#1F293333]"
              :class="{ 'bg-white/50 border-[#DAFF98]': activeSideIndex === 1 }"
              @click="setFeaturedFromSide(1)"
            >
              <div class="flex gap-[16px] items-start">
                <img :src="microphoneIcon" alt="" />
                <h3 class="text-[24px] font-medium leading-[28.8px] text-[#1F2933]">
                  {{ sideCards[1].title }}
                </h3>
              </div>
              <div>
                <div
                  class="w-[24px] h-[24px] bg-[#398B39] flex items-center justify-center rounded-[80px] mt-[12px]"
                >
                  <img class="w-[9px] h-[12px]" :src="playIcon" alt="" />
                </div>
                <router-link to="/video-interview" class="flex items-center mt-[16px] gap-[8px] hover:opacity-80">
                  <span>{{ sideCards[1].cta }}</span>
                  <img
                    class="w-[5px] h-[10px]"
                    src="../../assets/images/mini-right-icon.png"
                    alt=""
                  />
                </router-link>
              </div>
            </button>

            <button
              type="button"
              class="max-w-[554px] xs:max-w-[329px] w-full text-left flex flex-col gap-[16px] border border-[#1F293314] rounded-[40px] p-[24px] transition hover:border-[#1F293333]"
              :class="{ 'bg-white/50 border-[#DAFF98]': activeSideIndex === 2 }"
              @click="setFeaturedFromSide(2)"
            >
              <div class="flex items-start gap-[16px]">
                <img :src="fontIcon" alt="" />
                <h3 class="w-[448px] text-[#1F2933] font-medium">
                  {{ sideCards[2].title }}
                </h3>
              </div>
              <p class="text-[#1F2933A3] font-medium text-[20px] rounded-[24px]">
                {{ sideCards[2].description }}
              </p>
              <router-link to="/video-interview" class="flex items-center mt-[16px] gap-[8px] hover:opacity-80">
                <span>{{ sideCards[2].cta }}</span>
                <img
                  class="w-[5px] h-[10px]"
                  src="../../assets/images/mini-right-icon.png"
                  alt=""
                />
              </router-link>
            </button>
          </div>
        </div>
      </div>

      <div class="flex justify-center items-center mt-[40px] pb-[104px]">
        <router-link to="/case-studies">
          <button
            class="pt-[32px] pb-[32px] pl-[64px] pr-[64px] bg-[#1F2933] rounded-[40px] text-[#FFFFFF]"
          >
            View All Conditions
          </button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import rightIcon from "../../assets/images/rigth-icon.png";
import leftIcon from "../../assets/images/left-icon.png";
import nurseImg from "../../assets/images/nurse.png";
import nurse2Img from "../../assets/images/nurse-2.png";
import helpImg from "../../assets/images/help.png";
import womenImg from "../../assets/images/women.png";
import women2Img from "../../assets/images/women-2.png";
import maskManImg from "../../assets/images/mask-man.png";
import microphoneIcon from "../../assets/images/microphone-01.png";
import fontIcon from "../../assets/images/font-size-01.png";
import playIcon from "../../assets/images/solid-play.png";

const categories = [
  "All",
  "Cancer",
  "Chronic Pain",
  "High Blood Pressure",
  "Diabetes",
  "Skin issues",
  "Depression",
  "Suicidal Thoughts",
];

const caseStudiesByCategory = {
  All: {
    featured: {
      title: "Overcoming Cancer: Emily's Triumph",
      description:
        "Follow Emily's inspiring journey through diagnosis, treatment, and resilience as she shares her strategies for maintaining hope and strength.",
      image: nurseImg,
      cta: "Watch now",
    },
    side: [
      {
        title: "From Darkness to Light: Someone’s Battle with Depression",
        description:
          "Join Sarah as she opens up about her battle with depression, offering insights into the healing power of community and self-care.",
        image: nurse2Img,
        cta: "Watch now",
      },
      {
        title: "What did you try that didn’t help you better?",
        description: "Audio story about treatments that did not work.",
        cta: "Listen now",
      },
      {
        title:
          "What symptoms did you have? What was the western medical diagnosis and/or the eastern medicine diagnosis?",
        description:
          "Join Sarah as she opens up about her battle with depression, offering insights into the healing power of community and self-care.",
        cta: "Listen now",
      },
    ],
  },
  Cancer: {
    featured: {
      title: "Overcoming Cancer: Emily's Triumph",
      description:
        "Emily shares how early detection, community support, and integrative care helped her through cancer treatment.",
      image: nurseImg,
      cta: "Watch now",
    },
    side: [
      {
        title: "Chemotherapy & Hope: Mark’s Recovery Path",
        description:
          "Mark documents the hardest weeks of chemo and the habits that kept him grounded.",
        image: maskManImg,
        cta: "Watch now",
      },
      {
        title: "Which treatment side effects surprised you most?",
        description: "Patient audio notes on unexpected cancer treatment effects.",
        cta: "Listen now",
      },
      {
        title: "What support mattered most during cancer care?",
        description:
          "Community members discuss family, peer groups, and clinical teams that made recovery possible.",
        cta: "Listen now",
      },
    ],
  },
  "Chronic Pain": {
    featured: {
      title: "Living With Chronic Pain: Ava’s Reset",
      description:
        "Ava explains how pacing, physical therapy, and peer support reduced daily pain intensity.",
      image: womenImg,
      cta: "Watch now",
    },
    side: [
      {
        title: "From Flare-Ups to Stability",
        description:
          "A patient story about tracking triggers and finding a sustainable routine.",
        image: helpImg,
        cta: "Watch now",
      },
      {
        title: "What pain strategies failed before something worked?",
        description: "Honest audio reflections on trial and error.",
        cta: "Listen now",
      },
      {
        title: "How do you describe chronic pain to doctors?",
        description:
          "Patients share language that helped clinicians understand their symptoms better.",
        cta: "Listen now",
      },
    ],
  },
  "High Blood Pressure": {
    featured: {
      title: "Lowering Pressure: Daniel’s Daily Protocol",
      description:
        "Daniel combines medication adherence, walking, and sodium tracking to stabilize blood pressure.",
      image: maskManImg,
      cta: "Watch now",
    },
    side: [
      {
        title: "Home Monitoring That Actually Helped",
        description:
          "A simple weekly log that changed how this patient and doctor made decisions.",
        image: nurse2Img,
        cta: "Watch now",
      },
      {
        title: "What lifestyle change moved the needle fastest?",
        description: "Audio insights on diet, sleep, and stress reduction.",
        cta: "Listen now",
      },
      {
        title: "How did hypertension first show up for you?",
        description:
          "Community members describe early symptoms, diagnosis moments, and next steps.",
        cta: "Listen now",
      },
    ],
  },
  Diabetes: {
    featured: {
      title: "Type 2 Turnaround: Nora’s 6-Month Journey",
      description:
        "Nora shares glucose trends, meal planning shifts, and clinician check-ins that improved her A1C.",
      image: women2Img,
      cta: "Watch now",
    },
    side: [
      {
        title: "Learning to Trust Continuous Monitoring",
        description:
          "How CGM data helped one patient avoid dangerous lows and highs.",
        image: helpImg,
        cta: "Watch now",
      },
      {
        title: "What advice about diabetes was unhelpful?",
        description: "Patients discuss myths and better practical guidance.",
        cta: "Listen now",
      },
      {
        title: "How do you build a sustainable meal routine?",
        description:
          "Real strategies for cooking, snacking, and eating out with diabetes.",
        cta: "Listen now",
      },
    ],
  },
  "Skin issues": {
    featured: {
      title: "Clearer Skin, Calmer Days: Leah’s Story",
      description:
        "Leah walks through dermatology visits, flare triggers, and treatments that finally stuck.",
      image: womenImg,
      cta: "Watch now",
    },
    side: [
      {
        title: "Managing Psoriasis at Work",
        description:
          "Practical tips for confidence, routines, and talking with clinicians.",
        image: nurse2Img,
        cta: "Watch now",
      },
      {
        title: "Which topical treatments were worth it?",
        description: "Audio notes comparing products and prescriptions.",
        cta: "Listen now",
      },
      {
        title: "What symptoms led to your diagnosis?",
        description:
          "Patients describe early skin changes and how they sought care.",
        cta: "Listen now",
      },
    ],
  },
  Depression: {
    featured: {
      title: "From Darkness to Light: Sarah’s Battle with Depression",
      description:
        "Sarah opens up about therapy, community support, and rebuilding daily structure after depression.",
      image: nurse2Img,
      cta: "Watch now",
    },
    side: [
      {
        title: "Finding a Therapist Who Fit",
        description:
          "A patient story about switching care until treatment finally clicked.",
        image: women2Img,
        cta: "Watch now",
      },
      {
        title: "What didn’t help before therapy did?",
        description: "Honest reflections on approaches that fell short.",
        cta: "Listen now",
      },
      {
        title: "How did you recognize you needed support?",
        description:
          "Community voices on early signs, asking for help, and staying consistent.",
        cta: "Listen now",
      },
    ],
  },
  "Suicidal Thoughts": {
    featured: {
      title: "Choosing Tomorrow: A Recovery Conversation",
      description:
        "A survivor and clinician discuss crisis support, safety planning, and rebuilding hope.",
      image: helpImg,
      cta: "Watch now",
    },
    side: [
      {
        title: "What safety plan actually worked for you?",
        description:
          "Practical steps patients used with trusted contacts and care teams.",
        image: womenImg,
        cta: "Watch now",
      },
      {
        title: "Which resources felt most accessible in crisis?",
        description: "Audio stories about hotlines, peers, and clinical support.",
        cta: "Listen now",
      },
      {
        title: "How can friends support without judgment?",
        description:
          "Guidance from people with lived experience on compassionate check-ins.",
        cta: "Listen now",
      },
    ],
  },
};

const activeCategory = ref("All");
const activeSideIndex = ref(-1);
const filterScroll = ref(null);
const featuredOverride = ref(null);

const currentSet = computed(
  () => caseStudiesByCategory[activeCategory.value] || caseStudiesByCategory.All
);

const featured = computed(
  () => featuredOverride.value || currentSet.value.featured
);

const sideCards = computed(() => currentSet.value.side);

const selectCategory = (category) => {
  activeCategory.value = category;
  activeSideIndex.value = -1;
  featuredOverride.value = null;
};

const setFeaturedFromSide = (index) => {
  const card = sideCards.value[index];
  if (!card) return;

  activeSideIndex.value = index;
  featuredOverride.value = {
    title: card.title,
    description: card.description,
    image: card.image || currentSet.value.featured.image,
    cta: card.cta,
  };
};

const scrollStep = 240;

const scrollFiltersRight = () => {
  filterScroll.value?.scrollBy({ left: scrollStep, behavior: "smooth" });
};

const scrollFiltersLeft = () => {
  filterScroll.value?.scrollBy({ left: -scrollStep, behavior: "smooth" });
};
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
