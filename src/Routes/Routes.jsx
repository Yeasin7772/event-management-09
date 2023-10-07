import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import WeddingDetails from "../Pages/WeddingDetalis/WeddingDetails";

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
                element:<WeddingDetails></WeddingDetails>,
                loader:()=> fetch('/wedding.json')
            }
        ]

    }
])

export default Routes;