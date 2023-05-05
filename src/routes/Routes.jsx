import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layouts/Main"
import Informastion1 from "../Page/Information1/Informastion1";
import Information2 from "../Page/Inforamstion2/Information2";
import Informastion3 from "../Page/Information3/Informastion3";
import Inforamstion4 from "../Page/Informastion4/Inforamstion4";
import Informastion5 from "../Page/Informastion5/Informastion5";
import Informastion6 from "../Page/Informastion6/Informastion6";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Errorpage from "../Components/ErrorPage/Errorpage";
import Recipi from "../Components/Card/Recipi/Recipi";
import PrivetRoute from "./PrivetRoute";
import Blog from "../Components/Blog/Blog";


const router = createBrowserRouter([
 
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<App></App>
            },
            {
                path:'/informastion1',
                element:<PrivetRoute><Informastion1></Informastion1></PrivetRoute>
            },
            {
                path:'/informastion2',
                element:<PrivetRoute><Information2></Information2></PrivetRoute>
            },
            {
                path:'/informastion3',
                element:<PrivetRoute><Informastion3></Informastion3></PrivetRoute>
            },
            {
                path:'/informastion4',
                element:<PrivetRoute><Inforamstion4></Inforamstion4></PrivetRoute>
            },
            {
                path:'/informastion5',
                element:<PrivetRoute><Informastion5></Informastion5></PrivetRoute>
            },
            {
                path:'/informastion6',
                element:<PrivetRoute><Informastion6></Informastion6></PrivetRoute>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'*',
                element:<Errorpage></Errorpage>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])

export default router;
