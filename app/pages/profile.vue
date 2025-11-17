<template>
  <div>Эта страница видна только если у вас есть куки авторизации.</div>
</template>

<script setup lang="ts">
import type { NuxtError } from "#app";

definePageMeta({
  middleware: async (to, from) => {
    try {
      const response = await $fetch("/api/user");
      console.log(response);
    } catch (err: unknown) {
      if ((err as NuxtError).statusCode === 401) {
        console.log("navigate");
        return navigateTo("/login");
      }
    }
  },
});
</script>
