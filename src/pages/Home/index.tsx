import { useContext } from 'react';
import Featured from '../../components/Featured';
import MoviesRow from '../../components/MoviesRow';
import MoviesContext from '../../Context/MoviesContext';
import Header from '../../components/Header';

function Home() {
    const { featuredData } = useContext(MoviesContext);

    return (
        <section>
          <Header />
          {featuredData && <Featured /> }
          <MoviesRow />
        </section>
    )
}

export default Home;