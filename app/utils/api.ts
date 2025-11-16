export async function apiFetch<T>(
	endpoint: string,
	options: { method?: string; query?: Record<string, any>; body?: any } = {}
): Promise<T> {
	const config = useRuntimeConfig();

	const baseUrl = config.public.kinopoiskBaseUrl;

	const queryString = options.query
		? "?" +
		  new URLSearchParams(
				options.query as Record<string, string>
		  ).toString()
		: "";

	const res = await fetch(`${baseUrl}${endpoint}${queryString}`, {
		method: options.method || "GET",
		headers: {
			"X-API-KEY": config.kinopoiskApiKey,
			"Content-Type": "application/json",
		},
		body: options.body ? JSON.stringify(options.body) : undefined,
	});

	if (!res.ok) {
		const text = await res.text();
		throw new Error(`API Error: ${res.status} ${text}`);
	}

	return res.json() as Promise<T>;
}
