export interface IMovieCountry {
	country: string;
}

export interface IMovieGenre {
	genre: string;
}

export interface IMovie {
	kinopoiskId: number;
	imdbId: string | null;
	nameRu: string | null;
	nameEn: string | null;
	nameOriginal: string | null;
	countries: IMovieCountry[];
	genres: IMovieGenre[];
	ratingKinopoisk: number | null;
	ratingImdb: number | null;
	year: number;
	type: string;
	posterUrl: string;
	posterUrlPreview: string;
}

export interface IMovieListResponse {
	total: number;
	totalPages: number;
	items: Partial<IMovie>[];
}

export interface IMovieFilters {
	countries?: number[];
	genres?: number[];
	order?: "RATING" | "NUM_VOTE" | "YEAR";
	type?: "FILM" | "TV_SHOW" | "TV_SERIES" | "MINI_SERIES" | "ALL";
	ratingFrom?: number;
	ratingTo?: number;
	yearFrom?: number;
	yearTo?: number;
	imdbId?: string;
	keyword?: string;
	page?: number;
}

export interface IMovieDetails extends IMovie {
	kinopoiskHDId?: string | null;
	reviewsCount?: number;
	ratingGoodReview?: number | null;
	ratingGoodReviewVoteCount?: number;
	ratingKinopoiskVoteCount?: number;
	ratingImdbVoteCount?: number;
	ratingFilmCritics?: number | null;
	ratingFilmCriticsVoteCount?: number;
	ratingAwait?: number | null;
	ratingAwaitCount?: number;
	ratingRfCritics?: number | null;
	ratingRfCriticsVoteCount?: number;
	webUrl?: string;
	filmLength?: number | null;
	slogan?: string | null;
	description?: string | null;
	shortDescription?: string | null;
	editorAnnotation?: string | null;
	isTicketsAvailable?: boolean;
	productionStatus?: string | null;
	ratingMpaa?: string | null;
	ratingAgeLimits?: string | null;
	startYear?: number | null;
	endYear?: number | null;
	serial?: boolean;
	shortFilm?: boolean;
	completed?: boolean;
	hasImax?: boolean;
	has3D?: boolean;
	lastSync?: string;
	coverUrl?: string | null;
	logoUrl?: string | null;
}
