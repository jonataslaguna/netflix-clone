import { useEffect, useState } from "react";
import MoviesContext from "./MoviesContext";
import { getHomeList } from "../utils/api";
import { HomeListType } from "../types";


type MoviesProviderProps = {
    children: React.ReactNode;
  };
  
function MoviesProvider  ({ children }: MoviesProviderProps )  {
    const [moviesList, setMoviesList] = useState<HomeListType[]>([]);

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