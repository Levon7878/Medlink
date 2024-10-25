<template >
  <div>
    <header class="py-0">
      <nav class="max-w-[1140px] w-full flex justify-between">
        <div class="container-logo h-20 w-full max-w-[500px]">
          <div class="pt-[30px]">
            <img
              class="pl-[134px]"
              src="../../assets/images/medlink-logo.png"
              alt=""
            />
          </div>
        </div>
        <ul class="w-[514px] flex items-center">
          <li>
            <div class="block-search p-4 bg-[#dfd9d9] rounded-[1234px]">
              <img src="../../assets/images/search.png" alt="" />
            </div>
          </li>
          <div class="flex gap-[24px] items-center pl-[32px]">

              <li>
                  <a
              class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]"
              href=""
              >For Patients</a
              >
          </li>
          <li>
            <a
            class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]"
            href=""
            >For Doctors</a
            >
        </li>
        <li>
            <a
            class="font-sans text-[16px] font-medium leading-[16px] text-left text-[#1F2933A3]"
            href=""
            >About Us</a
            >
        </li>
        <li>
            <button
            type="button"
            class="w-[109px] h-[56px] p-[20px32px]  rounded-[40px]  bg-[#1F2933] text-white"
            >
            Dark
        </button>
    </li>
</div>
</ul>
      </nav>
    </header>
  </div>
</template>
<script setup>
</script>
<style>
.container-logo {
  background-image: url("../../assets/images/header-phone.png");
  background-repeat: no-repeat;
}
</style>