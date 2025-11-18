export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);
  if (email) {
    const response = await new Promise<{
      token: string;
      user: { name: string };
    }>((resolve) =>
      setTimeout(
        () =>
          resolve({ token: Math.random().toString(), user: { name: "Oks" } }),
        1000,
      ),
    );
    if (response) {
      setCookie(event, "token", response?.token, {
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      const { name } = response.user;
      await setUserSession(event, {
        user: {
          name,
        },
      });
      return { success: true };
    }
  }
});
