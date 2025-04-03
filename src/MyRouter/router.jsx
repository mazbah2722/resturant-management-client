import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllFood from "../Pages/AllFood/AllFood";
import SingleFood from "../Pages/SingleFood/SingleFood";
import AddFood from "../Pages/AddFood/AddFood";
import Gallery from "../Pages/Gallery/Gallery";
import PrivateRoute from "./PrivateRoute";
import PurchasePage from "../Pages/PurchasePage/PurchasePage";
import MyOrder from "../Pages/MyOrder/MyOrder";
import Error from "../Pages/Error/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:  <Error></Error>,
    children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path: '/allFood',
            element: <AllFood></AllFood>
        },
        {
            path: '/singleFood/:id',
            element: <SingleFood></SingleFood>,
            loader:({params}) => fetch(`http://localhost:5000/restaurants/${params.id}`)
        },
        {
            path: '/addFood',
            element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
        },
        {
            path: '/gallery',
            element: <Gallery></Gallery>
        },
        {
            path: '/purchaseFood/:id',
            element: <PrivateRoute><PurchasePage></PurchasePage></PrivateRoute>
        },
        {
            path: '/myOrder',
            element: <PrivateRoute><MyOrder></MyOrder></PrivateRoute>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
    ]
  },
]);
export default router;