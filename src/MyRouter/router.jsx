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
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:  <h2>Error</h2>,
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
            element: <AddFood></AddFood>
        },
        {
            path: '/gallery',
            element: <Gallery></Gallery>
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