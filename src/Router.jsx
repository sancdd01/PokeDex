import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./Pages/HomePage";
import PokemonPage from "./Pages/PokemonPage";
import PokemonTeamPage from "./Pages/PokemonTeamPage";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/pokemon/:name/",
        element: <PokemonPage />,
      },
      {
        path: "/team/",
        element: <PokemonTeamPage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
