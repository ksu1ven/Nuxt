export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);
  if (email) {
    const response = await new Promise<{ token: string }>((resolve) =>
      setTimeout(() => resolve({ token: Math.random().toString() }), 1000),
    );
    if (response) {
      setCookie(event, "token", response?.token, {
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
        // httpOnly: true,
      });
      return { success: true };
    }
  }
});
