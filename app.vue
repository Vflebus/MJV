<template>
  <NuxtLayout>
    <GsapPanel />
    <div class="h-screen w-full bg-purple-500"></div>
    <div class="h-screen w-full bg-blue-500"></div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s;
}

.page-enter-from {
  transform: translate(100%);
}

.page-leave-to {
  transform: translate(-100%);
}
</style>