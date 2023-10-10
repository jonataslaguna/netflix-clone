const API_URL = import.meta.env.VITE_API;
const KEY = import.meta.env.VITE_API_KEY;

const handleFetch = async (endpoint: string) => {
    try {
        const response = await fetch(`${API_URL}${endpoint}&api_key=${KEY}`);
        const data = await response.json();
        return data;
    } catch(error) {
        console.error(error)
    }
};

export const getHomeList = async () => {

    return [
        {
            slug: 'originals',
            title: 'Netflix Originals',
            items: await handleFetch(`/discover/tv?with_network=213&api_key=${KEY}`)
        },

        {
            slug: 'trending',
            title: 'Recommended for You',
            items: await handleFetch(`/trending/all/week?api_key=${KEY}`)
        },

        {
            slug: 'topRated',
            title: 'On the Rise',
            items: await handleFetch(`/movie/top_rated?api_key=${KEY}`)
        },

        {
            slug: 'action',
            title: 'Action',
            items: await handleFetch(`/discover/movie?with_genres=28&api_key=${KEY}`)
        },

        {
            slug: 'comedy',
            title: 'Comedy',
            items: await handleFetch(`/discover/movie?with_genres=35&api_key=${KEY}`)
        },

        {
            slug: 'horror',
            title: 'Horror',
            items: await handleFetch(`/discover/movie?with_genres=27&api_key=${KEY}`)
        },

        {
            slug: 'romance',
            title: 'Romance',
            items: await handleFetch(`/discover/movie?with_genres=10749&api_key=${KEY}`)
        },

        {
            slug: 'documentary',
            title: 'Documentary',
            items: await handleFetch(`/discover/movie?with_genres=99&api_key=${KEY}`)
        },
    ];
}

 export const getMovieInfo = async (id:number, type:string) => {

    if(id) {
        switch(type) {
            case 'movie':
                return await handleFetch(`/movie/${id}?language=pt-BR&api_key=${KEY}`);
            case 'tv':
                return await handleFetch(`/tv/${id}?language=pt-BR&api_key=${KEY}`);
            default:
                return null;
        }
    }
}
