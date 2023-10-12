import { useEffect, useState } from "react";
import MoviesContext from "./MoviesContext";
import { getHomeList, getMovieInfo } from "../utils/api";
import { HomeListType, ItemInfo } from "../types";


type MoviesProviderProps = {
    children: React.ReactNode;
  };
  
function MoviesProvider  ({ children }: MoviesProviderProps )  {
    const [moviesList, setMoviesList] = useState<HomeListType[]>([]);
    const [featuredData, setFeaturedData ] = useState<ItemInfo | undefined >();

    useEffect(() => {
        const getMovies = async () => {
            const listMovies = await getHomeList();
            setMoviesList(listMovies);
            const originals = listMovies.filter((item) => item.slug === 'originals');
            const randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1)); 
            const item = originals[0].items.results[randomChosen];
            const itemInfo = await getMovieInfo(item.id, 'tv');
            setFeaturedData(itemInfo); 
        }
        getMovies();
    }, []);

    return (
        <MoviesContext.Provider value={{moviesList, featuredData: featuredData, setFeaturedData}}>
            {children}
        </MoviesContext.Provider>
    );
}

export default MoviesProvider;