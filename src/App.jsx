import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Landing,
  Error,
  About,
  Register,
  Login,
  //medicine
  Cart,
  Drugs,
  SingleDrug,
  Checkout,
  Orders,
} from "./pages";
import { ErrorElement } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleDrugLoader } from "./pages/medicine/SingleDrug";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "drugs",
        element: <Drugs />,
        // errorElement: <ErrorElement />,
        // loader: productsLoader(queryClient),
      },
      {
        path: "drugs/:id",
        element: <SingleDrug />,
        errorElement: <ErrorElement />,
        loader: singleDrugLoader,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      { path: "about", element: <About /> },
      {
        path: "checkout",
        element: <Checkout />,
        // loader: checkoutLoader(store),
        // action: checkoutAction(store, queryClient),
      },
      {
        path: "orders",
        element: <Orders />,
        // loader: ordersLoader(store, queryClient),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
    // action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    // action: registerAction,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
