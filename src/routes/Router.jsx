import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Favorites from "../favorites/Favorites";
import Card from "../Card";
import Index from "../pages/notifications/Index";
import Settings from "../pages/settings/Settings";
import User from "../pages/user/User";

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
    },
    {
        path:"/settings",
        element:<Settings/>
    },
    {
        path:"/notifications",
        element:<Index/>
    },
    {
        path:"/user",
        element:<User/>
    }
])