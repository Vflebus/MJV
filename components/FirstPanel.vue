<script setup>
import gsap from 'gsap';

let ctx;

onMounted(() => {
    ctx = gsap.context((self) => {
        gsap.from('.fiche', {
            yPercent: 100,
            duration: 1
        })
        gsap.from('.marie', {
            xPercent: -100,
            duration: 1
        })
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
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
    <div class="w-full h-screen overflow-hidden relative" id="panel1">
        <img src="/images/feuilleNom.webp" alt="fiche principale"
            class="fiche fixed bottom-0 left-0 landscape:h-screen transform-gpu" id="ficheGrd" />
        <img src="/images/fichePrecisions.webp" alt="fiche de précisions"
            class="fiche fixed bottom-0 left-0 w-[50%] landscape:w-[20%] transform-gpu" />
        <img src="/images/marie1291.webp" alt="Personnage Marie d'Animal Crossing"
            class="marie w-[40%] fixed top-0 left-0 landscape:max-h-full landscape:max-w-[40%] landscape:w-[unset] landscape:[transform:rotateY(180deg)] landscape:[left:unset] landscape:right-0 transform-gpu" />
    </div>
</template>
