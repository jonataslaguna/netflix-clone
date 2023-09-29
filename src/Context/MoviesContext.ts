import { createContext } from "react";
import { HomeListType } from "../types";

type MoviesContextType = {
    moviesList: HomeListType[],
};
 
const MoviesContext = createContext({} as MoviesContextType);

export default MoviesContext;