import {useRoutes} from 'react-router-dom';
import { Login } from './Layouts/Login';
import { Home } from './Layouts/Home';
import { Video } from './Layouts/Video';

export const rutas = {
    login:'/login',
    home:'/',
    video:'/video'
}

export const MyRutes =()=>useRoutes([
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:rutas.home,
        element:<Home/>
    },
    {
        path:rutas.video,
        element:<Video/>
    },
    {
        path:'*',
        element:<p>not found</p>
    }
]);