import { useContext } from "react";
import { MovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";


const Favorites = () => {
    const { favorites } = useContext(MovieContext);
    console.log(favorites)
  return (
    <div className="flex justify-center flex-wrap gap-6 p-4 dark:bg-gray-700 bg-gray-100 ">
      {favorites.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default Favorites