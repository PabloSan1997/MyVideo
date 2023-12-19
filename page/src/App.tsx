/* eslint-disable react-hooks/exhaustive-deps */
import { HashRouter } from 'react-router-dom';
import { MyRutes } from './Routes';
import { useAppSelector } from './store/store';
import { Loading } from './components/Loading';
import { useCookies } from 'react-cookie';
import React from 'react';
import { storageUsuario } from './storage/usuarioStorage';

export function App() {
    const state = useAppSelector(state => state.user);
    window.document.title = 'MyVideos | Home'
    const [, setCookie] = useCookies(['usuario']);

    React.useEffect(() => {
        if (state.token) {
            setCookie('usuario', state.token, { maxAge: 5000 });
            storageUsuario.guardar({ name: state.name, url_image: state.url_image });
        }
    }, [state.token]);

    if(state.loading) return <Loading/>
    return (
        <HashRouter>
            <MyRutes />
        </HashRouter>
    );
}