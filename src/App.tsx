import SearchPage from "./shared/searchPage";
import DetailPage from "./shared/detailPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./shared/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />,
  },
  {
    path: "/shows/:showId",
    element: <DetailPage />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;