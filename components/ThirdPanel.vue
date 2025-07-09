<script setup>
import gsap from "gsap";

let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    gsap.from("#infosComplementaires", {
      rotation: -90,
      transformOrigin: "bottom center",
      scrollTrigger: {
        trigger: "#panel3",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        invalidateOnRefresh: true,
        // markers: true
      },
    });
  }, "#main"); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<template>
  <div class="w-full h-screen relative flex flex-col justify-center items-center overflow-hidden" id="panel3">
    <div class="relative overflow-visible w-[90%] landscape:h-[85%] landscape:w-[unset]" id="infosComplementaires">
      <img src="/images/infosPratiques.png" alt="graph de la MJV" class="w-full landscape:w-[unset] landscape:h-full" />
      <a href="https://discord.gg/v35ZARDXWh">
        <img src="/images/discordLogo.png" alt="" class="absolute bottom-[5%] right-[10%] w-[50%] rounded-sm shadow-[0_4px_6px_rgba(255,255,255,0.5)]" />
      </a>
    </div>
  </div>
</template>
