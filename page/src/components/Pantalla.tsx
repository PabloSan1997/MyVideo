import ReactPlayer from 'react-player';
import '../estilos/range.css';
import { Descripcion } from './Descripcion';

export function Pantalla({ url_video, portada, descripcion}: LosVideosInteface) {

    return (
        <div
            className='relative w-[70%] ml-16 mt-10 p-2'
        >
            <h2
            className='text-3xl mb-2 font-bold text-rojoVideos-950'
            >{portada.nombre}</h2>
            <ReactPlayer
                url={url_video}
                width={'100%'}
                height={'65vh'}
                controls={true}
                className='border-2 border-black bg-black'
            />
        <Descripcion descripcion={descripcion} createdAt={portada.createdAt}/>
        </div>
    );
}