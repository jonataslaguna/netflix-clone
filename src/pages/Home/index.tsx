import { useContext } from "react";
import Featured from "../../components/Featured";
import MoviesRow from "../../components/MoviesRow";
import MoviesContext from "../../Context/MoviesContext";

function Home() {
    const { featuredData } = useContext(MoviesContext);

    return (
        <div>
          {featuredData && <Featured /> }
          <MoviesRow />
        </div>
    )
}

export default Home;