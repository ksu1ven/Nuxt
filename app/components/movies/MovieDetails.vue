<template>
	<div class="flex flex-col md:flex-row gap-8">
		<img
			:src="movie.posterUrl"
			:alt="movie.nameRu ?? movie.nameEn ?? movie.nameOriginal ?? 'Movie'"
			class="w-full md:w-1/3 rounded-2xl shadow-lg"
		/>

		<div class="flex flex-col gap-4">
			<h1 class="text-3xl font-bold">{{ movie.nameRu }}</h1>
			<p v-if="movie.nameOriginal" class="italic text-gray-300">
				{{ movie.nameOriginal }}
			</p>

			<div class="flex flex-wrap gap-3">
				<span
					v-for="genre in movie.genres"
					:key="genre.genre"
					class="bg-purple-800 px-3 py-1 rounded-full text-sm"
				>
					{{ genre.genre }}
				</span>
			</div>

			<p><strong>Год:</strong> {{ movie.year }}</p>
			<p><strong>Страна:</strong> {{ movie.countries?.[0]?.country }}</p>
			<p><strong>Рейтинг:</strong> {{ movie.ratingKinopoisk }}</p>

			<p class="mt-4 text-lg">{{ movie.description }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { IMovieDetails } from "~/types/movie";

defineProps<{
	movie: IMovieDetails;
}>();
</script>
