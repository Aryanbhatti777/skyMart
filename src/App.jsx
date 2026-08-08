import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Auth/pages/Login";
import Register from "./Auth/pages/Register";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Register />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
