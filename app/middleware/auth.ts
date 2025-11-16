export default defineNuxtRouteMiddleware((to, from) => {
	const { user } = useUser();

	if (!user.value?.name) {
		return navigateTo("/login");
	}
});
