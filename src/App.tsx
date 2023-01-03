import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import SearchPage from "./shared/searchPage";
import DetailPage from "./shared/detailPage";
import Login from "./shared/Login";
import SignUp from "./shared/SignUp";
import ProtectedRoute from "./shared/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/shows/:showId",
    element: (
      <ProtectedRoute>
        <DetailPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/home",
    element: (
      // Making the user unable to go to the search page unless he's loged in
      <ProtectedRoute>
        <SearchPage />
      </ProtectedRoute>
    ),
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
