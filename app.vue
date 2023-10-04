<template>
  <NuxtLayout>
    <FirstPanel />
    <SecondPanel />
    <ThirdPanel />
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