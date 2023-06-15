import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import MovieContextProvider from "./context/MovieContext";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <MovieContextProvider>
          <AppRouter />
        </MovieContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
