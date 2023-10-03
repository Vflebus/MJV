<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

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