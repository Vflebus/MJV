<script setup>
import gsap from 'gsap';

let ctx;

onMounted(() => {
    ctx = gsap.context((self) => {
        gsap.from('.graph', {
            rotation: 90,
            transformOrigin: 'bottom center',
            scrollTrigger: {
                trigger: '#panel2',
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: true,
                invalidateOnRefresh: true,
                // markers: true
            },
            onComplete: () => {
                gsap.set('.graph', { rotation: 0 })
                gsap.to('.graph', {
                    rotation: -45,
                    x: () => -window.innerWidth,
                    transformOrigin: 'bottom center',
                    scrollTrigger: {
                        trigger: '#panel2',
                        endTrigger: '#panel3',
                        start: 'bottom 85%',
                        end: 'bottom bottom',
                        scrub: true,
                        invalidateOnRefresh: true,
                        // markers: true
                    },
                })
            }
        })
        gsap.to('#levelNote', {
            rotation: 45,
            x: () => window.innerWidth,
            transformOrigin: 'bottom center',
            scrollTrigger: {
                trigger: '#panel2',
                endTrigger: '#panel3',
                start: 'bottom 85%',
                end: 'bottom bottom',
                scrub: true,
                invalidateOnRefresh: true,
                // markers: true
            },
        })
    }, '#main'); // <- Scope!
});

onUnmounted(() => {
    ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
    <div class="w-full h-screen relative flex flex-col justify-end items-center pb-4 overflow-y-visible gap-8 font-bold uppercase text-center"
        id="panel2">
        <div class="relative overflow-visible w-[85%] landscape:h-[85%] landscape:w-[unset]">
            <img src="/images/note.png" alt="" class="w-[50%] rotate-[0deg] absolute -top-[15%] -right-[0%]" id="levelNote">
            <img src="/images/MJVgraph.webp" alt="graph de la MJV"
                class="graph w-full shadow-paper landscape:w-[unset] landscape:h-full">
        </div>
    </div>
</template>