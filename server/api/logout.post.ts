export default defineEventHandler((event) => {
  setCookie(event, "token", "", {
    httpOnly: true,
    maxAge: -1,
    sameSite: "strict",
  });
  return { success: true };
});
