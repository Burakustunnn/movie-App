import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const MovieDetail = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const { id } = useParams();

  const API_KEY = process.env.REACT_APP_TMDB_KEY;
  const movieDetailBaseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
  console.log(movieDetails);
  useEffect(() => {
    axios
      .get(movieDetailBaseUrl)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="min-h-screen grid place-items-center font-mono bg-gray-900 text-center">
      <div className="bg-white rounded-md dark:bg-gray-800 shadow-lg">
        <div className="md:flex px-4 leading-none max-w-4xl">
          <div className="flex-none ">
            <img
              src={
                movieDetails
                  ? baseImageUrl + movieDetails.backdrop_path
                  : defaultImage
              }
              alt="pic"
              className="h-80 w-80 rounded-md transform -translate-y-4 border-4 border-gray-300 shadow-lg"
            />
          </div>
          <div className="flex-col text-gray-300">
            <p className="pt-4 text-2xl font-bold">{movieDetails.title}</p>
            <hr className="hr-text" />
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">
                2h 2min | Crime, Drama, Thriller
              </span>
              <span className="font-bold" />
            </div>
            <p className="hidden md:block px-4 my-4 text-sm text-left">
              {movieDetails.overview}
            </p>
            <p className="flex text-md px-4 my-2">
              Rating: 9.0/10
              <span className="font-bold px-2">|</span>
              Mood: Dark
            </p>
            {/* <div className="text-xs">
              <button
                type="button"
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                TRAILER
              </button>
              <button
                type="button"
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                IMDB
              </button>
              <button
                type="button"
                className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline"
              >
                AMAZON
              </button>
            </div> */}
          </div>
        </div>
        {/*             <p>ICON BTNS</p> */}
        {/* <div className="flex justify-between items-center px-4 mb-4 w-full">
          <div className="flex">
            <i className="material-icons mr-2 text-red-600">favorite_border</i>
            <i className="material-icons text-blue-600">remove_red_eye</i>
          </div>
          <div className="flex">
            <i className="material-icons ml-2 text-yellow-600">
              sentiment_very_satisfied
            </i>
            <i className="material-icons ml-2 text-yellow-600">
              sentiment_neutral
            </i>
            <i className="material-icons ml-2 text-yellow-600">
              sentiment_very_dissatisfied
            </i>
            <i className="material-icons ml-2 text-yellow-600">star_outline</i>
            <i className="material-icons ml-2 text-yellow-600">star_half</i>
            <i className="material-icons ml-2 text-yellow-600">star</i>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MovieDetail;
