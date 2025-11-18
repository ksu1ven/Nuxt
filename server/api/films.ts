export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  return event.context.kpFetch("/films", { query });
});
