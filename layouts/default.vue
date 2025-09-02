<template>
  <div
    class="relative h-full w-full flex bg-black p-6 text-white"
  >
    <div class="relative h-full w-full overflow-hidden border border-stone-600 rounded-3xl bg-bbv-black">
      <GradientBackground>
        <div class="px-12 pb-8 pt-24">
          <DefaultHeader class="absolute inset-x-0 top-6" />
          <div class="slidev-layout">
            <slot />
          </div>
          <DefaultFooter class="absolute inset-x-0 bottom-6" />
        </div>
      </GradientBackground>
    </div>
  </div>
</template>
<script setup lang="ts">
import DefaultFooter from "../components/default-footer.vue";
import DefaultHeader from "../components/default-header.vue";
import GradientBackground from "../components/gradient-background.vue";
</script>