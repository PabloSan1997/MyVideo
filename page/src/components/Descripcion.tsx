import { convertirTiempo } from "../utilities/convertirTiempo";


export function Descripcion({createdAt, descripcion}:{createdAt:string, descripcion:string}){
    const fecha = convertirTiempo(createdAt);
    return(
        <div className="flex flex-col bg-rojoVideos-300 mt-5 py-2">
            <span
            className='text-sm my-1 w-[95%] mx-auto text-rojoVideos-950 font-bold'
            >{fecha}</span>
            <p
            className='w-[95%] m-auto text-rojoVideos-950'
            >{descripcion}</p>
        </div>
    );
}