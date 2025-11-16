<script setup lang="ts">
const { filters, resetFilters, applyFilters } = useMovieFilters();

const localFilters = reactive<IMovieFilters>({ ...filters.value });
</script>

<template>
	<form
		class="bg-purple-800 p-4 rounded-lg mb-6 space-y-4 text-white"
		@submit.prevent="applyFilters(localFilters)"
	>
		<div class="flex flex-col md:flex-row md:space-x-4">
			<div>
				<label class="block mb-1">Сортировка</label>
				<select
					v-model="localFilters.order"
					class="bg-purple-700 p-1 rounded"
				>
					<option value="RATING">Рейтинг</option>
					<option value="NUM_VOTE">Количество голосов</option>
					<option value="YEAR">Год</option>
				</select>
			</div>

			<div>
				<label class="block mb-1">Тип</label>
				<select
					v-model="localFilters.type"
					class="bg-purple-700 p-1 rounded"
				>
					<option value="ALL">Все</option>
					<option value="FILM">Фильм</option>
					<option value="TV_SHOW">Шоу</option>
					<option value="TV_SERIES">Сериал</option>
					<option value="MINI_SERIES">Мини-сериал</option>
				</select>
			</div>

			<div>
				<label class="block mb-1">Страна (id)</label>
				<input
					type="number"
					v-model.number="localFilters.countries"
					placeholder="id"
					class="bg-purple-700 p-1 rounded w-24"
				/>
			</div>

			<div>
				<label class="block mb-1">Жанр (id)</label>
				<input
					type="number"
					v-model.number="localFilters.genres"
					placeholder="id"
					class="bg-purple-700 p-1 rounded w-24"
				/>
			</div>
		</div>

		<div class="flex space-x-4">
			<div>
				<label>Минимальный рейтинг</label>
				<input
					type="number"
					v-model.number="localFilters.ratingFrom"
					class="bg-purple-700 p-1 rounded w-16"
					min="0"
					max="10"
					step="0.1"
				/>
			</div>
			<div>
				<label>Максимальный рейтинг</label>
				<input
					type="number"
					v-model.number="localFilters.ratingTo"
					class="bg-purple-700 p-1 rounded w-16"
					min="0"
					max="10"
					step="0.1"
				/>
			</div>
		</div>

		<div class="flex space-x-4">
			<div>
				<label>Год с</label>
				<input
					type="number"
					v-model.number="localFilters.yearFrom"
					class="bg-purple-700 p-1 rounded w-20"
				/>
			</div>
			<div>
				<label>Год до</label>
				<input
					type="number"
					v-model.number="localFilters.yearTo"
					class="bg-purple-700 p-1 rounded w-20"
				/>
			</div>
		</div>

		<div>
			<label>Ключевое слово</label>
			<input
				type="text"
				v-model="localFilters.keyword"
				class="bg-purple-700 p-1 rounded w-full"
				placeholder="Название фильма"
			/>
		</div>

		<div class="flex gap-3 items-center">
			<button
				type="reset"
				class="max-w-[300px] transition-colors bg-gray-100 hover:bg-gray-200 p-4 rounded w-full text-black"
				@click="resetFilters"
			>
				Сбросить
			</button>

			<button
				type="submit"
				class="max-w-[300px] transition-colors bg-pink-500 hover:bg-pink-400 p-4 rounded w-full"
			>
				Применить
			</button>
		</div>
	</form>
</template>
