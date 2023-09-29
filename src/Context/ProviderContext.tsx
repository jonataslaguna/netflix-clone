import { useEffect, useState } from "react";
import MoviesContext from "./MoviesContext";
import { getHomeList } from "../utils/api";
import { HomeListType, ItensType } from "../types";


type MoviesProviderProps = {
    children: React.ReactNode;
  };
  
function MoviesProvider  ({ children }: MoviesProviderProps )  {
    const [moviesList, setMoviesList] = useState<{ slug: string; title: string; items: ItensType }[] | HomeListType[]>([]);

    useEffect(() => {
        const getMovies = async () => {
            const listMovies = await getHomeList();
            setMoviesList(listMovies);

        }
        getMovies();
    }, []);

    return (
        <MoviesContext.Provider value={{moviesList}}>
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesProvider;