<template>
  <div class="bg-desk h-screen w-screen overflow-hidden relative">
    <Transition name="fiche">
      <div v-if="show" class="fixed bottom-0 left-0 w-screen h-screen">
        <img src="~/assets/imgs/feuilleNom.png" alt="fiche" class="absolute bottom-0 left-0 xl:h-screen transform-gpu">
        <img src="~/assets/imgs/fichePrecisions.png" alt="fiche"
          class="absolute bottom-0 left-0 w-[50%] xl:w-[20%] transform-gpu">
      </div>
    </Transition>
    <Transition name="marie">
      <img src="~/assets/imgs/marie.png" alt="Personnage Marie d'Animal Crossing" v-if="show"
        class="max-h-[40%] max-w-[50%] absolute top-0 pointer-events-none xl:max-h-full xl:max-w-full xl:[transform:rotateY(180deg)] xl:right-0 transform-gpu">
    </Transition>
  </div>
</template>

<script setup typescript>
import { ref } from 'vue'

const show = ref(false)
onMounted(() => {
  setTimeout(() => { show.value = true }, 500);
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
