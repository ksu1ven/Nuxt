<script setup lang="ts">
const nuxtApp = useNuxtApp();

definePageMeta({
  middleware: "auth",
  alias: ["/home"],
});

const { filters } = useMovieFilters();

const { data, status } = await useFetch<IMovieListResponse>("/api/films", {
  query: filters,
  credentials: "include",
  // transform(input) {
  // 	return {
  // 		...input,
  // 		items: input.items.map((el) => ({
  // 			nameRu: el.nameRu,
  // 			nameEn: el.nameEn,
  // 			nameOriginal: el.nameOriginal,
  // 			year: el.year,
  // 		})),
  // 	};
  // },
  getCachedData(key) {
    const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];
    if (!data) return;
    return data;
  },
});

const movieModalOpen = ref(false);

const movies = computed(() => data.value?.items ?? []);
const totalPages = computed(() => data.value?.totalPages ?? 0);
const total = computed(() => data.value?.total ?? 0);
</script>

<template>
  <div class="p-8">
    <pre class="peer/status loading">{{ status }}</pre>
    <h1
      class="lg:text-4xl mb-6 text-3xl font-bold peer-[.loading]/status:bg-pink-400"
    >
      🎬 Movie Catalog myay
    </h1>

    <MoviesMovieFilters v-model="filters" />

    <button
      type="button"
      class="text mb-6 w-full max-w-[300px] rounded bg-pink-500 p-4 transition-colors hover:bg-pink-400"
      @click="movieModalOpen = true"
    >
      Модалка
    </button>

    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <MoviesMovieCard
        v-for="movie in movies"
        :key="movie.kinopoiskId"
        :movie="movie"
      />
    </div>

    <Transition name="page">
      <LazyMoviesMovieModal
        v-if="movieModalOpen"
        @close="movieModalOpen = false"
      />
    </Transition>
  </div>
</template>
