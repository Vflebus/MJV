<script setup>
import gsap from 'gsap';
import { ref } from 'vue'

const show = ref(false)
const marie = ref(null)

let ctx;

onMounted(() => {
    setTimeout(() => {
        show.value = true
    }, 500);
});

watch(marie, () => {
    if (document.getElementsByClassName('marie')) {
        ctx = gsap.context((self) => {
            gsap.to('.fiche', {
                opacity: 0,
                xPercent: -100,
                scrollTrigger: {
                    trigger: '#panel1',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            })
            gsap.to('.marie', {
                // opacity: 0,
                x: () => window.innerWidth,
                scrollTrigger: {
                    trigger: '#panel1',
                    // endTrigger: '#panel1',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    invalidateOnRefresh: true,
                },
            })
        }, '#main'); // <- Scope!
    }
})

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
    <div class="w-full h-screen overflow-hidden relative" id="panel1">
        <Transition name="fiche">
            <img v-if="show" src="/images/feuilleNom.webp" alt="fiche principale"
                class="fiche fixed bottom-0 left-0 landscape:h-screen transform-gpu" id="ficheGrd" />
        </Transition>
        <Transition name="fiche">
            <img v-if="show" src="/images/fichePrecisions.webp" alt="fiche de précisions"
                class="fiche fixed bottom-0 left-0 w-[50%] landscape:w-[20%] transform-gpu" />
        </Transition>
        <Transition name="marie">
            <img v-if="show" ref="marie" src="/images/marie1291.webp" alt="Personnage Marie d'Animal Crossing"
                class="marie w-[40%] fixed top-0 left-0 landscape:max-h-full landscape:max-w-[40%] landscape:w-[unset] landscape:[transform:rotateY(180deg)] landscape:[left:unset] landscape:right-0 transform-gpu" />
        </Transition>
    </div>
</template>

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

@media screen and (min-width: 1280px) {

    .marie-enter-from {
        transform: translateX(100%) rotateY(180deg);
        /* opacity: 0; */
    }
}
</style>