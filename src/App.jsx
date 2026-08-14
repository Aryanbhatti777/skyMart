import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";

import AuthLayout from "./Layouts/AuthLayout";
import MainLayout from "./Layouts/MainLayout";

import Login from "./features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";
import MainPage from "./shared/MainPage";

import PublicProtected from "./protectedRoutes/publicProtected";
import MainProtected from "./protectedRoutes/mainProtected";
import Shop from "./features/Products/ui/pages/Shop";
import About from "./shared/About";
import ProductDetails from "./features/Products/ui/pages/ProductDetails";
import Cart from "./features/Cart/ui/Cart";

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
          {
            path: "/main/shop",
            element: <Shop/>
          }, {
            path: "/main/about",
            element: <About/>
          },
          {
            path: "/main/productdetails/:id",
            element: <ProductDetails/>
          },
          {
            path: "/main/cart",
            element: <Cart/>
          }
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;