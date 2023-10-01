import MoviesContext from "../../Context/MoviesContext";
import { useContext } from "react";

import styles from './moviesRow.module.css';

function MoviesRow () {
   const { moviesList } = useContext(MoviesContext);

  return (
    <section className={ styles.lists }>
      {moviesList.map((item, key: number) => (
        <div key={key} >
            <h2>{item.title}</h2>
            <div className={styles.listArea }>
               {item.items.results.length > 0 && item.items.results.map((item, key: number) => (
                    <img key={key} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name} />
               ))} 
            </div>
        </div>
      ))}
    </section>
  );
}

export default MoviesRow;