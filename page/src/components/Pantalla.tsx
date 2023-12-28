import ReactPlayer from 'react-player';
import { Descripcion } from './Descripcion';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { useAppDispatch, useAppSelector } from '../store/store';
import React from 'react';
import { eliminarUnVideo } from '../slice/videosSlice';
import { rutas } from '../Routes';
import { useNavigate } from 'react-router-dom';

export function Pantalla({ url_video, portada, descripcion, id_video }: LosVideosInteface) {
    const modo = useAppSelector(state => state.user.modo);
    const token = useAppSelector(state => state.user.token);
    const dispatch = useAppDispatch();
    const navegar = useNavigate();
    const borrar = () => {
        if (confirm('Seguro que desea borrar este video?')) {
            dispatch(eliminarUnVideo({ token, id_video }));
            navegar(rutas.home);
        }
    }

    const [mostrar, setMostrar] = React.useState(false);
    const cambiarMostrar = () => {
        setMostrar(!mostrar);
    }
    return (
        <div
            className='relative w-[70%] ml-16 mt-10 p-2'
        >
            <div className='w-full flex justify-between relative'>
                <h2
                    className='text-3xl mb-2 font-bold text-rojoVideos-950'
                >{portada.nombre}</h2>
                {modo ? (
                    <>
                        <EllipsisHorizontalIcon
                            className='w-8 cursor-pointer hover:scale-125'
                            onClick={cambiarMostrar}
                        />
                        {mostrar ? (
                            <menu
                                className='absolute z-50 right-0 select-none top-full bg-rojoVideos-800'
                            >
                                <li
                                    className='text-rojoVideos-100 hover:bg-rojoVideos-500 cursor-pointer p-2 px-5'
                                    onClick={borrar}
                                >Borrar Video</li>

                            </menu>
                        ) : null}
                    </>
                ) : null}
            </div>
            <ReactPlayer
                url={url_video}
                width={'100%'}
                height={'65vh'}
                controls={true}
                className='border-2 border-black bg-black'
            />
            <Descripcion descripcion={descripcion} createdAt={portada.createdAt} />
        </div>
    );
}