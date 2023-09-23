<script setup lang="ts">
import { onErrorCaptured, ref  } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

const errorRef = ref<Error | null>(null)

onErrorCaptured((error) => {
  errorRef.value = error;
})
</script>

<template>
  <div>
  </div>

  <div v-if="errorRef">
    {{  errorRef?.message }}
  </div>
  <Suspense v-else>
    <template #default>
      <HelloWorld msg="Vite + Vue" />
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
