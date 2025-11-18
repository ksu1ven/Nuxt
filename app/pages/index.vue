<template>
  <section class="">
    <h1 class="~text-[18px]/[24px]">Main Page</h1>

    <button
      type="button"
      @click="navigate"
      class="md:max-lg:bg-red dark:bg-black/20"
    >
      Navigate
    </button>

    <div class="full-bleed xl:full-bleed-reset overflow-hidden">
      <ul
        class="container-by-padding xl:container-by-padding-reset flex snap-x snap-mandatory gap-x-4 overflow-x-auto *:bg-sky-50"
      >
        <li
          v-for="n in 4"
          class="w-full shrink-0 snap-center [&:nth-child(1)]:bg-red"
        >
          Отлично подходит для: статей длинного текста каталогов из простого
          текста списков новостного блока документации Не подходит: для карточек
          для layout-а для интерактивных элементовОтлично подходит для: статей
          длинного текста каталогов из простого текста списков новостного блока
          документации Не подходит: для карточек для layout-а для интерактивных
          элементовОтлично подходит для: статей длинного текста каталогов из
          простого текста списков новостного блока документации Не подходит: для
          карточек для layout-а для интерактивных элементовОтлично подходит для:
          -сх0татей длинного текста каталогов из простого текста списков
          новостного блока документации Не подходит: для карточек для layout-а
          для интерактивных элементовОтлично подходит для: статей длинного
          текста каталогов из простого текста списков новостного блока
          документации Не подходит: для карточек для layout-а для интерактивных
          элементовОтлично
        </li>
      </ul>
    </div>

    <label
      class="has-[:checked]:bg-indigo-50 has-[:checked]:text-indigo-900 has-[:checked]:ring-indigo-200"
    >
      <svg fill="currentColor"></svg>
      Google Pay
      <input type="radio" class="checked:border-indigo-500" />
    </label>

    <!-- <div class="relative isolate">
      <div class="absolute z-50 h-20 w-20 bg-red">Верхний элемент внутри</div>
    </div>

    <div class="absolute z-10 h-20 w-20 bg-green">
      Этот элемент всегда будет ниже
    </div> -->

    <div class="grid grid-cols-3 justify-items-start gap-6">
      <div class="bg-purple-50 p-4">01</div>
      <div class="bg-purple-50 p-4">02</div>
      <div class="bg-purple-50 p-4">03</div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({ alias: ["/home"] });

const navigate = () => {
  navigateTo("/movies");
  throw Error("xdfghj");
};

onMounted(() => {
  document.documentElement.classList.add("dark");
});
</script>
