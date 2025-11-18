import { eventHandler, parseCookies } from "h3";

export default eventHandler((event) => {
  const config = useRuntimeConfig(event);

  event.context.kpFetch = async (url: string, options: any = {}) => {
    const { token } = parseCookies(event);
    const { user } = await requireUserSession(event);
    console.log(user);

    return await $fetch(`${config.public.kinopoiskBaseUrl}${url}`, {
      ...options,
      headers: {
        "X-API-KEY": config.kinopoiskApiKey,
        Authorization: `Bearer ${token}`,
        ...(options.headers || {}),
      },
    });
  };
});
