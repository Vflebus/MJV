<template>
    <div class="w-screen h-screen flex justify-end items-start p-4">
        <div class="pointer-events-none	">
            <Transition name="fiche" appear>
                <div v-if="show" class="fixed bottom-0 left-0 w-screen h-screen">
                    <img src="/images/feuilleNom.webp" alt="fiche principale"
                        class="absolute bottom-0 left-0 xl:h-screen transform-gpu" />
                    <img src="/images/fichePrecisions.webp" alt="fiche de précisions"
                        class="absolute bottom-0 left-0 w-[50%] xl:w-[20%] transform-gpu" />
                </div>
            </Transition>
            <Transition name="marie" appear>
                <img v-if="show" ref="marie" src="/images/marie1291.webp" alt="Personnage Marie d'Animal Crossing"
                    class="marie h-[40%] max-w-[50%] absolute top-0 left-0 pointer-events-none xl:h-full xl:max-w-full xl:[transform:rotateY(180deg)] xl:[left:unset] xl:right-0 transform-gpu" />
            </Transition>
        </div>
        <NuxtLink href="/about">Page 2 !</NuxtLink>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'

const show = ref(false)
const marie = ref<HTMLImageElement>()
onMounted(() => {
    setTimeout(() => { show.value = true }, 1000);
    console.log(marie.value);
})
onBeforeUnmount(() => {
    marie.value!.classList.add('marieLeave')
})
</script>
  
  
<style>
.marie-enter-active,
.fiche-enter-active {
    transition: all 1.5s ease;
}

.marie-enter-from {
    transform: translateX(-100%);
    opacity: 0;
}

.fiche-enter-from {
    transform: translateY(100%);
    opacity: 0;
}

.marieLeave {
    transition: all .2s ease;
    transform: rotateY(0deg);
}

@media screen and (min-width: 1280px) {

    .marie-enter-from {
        transform: translateX(100%) rotateY(180deg);
        /* opacity: 0; */
    }
}
</style>
  