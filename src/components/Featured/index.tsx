import { useContext } from "react";
import MoviesContext from "../../Context/MoviesContext";

import styles from './featuredMovie.module.css'; 

function Featured() {
    const { featuredData } = useContext(MoviesContext);

    return (
        <section className={ styles.feature } style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${featuredData?.backdrop_path})`
        }}>
            <div className={ styles.featureVertical }>
                <div className={ styles.featureHorizontal }>
                    
                </div>
            </div>
        </section>
    )
}

export default Featured;