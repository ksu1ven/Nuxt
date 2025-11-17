export default defineNuxtPlugin((nuxtApp) => {
  const token = useCookie("token");
  const config = useRuntimeConfig();

  const $customFetch = $fetch.create({
    baseURL: config.public.kinopoiskBaseUrl,
    onRequest({ request, options, error }) {
      console.log(config);
      if (token) {
        options.headers.set("Authorization", `Bearer ${token.value}`);
      }
      options.headers.set("X-API-KEY", config.kinopoiskApiKey);
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo("/login"));
      }
    },
  });

  return {
    provide: {
      customFetch: $customFetch,
    },
  };
});
