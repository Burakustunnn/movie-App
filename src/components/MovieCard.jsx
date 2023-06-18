import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { MovieContext } from "../context/MovieContext";
import FavIcon from "../assets/FavIcon";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";
const MovieCard = ({ title, poster_path, overview, vote_average, id }) => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const { addToFav, favorites  } = useContext(MovieContext);
  const isFavorite = favorites.some((item) => item.id === id);

  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center justify-between"
      id={id}
    >
      <img
        loading="lazy"
        className="rounded-t-lg"
        src={poster_path ? IMG_API + poster_path : defaultImage}
        alt="movie card image"
      />

      <div className="">
        <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>

        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p> */}
      </div>
      <div className="mb-2 flex relative">
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => navigate(`/details/${id}`)}
        >
          Details
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
        {currentUser && (
          <div className="absolute left-52 top-4" role="button">
            <FavIcon
              className=" w-6 h-6 hover:scale-110 dark:text-white"
              onClick={(e) => {
                e.stopPropagation();
                addToFav({
                  title,
                  poster_path,
                  overview,
                  vote_average,
                  id,
                });
              }}
              isFavorite={isFavorite}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
