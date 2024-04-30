import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");

  const getMovieDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <div>좋아요 수: {movie.like_count}</div>
        </div>
      )}
    </div>
  );
}

export default Detail;
