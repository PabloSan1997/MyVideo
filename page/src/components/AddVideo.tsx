
import React from "react";
import { useAppDispatch } from "../store/store";
import { agregarNuevoVideo } from "../slice/videosSlice";
import {Navigate, useNavigate} from 'react-router-dom';
import { rutas } from "../Routes";

const initalState: VideoNuevoInterface = {
    nombre: '',
    miniDesc: '',
    descripcion: '',
    url_image: '',
    url_video: ''
}


export function AddVideo({token}:{token:string}) {

    const navegar = useNavigate();
    const dispatch = useAppDispatch();
    const [texto, setTexto] = React.useState(initalState);
    const inputStyle = 'border-[1px] border-rojoVideos-500 mb-3 p-1 px-2 rounded-[5px] outline-none text-xl bg-rojoVideos-50 text-rojoVideos-950 placeholder:text-rojoVideos-500';
    const labelStyle = 'mb-1 text-rojoVideos-900 font-bold';
    const escribir = {
        nombre: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto({ ...texto, nombre: e.target.value });
        },
        miniDesc: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto({ ...texto, miniDesc: e.target.value });
        },
        descripcion: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setTexto({ ...texto, descripcion: e.target.value });
        },
        url_video: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto({ ...texto, url_video: e.target.value });
        },
        url_image: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto({ ...texto, url_image: e.target.value });
        }
    }
    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(agregarNuevoVideo({ token, nuevoVideo: texto }));
        setTexto(initalState);
        navegar(rutas.home);
    }
    if(!token) return <Navigate to={rutas.login}/>
    return (
        <form
            className=
            'bg-rojoVideos-200  m-auto flex flex-col w-[90%] mt-9 p-5 text-[1.2rem] mb-5'
            onSubmit={subir}
        >
            <h2
            className="m-auto mb-2 text-2xl font-bold text-rojoVideos-800"
            >Agregar nuevo Video</h2>
            <label 
            htmlFor="nombre"
            className={labelStyle}
            >Nombre</label>
            <input
                type="text"
                placeholder="Escribir"
                id="nombre"
                className={inputStyle}
                value={texto.nombre}
                onChange={escribir.nombre}
            />
            <label 
            htmlFor="subtitulo"
            className={labelStyle}
            >Subtitulo</label>
            <input
                type="text"
                placeholder="Escribir"
                id="subtitulo"
                value={texto.miniDesc}
                className={inputStyle}
                onChange={escribir.miniDesc}
            />
            <label 
            htmlFor="descripcion"
            className={labelStyle}
            >Descripcion</label>
            <textarea
                placeholder="Escribir"
                id="descripcion"
                value={texto.descripcion}
                onChange={escribir.descripcion}
                className={`${inputStyle} resize-none h-[5rem]`}
            ></textarea>
            <label 
            htmlFor="urlImagen"
            className={labelStyle}
            >Imagen URL</label>
            <input
                type="text"
                placeholder="Escribir"
                id="urlImagen"
                value={texto.url_image}
                onChange={escribir.url_image}
                className={inputStyle}
            />
            <label 
            htmlFor="urlVideo"
            className={labelStyle}
            >Video URL</label>
            <input
                type="text"
                placeholder="Escribir"
                id="urlVideo"
                value={texto.url_video}
                onChange={escribir.url_video}
                className={inputStyle}
            />
            <button
                type="submit"
                className=
                'border-2 border-rojoVideos-950 transition-colors w-fit p-2 rounded-xl mt-3 text-rojoVideos-900 hover:bg-rojoVideos-950 hover:text-rojoVideos-100'
            >Agregar</button>
        </form>
    );
}