import SearchPage from "./shared/searchPage";
import DetailPage from "./shared/detailPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./shared/Login";
import SignUp from "./shared/SignUp";
import { AuthContextProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/shows/:showId",
    element: <DetailPage />,
  },
  {
    path: "/home",
    element: <SearchPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  );
}

export default App;
