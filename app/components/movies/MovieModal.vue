<template>
	<div
		class="fixed z-1000 inset-0 flex justify-center items-center bg-black/10"
		@click.self="$emit('close')"
	>
		<div class="w-[500px] p-8 bg-white rounded-md text-black">
			<h2 class="text-xl font-medium">Movie Modal!</h2>
		</div>
	</div>
</template>

<script setup lang="ts">
defineEmits<{ (e: "close"): void }>();
</script>
