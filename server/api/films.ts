import { apiFetch } from "~/utils/api";

export default defineEventHandler(async (event) => {
  const r = parseCookies(event);
  console.log(r);
  const query = getQuery(event);
  console.log("server");
  return await apiFetch("/films", { query });
});
