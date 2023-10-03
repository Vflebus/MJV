<template>
    <div class="w-screen h-screen flex justify-end items-start p-4">
        <div class="pointer-events-none	">
            <Transition name="marie" appear>
                <img v-if="show" src="/images/marie1291.webp" alt="Personnage Marie d'Animal Crossing"
                    class="h-[40%] max-w-[50%] absolute top-0 left-0 pointer-events-none xl:h-full xl:max-w-full transform-gpu" />
            </Transition>
        </div>
        <NuxtLink href="/">Page 1 !</NuxtLink>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
onMounted(() => {
    setTimeout(() => { show.value = true }, 1000);
})
</script>
  
  
<style lang="scss" scoped>
.marie-enter-active {
    transition: all 1.5s ease;
}

.marie-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}
</style>
  