import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Auth/pages/Login";
import Register from "./Auth/pages/Register";
import AuthLayout from "./Layouts/AuthLayout";

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
    </>
  )
}

export default App;