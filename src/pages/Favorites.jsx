import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";


const Favorites = () => {
    const { favorites } = useContext(MovieContext);
    console.log(favorites)
  return (
    <div className="flex justify-center flex-wrap ">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default Favorites