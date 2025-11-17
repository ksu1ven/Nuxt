export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const config = useRuntimeConfig(event);
  const { token } = parseCookies(event);
  console.log(token);

  const response = await $fetch(`${config.public.kinopoiskBaseUrl}/films`, {
    headers: {
      "X-API-KEY": config.kinopoiskApiKey,
      Authorization: `Bearer ${token}`,
    },
    query,
  });
  return response;
});
