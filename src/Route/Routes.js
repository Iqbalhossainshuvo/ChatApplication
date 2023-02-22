import MessageHome from "../Pages/MesssageHome/MessageHome";
import ChangePassword from "../Pages/ReginterPage/ChangePassword";
import Login from "../Pages/ReginterPage/Login";
import Logout from "../Pages/ReginterPage/Logout";
import Register from "../Pages/ReginterPage/Register";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../MainLayout/MainLayout");
const { default: Home } = require("../Pages/Home/Home");

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/messagehome',
                element: <MessageHome/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/changepassword',
                element: <ChangePassword/>
            },
            {
                path: '/logout',
                element: <Logout/>
            },
          
        ]
    },
])