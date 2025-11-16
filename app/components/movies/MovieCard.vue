<script setup lang="ts">
defineProps<{ movie: Partial<IMovie> }>();
</script>

<template>
	<div
		class="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition cursor-pointer"
	>
		<NuxtLink :to="`/movies/${movie.kinopoiskId}`">
			<img
				:src="movie.posterUrlPreview"
				:alt="movie.nameOriginal ?? movie.nameRu ?? ''"
				class="rounded mb-3 w-full h-60 object-cover"
			/>
			<h2 class="text-lg font-semibold">
				{{
					movie.nameRu ??
					movie.nameEn ??
					movie.nameOriginal ??
					"No name"
				}}
			</h2>
			<p class="text-sm opacity-70">{{ movie.year }}</p>
		</NuxtLink>
	</div>
</template>
