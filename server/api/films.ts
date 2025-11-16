import { apiFetch } from "~/utils/api";

export default defineEventHandler(async (event) => {
  const r = parseCookies(event);
  const query = getQuery(event);
  return await apiFetch("/films", { query });
});
