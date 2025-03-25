import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login/Login";
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
            path: '/login',
            element: <Login></Login>
        },
    ]
  },
]);
export default router;