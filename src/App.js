import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import MovieContextProvider from "./context/MovieContext";

function App() {
  return (
    <BrowserRouter>
      <MovieContextProvider>
        <AppRouter />
      </MovieContextProvider>
    </BrowserRouter>
  );
}

export default App;
