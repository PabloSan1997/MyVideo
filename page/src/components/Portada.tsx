import { convertirTiempo } from "../utilities/convertirTiempo";
import React from "react";
import {useNavigate} from 'react-router-dom';
import { rutas } from "../Routes";

export function Portada({ nombre, url_image, miniDesc, createdAt, id_portada }: PortadaInterface) {
    const [hover, setHover] = React.useState(false);
    const navegar = useNavigate();
    const estilo = `w-full flex mb-10 transition-colors py-5 ${hover?'bg-rojoVideos-200':'bg-rojoVideos-100'}`;
    const verVideo = () =>{
        navegar(`${rutas.video}/${id_portada}`);
    }
    return (
        <div
            className={estilo}
        >
            <img
                src={url_image}
                alt={nombre}
                className='h-52 ml-5 cursor-pointer'
                onMouseEnter={()=>setHover(true)}
                onMouseLeave={()=>setHover(false)}
                onClick={verVideo}
            />
            <div
            className="flex flex-col ml-5 text-rojoVideos-700"
            >
                <h2
                className='text-rojoVideos-950 font-bold text-3xl'
                >{nombre}</h2>
                <p
                className='text-xl'
                >{miniDesc}</p>
                <span>{convertirTiempo(createdAt)}</span>
            </div>
        </div>
    );
}