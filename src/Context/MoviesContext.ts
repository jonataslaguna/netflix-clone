import { createContext } from "react";
import { HomeListType, ItemInfo } from "../types";

type MoviesContextType = {
    moviesList: HomeListType[];
    featuredData: ItemInfo | undefined;
    setFeaturedData: React.Dispatch<React.SetStateAction<ItemInfo | undefined>>;
    backgroundHeader: boolean;
    setBackgroundHeader: React.Dispatch<React.SetStateAction<boolean>>;

};
 
const MoviesContext = createContext({} as MoviesContextType);

export default MoviesContext;