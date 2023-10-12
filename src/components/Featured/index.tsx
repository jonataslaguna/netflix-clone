import { useContext, useEffect, useState } from "react";
import MoviesContext from "../../Context/MoviesContext";

import styles from './featuredMovie.module.css'; 

function Featured() {
    const { featuredData } = useContext(MoviesContext);
    const [dateMovie, setDateMovie] = useState<Date>();
    const [genres, setGenres] = useState<string | undefined>('');

    useEffect(() => {
        if (featuredData) {
            const firstDate = new Date(featuredData.first_air_date);
            setDateMovie(firstDate)
        }
        const getGenres = () => {
            const genresArray = featuredData?.genres.map((genre) => genre.name).join(', ');
            setGenres(genresArray);
        }
        getGenres();
    }, [featuredData]);

    return (
        <section className={ styles.feature } style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredData?.backdrop_path})`
        }}>
            <div className={ styles.featureVertical }>
                <div className={ styles.featureHorizontal }>
                    <h1 className={styles.featureName}>{featuredData?.original_name}</h1>
                    <div className={styles.featureInfo}>
                        <p className={styles.featurePoints}>{featuredData?.vote_average} points</p>
                        <p className={styles.featureYear}>{dateMovie?.getFullYear()}</p>
                        <p className={styles.featureSeasons}>{featuredData?.number_of_seasons} season{featuredData?.number_of_seasons !== 1 ? 's' : ''}</p>
                    </div>
                    <div className={styles.featureDescription}>
                        <p>{featuredData?.overview}</p>
                    </div>
                    <div className={styles.featureButtons}>
                        <button>  ▶ Watch</button>
                        <button>+ My List</button>
                    </div>
                    <div>
                        <p className={styles.featureGenres}><strong>Genres: </strong>{genres}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;