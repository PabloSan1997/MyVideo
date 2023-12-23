
import React from "react";
import { useAppDispatch } from "../store/store";
import { agregarNuevoVideo } from "../slice/videosSlice";

const initalState: VideoNuevoInterface = {
    nombre: '',
    miniDesc: '',
    descripcion: '',
    url_image: '',
    url_video: ''
}


export function AddVideo({token, setMostrar}:{token:string, setMostrar(a:boolean):void}) {
    const dispatch = useAppDispatch();
    const [texto, setTexto] = React.useState(initalState);
    const escribir = {
        nombre: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto({ ...texto, nombre: e.target.value });
        },
        miniDesc: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto({ ...texto, miniDesc: e.target.value });
        },
        descripcion: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto({ ...texto, descripcion: e.target.value });
        },
        url_video: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto({ ...texto, url_video: e.target.value });
        },
        url_image: (e: React.ChangeEvent<HTMLInputElement>) => {
            setTexto({ ...texto, url_image: e.target.value });
        }
    }
    const subir =(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        dispatch(agregarNuevoVideo({token, nuevoVideo:texto}));
        setMostrar(false);
        setTexto(initalState);
    }
    console.log(texto);
    return (
        <form
            className='bg-rojoVideos-500  fixed top-10 right-24 left-24 flex flex-col'
            onSubmit={subir}
        >
            <label htmlFor="nombre">Nombre</label>
            <input
                type="text"
                placeholder="Escribir"
                id="nombre"
                value={texto.nombre}
                onChange={escribir.nombre}
            />
            <label htmlFor="subtitulo">Subtitulo</label>
            <input
                type="text"
                placeholder="Escribir"
                id="subtitulo"
                value={texto.miniDesc}
                onChange={escribir.miniDesc}
            />
            <label htmlFor="descripcion">Descripcion</label>
            <input
                type="text"
                placeholder="Escribir"
                id="descripcion"
                value={texto.descripcion}
                onChange={escribir.descripcion}
            />
            <label htmlFor="urlImagen">Imagen URL</label>
            <input
                type="text"
                placeholder="Escribir"
                id="urlImagen"
                value={texto.url_image}
                onChange={escribir.url_image}
            />
            <label htmlFor="urlVideo">Video URL</label>
            <input
                type="text"
                placeholder="Escribir"
                id="urlVideo"
                value={texto.url_video}
                onChange={escribir.url_video}
            />
            <button
                type="submit"
            >Agregar</button>
        </form>
    );
}