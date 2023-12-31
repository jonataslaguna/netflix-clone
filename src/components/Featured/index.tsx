import { useContext, useEffect, useState } from 'react';
import MoviesContext from '../../Context/MoviesContext';
import { Link } from 'react-router-dom';
import playIcon from '/svg/play.svg';

import styles from './featuredMovie.module.css'; 

function Featured() {
    const { featuredData } = useContext(MoviesContext);
    const [dateMovie, setDateMovie] = useState<number>();
    const [genres, setGenres] = useState<string | undefined>('');
    const [titleSize, setTitleSize] = useState(false);

    useEffect(() => {
        if (featuredData) {
            const firstDate = new Date(featuredData.first_air_date);
            setDateMovie(firstDate.getFullYear())
        }
        const getGenres = () => {
            const genresArray = featuredData?.genres.map((genre) => genre.name).join(', ');
            setGenres(genresArray);
        }
        getGenres();
    }, [featuredData]);

    useEffect(() => {
        const handleTitleSize = () => {
            if (featuredData && featuredData?.original_name.length > 25) {
                setTitleSize(true);
            }
        }
        handleTitleSize()
    },[featuredData])

    const truncateOverview = (overview: string | undefined, maxLength: number) => {
        if (overview && overview.length > maxLength) {
            return overview.slice(0, maxLength) + '...';
        }
        return overview;
    };

    return (
        <section className={ styles.featured } style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredData?.backdrop_path})`
        }}>
            <div className={ styles.featuredVertical }>
                <div className={ styles.featuredHorizontal }>
                    <h1 className={`${titleSize ? styles.featuredNameSmallFont : styles.featuredName}`}>{featuredData?.original_name}</h1>
                    <div className={styles.featuredInfo}>
                        <p className={styles.featuredPoints}>{featuredData?.vote_average.toFixed(2)} points</p>
                        <p className={styles.featuredYear}>{dateMovie}</p>
                        <p className={styles.featuredSeasons}>{featuredData?.number_of_seasons} season{featuredData?.number_of_seasons !== 1 ? 's' : ''}</p>
                    </div>
                    <div className={styles.featuredDescription}>
                    <p>{truncateOverview(featuredData?.overview, 100)}</p>
                    </div>
                    <div className={styles.featuredButtons}>
                        <button className={styles.whatchButton}><Link to={`#`}><img src={playIcon} alt="" /> Watch</Link></button>
                        <button className={styles.myListButton}><Link to={`#`}>+ My List</Link></button>
                    </div>
                    <div>
                        <p className={styles.featuredGenres}><strong>{genres? 'Genres:' : null} </strong>{genres}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Featured;