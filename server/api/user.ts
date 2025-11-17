export default defineEventHandler(async (event) => {
  const token = getCookie(event, "token");
  console.log(token);
  if (!token) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  return { tokenExist: true };
});
