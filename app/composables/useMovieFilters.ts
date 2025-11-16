import type { IMovieFilters } from "~/types/movie";
import { useRouter, useRoute } from "vue-router";

export const useMovieFilters = () => {
	const router = useRouter();
	const route = useRoute();

	const defaultFilters: IMovieFilters = {
		countries: [],
		genres: [],
		order: "RATING",
		type: "ALL",
		ratingFrom: 0,
		ratingTo: 10,
		yearFrom: 1000,
		yearTo: 3000,
		keyword: "",
		page: 1,
	};

	const parseQueryToFilters = (): IMovieFilters => {
		const q = route.query;
		return {
			countries: q.countries
				? String(q.countries).split(",").map(Number)
				: [],
			genres: q.genres ? String(q.genres).split(",").map(Number) : [],
			order: (q.order as "RATING" | "NUM_VOTE" | "YEAR") || "RATING",
			type:
				(q.type as
					| "FILM"
					| "TV_SHOW"
					| "TV_SERIES"
					| "MINI_SERIES"
					| "ALL") || "ALL",
			ratingFrom: q.ratingFrom ? Number(q.ratingFrom) : 0,
			ratingTo: q.ratingTo ? Number(q.ratingTo) : 10,
			yearFrom: q.yearFrom ? Number(q.yearFrom) : 1000,
			yearTo: q.yearTo ? Number(q.yearTo) : 3000,
			keyword: (q.keyword as string) || "",
			page: q.page ? Number(q.page) : 1,
		};
	};

	const filters = useState<IMovieFilters>("movieFilters", () =>
		parseQueryToFilters()
	);

	const applyFiltersToQuery = (newFilters: IMovieFilters) => {
		const query: Record<string, string> = {};
		if (newFilters.countries?.length)
			query.countries = newFilters.countries.join(",");
		if (newFilters.genres?.length)
			query.genres = newFilters.genres.join(",");
		if (newFilters.order && newFilters.order !== "RATING")
			query.order = newFilters.order;
		if (newFilters.type && newFilters.type !== "ALL")
			query.type = newFilters.type;
		if (newFilters.ratingFrom !== 0)
			query.ratingFrom = String(newFilters.ratingFrom);
		if (newFilters.ratingTo !== 10)
			query.ratingTo = String(newFilters.ratingTo);
		if (newFilters.yearFrom !== 1000)
			query.yearFrom = String(newFilters.yearFrom);
		if (newFilters.yearTo !== 3000)
			query.yearTo = String(newFilters.yearTo);
		if (newFilters.keyword) query.keyword = newFilters.keyword;
		if (newFilters.page && newFilters.page !== 1)
			query.page = String(newFilters.page);

		router.replace({ query: query });
	};

	const applyFilters = (newFilters: IMovieFilters) => {
		filters.value = { ...newFilters, page: 1 };
		applyFiltersToQuery(filters.value);
	};

	const resetFilters = () => {
		filters.value = { ...defaultFilters };
		applyFiltersToQuery(defaultFilters);
	};

	if (!route.query || Object.keys(route.query).length === 0) {
		applyFiltersToQuery(filters.value);
	}

	return { filters, applyFilters, resetFilters };
};
