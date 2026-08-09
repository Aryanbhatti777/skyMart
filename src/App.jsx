import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";

import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";

import Login from "./features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";
import MainPage from "./shared/MainPage";

import PublicProtected from "./protectedRoutes/publicProtected";
import MainProtected from "./protectedRoutes/mainProtected";

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },


    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <MainPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;