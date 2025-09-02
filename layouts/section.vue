<template>
  <div
    class="h-full w-full bg-black p-6 text-white"
  >
    <div
      class="relative h-full w-full flex overflow-hidden border border-stone-600 rounded-3xl bg-bbv-black"
      :class="{ 'flex-row-reverse': position === 'right' }"
    >
      <div class="w-1/3 p-2">
        <div class="h-full w-full overflow-hidden rounded-3xl">
          <GradientBackground>
            <div class="h-full w-full flex flex-col items-center justify-between px-12 pb-8 pt-24">
              <div class="flex flex-col items-center gap-6">
                <h3 class="text-center text-sm text-gray">
                  {{ prefix }}
                </h3>
                <h1 class="pb-4 text-center text-5xl font-light">
                  {{ sectionTitle }}
                </h1>
                <h2 class="text-center text-xl text-gray">
                  {{ postfix }}
                </h2>
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
      <div
        class="relative w-2/3 py-24 text-xl"
        :class="columnClass"
      >
        <div
          class="absolute bottom-[250px] right-0 opacity-3"
          :class="{
            'right-0': position === 'left',
            'left-0': position === 'right',
          }"
          style="font-size: 64rem"
        >
          {{ sectionNumber }}
        </div>
        <div class="slidev-layout section">
          <div :style="columnStyles">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

import GradientBackground from "../components/gradient-background.vue"

const props = withDefaults(defineProps<{
  prefix: string
  postfix: string
  sectionTitle: string
  sectionNumber: string | number
  position?: ('left' | 'right')
  columnCount?: number
}>(), {
  position: 'left',
  columnCount: 1
})

const columnStyles = computed(() => {
  if (props.columnCount > 1) {
    return {
      columnCount: props.columnCount,
      columnGap: '3rem'
    }
  }
  return {}
})

const columnClass = computed(() => {
  return {
    'px-36': props.columnCount === 1,
    'px-12': props.columnCount === 2,
    'px-0': props.columnCount > 2,
  }
})
</script>
