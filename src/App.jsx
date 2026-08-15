import { createBrowserRouter, RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
import PublicProtected from "./protectedRoutes/publicProtected";

const AuthLayout = lazy(() => import("./Layouts/AuthLayout"));
const MainLayout = lazy(() => import("./Layouts/MainLayout"));

const Login = lazy(() => import("./features/Auth/pages/Login"));
const Register = lazy(() => import("./features/Auth/pages/Register"));
const MainPage = lazy(() => import("./shared/MainPage"));
const MainProtected = lazy(() => import("./protectedRoutes/mainProtected"));

const Shop = lazy(() => import("./features/Products/ui/pages/Shop"));
const About = lazy(() => import("./shared/About"));
const ProductDetails = lazy(() =>
  import("./features/Products/ui/pages/ProductDetails")
);

const Cart = lazy(() => import("./features/Cart/ui/Cart"));

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
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="dark"
        toastClassName="!bg-[#18181b] !text-white !rounded-xl !border !border-violet-500/30 !shadow-lg"
        bodyClassName="!text-sm !font-medium"
      />
    </>
  );
}

export default App;