import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "./Layouts/AuthLayout";
import { ToastContainer } from "react-toastify";
import Login from "./features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";

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