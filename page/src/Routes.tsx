import {useRoutes} from 'react-router-dom';
import { Login } from './Layouts/Login';
import { Home } from './Layouts/Home';
import { Video } from './Layouts/Video';

// eslint-disable-next-line react-refresh/only-export-components
export const rutas = {
    login:'/login',
    home:'/',
    video:'/video'
}


export const MyRutes =()=>useRoutes([
    {
        path:rutas.login,
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