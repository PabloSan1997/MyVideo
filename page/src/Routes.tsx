import {useRoutes} from 'react-router-dom';
import { Login } from './Layouts/Login';
import { Home } from './Layouts/Home';
import { Video } from './Layouts/Video';
import { NotFound } from './components/Notfound';
import { NuevoVideo } from './Layouts/NuveoVideo';

// eslint-disable-next-line react-refresh/only-export-components
export const rutas = {
    login:'/login',
    home:'/',
    video:'/video',
    addVideo:'/addVideo'
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
        path:rutas.video+'/:id_portada',
        element:<Video/>
    },
    {
        path:'*',
        element:<NotFound/>
    },
    {
        path:rutas.addVideo,
        element:<NuevoVideo/>
    }
]);