import styles from './header.module.css';
import MoviesContext from '../../Context/MoviesContext';
import { useContext, useEffect } from 'react';

function Header () {
    const { backgroundHeader, setBackgroundHeader } = useContext(MoviesContext);

    useEffect(() => {
        const handleScrollListener = () => {
            if (window.scrollY > 10) {
                setBackgroundHeader(true);
            } else {
                setBackgroundHeader(false);
            }
        }

        window.addEventListener('scroll', handleScrollListener);

        return () => {
            window.removeEventListener('scroll', handleScrollListener)
        };
    }, [setBackgroundHeader])

    return (
        <header className={`${styles.header} ${backgroundHeader ? styles.black : ''}`}>
            <div className={styles.logo}>
                <img src="/images/logonetflix.png" alt="Netflix logo" />
            </div>
            <div className={styles.user}>
                <img src="/images/netflixAvatar.png" alt="user avatar" />
            </div>
        </header>
    )
}

export default Header;