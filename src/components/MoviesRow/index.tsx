import MoviesContext from "../../Context/MoviesContext";
import { useContext, useEffect, useState } from "react";

import rightIcon from '/svg/right.svg';
import leftIcon from '/svg/left.svg';
import styles from './moviesRow.module.css';

function MoviesRow () {
   const { moviesList } = useContext(MoviesContext);
   const [scrollRowMovies, setScrollRowMovies] = useState<Array<number>>([]);

   useEffect(() => {
    setScrollRowMovies(moviesList.map(() => 0));
  }, [moviesList]);
  
   
    const handleClickLeftArrow = (index:number) => {
      const newScrollRowMovies = [...scrollRowMovies];
      const windowWidth = window.innerWidth;
      const scrollAmount = windowWidth * 0.3;
      newScrollRowMovies[index] = Math.min(newScrollRowMovies[index] + scrollAmount, 0);
      setScrollRowMovies(newScrollRowMovies);
   };

   const handleClickRightArrow = (index:number) => {
    const newScrollRowMovies = [...scrollRowMovies];
    const windowWidth = window.innerWidth;
    const movieListLength = moviesList[index].items.results.length;
    const rowListWidth = movieListLength * 150; 
    const maxScrollValue = rowListWidth - windowWidth;
    const scrollAmount = windowWidth * 0.3; 
  
    if (newScrollRowMovies[index] > -maxScrollValue ) {
      newScrollRowMovies[index] -= scrollAmount;
    }
    setScrollRowMovies(newScrollRowMovies);
    console.log(scrollRowMovies)
  };
  

  return (
    <section className={ styles.lists }>
      {moviesList.map((item, index: number) => (
        <div key={index} className={ styles.movieRow } >
            <h2>{item.title}</h2>
            <div className={ styles.movieRowLeft } onClick={() => handleClickLeftArrow(index) }>
              <img src={leftIcon} alt="left" />
            </div>
            <div className={ styles.movieRowRight } onClick={() => handleClickRightArrow(index) } >
              <img src={rightIcon} alt="right" />
            </div> 
            <div className={styles.movieRowlistArea }>
                <div className={ styles.movieRowList} style={{
                  marginLeft: scrollRowMovies[index],
                  
                }}>
                    {item.items.results.length > 0 && item.items.results.map((item, key: number) => (
                        <div key={key} className={ styles.movieRowItem }>
                          {
                          item.poster_path 
                          ? <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_name} />
                          : null 
                          }
                        </div>
                    ))} 
                </div>
            </div>
        </div>
      ))}
    </section>
  );
}

export default MoviesRow;