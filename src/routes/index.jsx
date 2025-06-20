import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  return (
    <BrowserRouter basename="/RocketMovies/">
      <AppRoutes />
    </BrowserRouter>
  );
}
