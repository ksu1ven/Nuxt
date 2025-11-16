import { apiFetch } from "~/utils/api";

export default defineEventHandler(async (event) => {
	const id = getRouterParam(event, "id");

	if (!id) {
		throw createError({
			statusCode: 400,
			statusMessage: "Missing film ID",
		});
	}

	return await apiFetch(`/films/${id}`);
});
