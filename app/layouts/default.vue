<template>
  <header class="flex items-center justify-between bg-purple-900 p-4">
    <h1 class="text-xl font-bold text-white">🎬 Nuxt Movies</h1>
    <nav class="space-x-4">
      <NuxtLink to="/" class="text-white transition hover:text-blue-400">
        Главная
      </NuxtLink>
      <NuxtLink to="/movies" class="text-white transition hover:text-blue-400">
        Каталог
      </NuxtLink>
      <NuxtLink to="/profile" class="text-white transition hover:text-blue-400">
        Профиль
      </NuxtLink>
      <NuxtLink to="/login" class="text-white transition hover:text-blue-400">
        Логин
      </NuxtLink>
    </nav>
  </header>

  <main class="container grow">
    <slot />
  </main>

  <footer class="bg-purple-900 p-4 text-center text-sm text-gray-400">
    © {{ new Date().getFullYear() }} Nuxt Movies
  </footer>
</template>
