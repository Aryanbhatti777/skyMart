import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./Layouts/AuthLayout";
import { ToastContainer } from "react-toastify";
import Login from "./features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";
import MainLayout from "./Layouts/MainLayout";
import MainPage from "./shared/MainPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout/>,
      children: [
        {
          path: "",
          element: <Login/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ]
    },
    {
      path: "main",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <MainPage/>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App;