<template>
  <footer class="mt-[16px] rounded-[40px] bg-[#DFF3F6]">
    <div class="flex flex-col items-center justify-center px-[20px]">
      <div class="flex flex-col gap-[80px] items-center justify-center max-w-[1300px] w-[100%]">
        <div class="flex items-center justify-center pt-[80px] w-[100%]">
          <div
            class="flex justify-between lg3:flex-wrap lg3:gap-[60px] lg3:max-w-[615px] lg3:justify-center w-[100%]"
          >
            <div class="max-w-[366px] min-h-[198px] flex flex-col gap-[16px]">
              <img class="w-[50px] h-[50px]" src="../../assets/images/medlink-logo.png" alt="MedLink" />
              <p class="font-dm-sans text-[16px] font-medium leading-[22.4px] text-left text-[#1F2933CC]">
                Our mission is to create a supportive and collaborative community where patients and
                doctors connect to enhance healthcare experiences. We strive to empower individuals
                with knowledge, foster innovation, and promote compassionate care for all.
              </p>
            </div>
            <div class="flex lg3:w-[100%] w-[50%] justify-between lg3:justify-between lg3:max-w-[366px]">
              <div class="flex flex-col gap-[40px]">
                <p class="font-dm-sans text-[20px] font-medium leading-[24px] text-left text-[#1F2933]">
                  Quick Link
                </p>
                <div class="flex flex-col gap-[16px]">
                  <router-link
                    v-for="link in quickLinks"
                    :key="link.to"
                    :to="link.to"
                    class="font-dm-sans text-[16px] font-medium leading-[22.4px] text-left text-[#1F2933] hover:opacity-70"
                  >
                    {{ link.label }}
                  </router-link>
                </div>
              </div>
              <div class="flex flex-col gap-[40px] lg3:max-w-[177px]">
                <p class="font-dm-sans text-[20px] font-medium leading-[24px] text-left text-[#1F2933]">
                  Others Link
                </p>
                <div class="flex flex-col gap-[16px]">
                  <router-link
                    v-for="link in otherLinks"
                    :key="link.to"
                    :to="link.to"
                    class="font-dm-sans text-[16px] font-medium leading-[22.4px] text-left text-[#1F2933] hover:opacity-70"
                  >
                    {{ link.label }}
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-[100%] pt-[38px] flex items-end border-t-2 border-solid border-[#1F293314]">
          <div class="w-[100%] flex justify-between items-center lg3:flex-col lg3:gap-[40px]">
            <div class="max-w-[336px]">
              <p
                class="font-dm-sans text-[16px] font-normal leading-[24px] tracking-[-0.02em] text-left text-[#1F2933A3]"
              >
                © Copyright 2024 MedLink.ai | All Rights Reserved.
              </p>
            </div>
            <div class="flex gap-[8px]">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                class="p-[16px] rounded-[100px] bg-[#1F29331F] flex items-center justify-center hover:opacity-80"
                aria-label="Facebook"
              >
                <img src="../../assets/images/Facebook.png" alt="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                class="p-[16px] rounded-[100px] bg-[#1F29331F] flex items-center justify-center hover:opacity-80"
                aria-label="Instagram"
              >
                <img src="../../assets/images/Instagram.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-[50px] flex items-center justify-center">
      <img src="../../assets/images/clip-path-community.png" alt="" />
    </div>
  </footer>
</template>

<script setup>
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

const otherLinks = [
  { label: "Terms of use", to: "/terms" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Advertising Policy", to: "/advertising" },
  { label: "Do Not Sell or Share My Personal Information", to: "/do-not-sell" },
];
</script>

<style scoped></style>
