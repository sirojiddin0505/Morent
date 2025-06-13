import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Favorites from "../favorites/Favorites";
import Card from "../Card";

export const Router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/card",
        element:<Card/>
    },
    {
        path:"/favorites",
        element:<Favorites/>
    }
])