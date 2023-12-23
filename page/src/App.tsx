/* eslint-disable react-hooks/exhaustive-deps */
import { HashRouter } from 'react-router-dom';
import { MyRutes } from './Routes';
import { useAppSelector } from './store/store';
import { Loading } from './components/Loading';
import { useCookies } from 'react-cookie';
import React from 'react';
import { storageUsuario } from './storage/usuarioStorage';
import { BotonAgregar } from './components/BotonAgregar';
import { AddVideo } from './components/AddVideo';

export function App() {
    const state = useAppSelector(state => state.user);
    window.document.title = 'MyVideos | Home'
    const [, setCookie] = useCookies(['usuario']);
    const [mostrar, setMostrar] = React.useState(false);
    const cambiarMostrar=()=>{
        setMostrar(!mostrar);
    }
    React.useEffect(() => {
        if (state.token) {
            setCookie('usuario', state.token, { maxAge: 5000 });
            storageUsuario.guardar({ name: state.name, url_image: state.url_image, modo:state.modo });
        }
    }, [state.token]);

    if(state.loading) return <Loading/>
    return (
        <HashRouter>
            <MyRutes />
            {mostrar && <AddVideo token={state.token} setMostrar={setMostrar}/>}
            <BotonAgregar 
            onClick={cambiarMostrar}
            className='w-24 fixed bottom-10 duration-media hover:rotate-90 right-20 text-rojoVideos-800 opacity-50 hover:opacity-90 cursor-pointer'
            />
        </HashRouter>
    );
}