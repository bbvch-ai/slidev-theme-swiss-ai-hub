<template>
  <div class="text-xmd w-full flex items-center justify-between px-12 text-gray">
    <img
      :src="logoWhite"
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
import logoWhite from "../assets/logo-white.png";

const { currentPage, total } = useNav()
</script>
