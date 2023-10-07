import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import WeddingDetails from "../Pages/WeddingDetalis/WeddingDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivaterRoute from "./PrivaterRoute";

const Routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader:() => fetch('/wedding.json')

            },
            {
                path:'/wedding/:id',
                element:<PrivaterRoute><WeddingDetails></WeddingDetails></PrivaterRoute>,
                loader:()=> fetch('/wedding.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]

    }
])

export default Routes;