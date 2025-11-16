<script setup lang="ts">
definePageMeta({
	title: "Some Page",
	validate(route) {
		return (
			typeof route.params.id === "string" && /^\d+$/.test(route.params.id)
		);
	},
});

const route = useRoute();
const id = route.params.id as string;

const {
	data: movie,
	pending,
	error,
} = await useFetch<IMovieDetails>(`/api/film/${id}`);

if (!movie.value) {
	throw createError({ statusCode: 404, statusMessage: "Page Not Found" });
}

useHead({
	title:
		movie.value?.nameRu ?? movie.value?.nameEn ?? movie.value?.nameOriginal,
	link: [
		{
			rel: "canonical",
			href: `https://example.com/movies/${movie.value?.kinopoiskId}`,
		},
	],
});

useSeoMeta({
	ogTitle:
		movie.value?.nameRu ?? movie.value?.nameEn ?? movie.value?.nameOriginal,
	description: movie.value?.description,
	ogType: "video.movie",
	ogUrl: `https://example.com/movies/${movie.value?.kinopoiskId}`,
	ogImage: movie.value?.posterUrl,
	ogSiteName: "КиноКаталог",
	ogDescription: movie.value?.description,
	twitterCard: "summary_large_image",
	keywords: movie.value?.genres?.map((g) => g.genre).join(", "),
});
</script>

<template>
	<div class="p-8">
		<NuxtLink to="/movies" class="text-pink-200 hover:underline block mb-3">
			← Назад к каталогу
		</NuxtLink>

		<div v-if="pending" class="mt-8 text-gray-400">Загрузка...</div>
		<div v-else-if="error" class="mt-8 text-red-500">
			Ошибка загрузки фильма
		</div>

		<MoviesMovieDetails v-else :movie="movie!" />
	</div>
</template>
