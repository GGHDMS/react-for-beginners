import {useEffect, useState} from "react";
import Movie from "../components/movie";
import PropTypes from "prop-types";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const respones = await fetch("https://yts.mx/api/v2/list_movies.json.minumum_rating=8.5&sort_by=year");

    const json = await respones.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? <h1>Loading...</h1> :
        <div>
          {movies.map(movie => (
              <Movie
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            )
          )}
        </div>
      }
    </div>
  );
}

Movie.protoType = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Home;