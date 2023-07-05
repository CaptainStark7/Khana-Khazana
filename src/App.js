import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import OffersShimmer from "./components/OffersShimmer";
import store from "./utils/store";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Login from "./components/Login";
import Main from "./components/Main";

// const ContactUs = lazy(() => import("./components/ContactUs"));
// const Login = lazy(() => import("./components/Login"));
const Cart = lazy(() => import("./components/Cart"));
// const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Header />

      <Outlet />
      <Footer />
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/contactus",

        element: (
          <Suspense fallback={<Shimmer />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "/login",

        element: (
          <Suspense fallback={<Shimmer />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/about",

        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
