export type Movie = {
    backdrop_path: string,
    first_air_date: string,
    genre_ids: number[],
    id: number,
    name: string,
    origin_country: string[],
    original_language: string,
    original_name: string,
    overview: string,
    popularity: number,
    poster_path: string,
    vote_average: number,
    vote_count: number,
}

export type HomeListType = {
    slug: string,
    title: string,
    items: ItensType
}

export type ItensType = {
    page: number,
    results: Movie[],
}