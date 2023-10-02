<template>
    <div class="w-screen h-screen flex justify-center items-end">
        <div class="pointer-events-none	">
            <Transition name="fiche">
                <div v-if="show" class="fixed bottom-0 left-0 w-screen h-screen">
                    <NuxtImg src="/images/feuilleNom.webp" alt="fiche principale"
                        class="absolute bottom-0 left-0 xl:h-screen transform-gpu" />
                    <NuxtImg src="/images/fichePrecisions.webp" alt="fiche de précisions"
                        class="absolute bottom-0 left-0 w-[50%] xl:w-[20%] transform-gpu" />
                </div>
            </Transition>
            <Transition name="marie">
                <NuxtImg v-if="show" src="/images/marie1291.webp" alt="Personnage Marie d'Animal Crossing"
                    class="h-[40%] max-w-[50%] absolute top-0 pointer-events-none xl:h-full xl:max-w-full xl:[transform:rotateY(180deg)] xl:right-0 transform-gpu" />
            </Transition>
        </div>
        <NuxtLink href="/">Index !</NuxtLink>
    </div>
</template>
  
<script setup typescript>
import { ref } from 'vue'

const show = ref(false)
onMounted(() => {
    setTimeout(() => { show.value = true }, 1000);
})
</script>
  
  
<style>
.marie-enter-active,
.marie-leave-active,
.fiche-enter-active,
.fiche-leave-active {
    transition: all 1.5s ease;
}

.marie-enter-from,
.marie-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}

.fiche-enter-from,
.fiche-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

@media screen and (min-width: 1280px) {

    .marie-enter-from,
    .marie-leave-to {
        transform: translateX(100%) rotateY(180deg);
        /* opacity: 0; */
    }
}
</style>
  