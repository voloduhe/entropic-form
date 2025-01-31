<script setup lang="ts">
import { ref, watch } from "vue";
import { useInterval } from "../shared/hooks/use-interval";

const difficulty = ref(0);

const { stop } = useInterval(() => {
  difficulty.value++;
});

watch(difficulty, () => {
  if (difficulty.value >= 10) {
    console.log("difficulty reached");
    stop();
  }
});

const nickname = ref("");
</script>

<template>
  <form>
    <input type="text" placeholder="Enter a nickname" v-model="nickname" />
    {{ difficulty }}
  </form>
</template>
