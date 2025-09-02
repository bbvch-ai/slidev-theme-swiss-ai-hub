<template>
  <div
    class="relative h-full w-full flex bg-black p-6 text-white"
  >
    <div class="h-full w-full overflow-hidden border border-stone-600 rounded-3xl bg-bbv-black">
      <GradientBackground>
        <div class="h-full w-full flex flex-col items-center justify-between px-12 pb-8 pt-24">
          <div class="slidev-layout cover flex flex-col items-center justify-center text-center">
            <slot />
            <p class="pt-12 text-xs text-gray">
              bbv Software Services AG | {{ useDateFormat(new Date(), 'YYYY.MM.DD') }}
            </p>
          </div>
          <img
            src="/logo-white.png"
            class="h-12"
            alt="bbv logo"
          >
        </div>
      </GradientBackground>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useDateFormat } from "@vueuse/core";

import GradientBackground from "../components/gradient-background.vue";

</script>
