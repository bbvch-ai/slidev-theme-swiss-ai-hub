<template>
  <div class="w-full flex items-center justify-between px-12 text-xs text-gray">
    <img
      src="/logo-white.png"
      class="h-6 opacity-60"
      alt="bbv logo"
    >
    <div>
      Page {{ currentPage }} / {{ total }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useNav} from "@slidev/client";

const { currentPage, total } = useNav()

</script>
