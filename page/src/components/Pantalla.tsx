import React from 'react'
import ReactPlayer from 'react-player';
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'
import '../estilos/range.css';

export function Pantalla({ url_video }: { url_video: string }) {
    const [play, setPlay] = React.useState(false);
    const [tiempos, setTiempos] = React.useState({line:0, max:0});
    const referencia = React.useRef<ReactPlayer>(null);
    const cambiar=(num:number)=>{
        referencia.current?.seekTo(Number(num));
    }
    return (
        <div
            className='relative h-[50vh] w-[50%] ml-16 mt-14'
        >
            <ReactPlayer
                url={url_video}
                ref={referencia}
                playing={play}
                width={'100%'}
                height={'100%'}
                onProgress={e=>{
                    setTiempos({max:e.loadedSeconds, line:e.playedSeconds});
                }}
                onEnded={()=>{
                    cambiar(0);
                    setPlay(false);
                }}
                className='border-2 border-black bg-black'
            />
            <div
                className='bg-black w-full h-11'
            >
                <div
                    className='flex h-full py-2'
                >
                    {!play ? (
                        <PlayIcon
                            className='h-[100%] text-white ml-2 cursor-pointer'
                            onClick={() => setPlay(!play)}
                        />
                    ) : (
                        <PauseIcon
                            className='h-[100%] text-white ml-2 cursor-pointer'
                            onClick={() => setPlay(!play)}
                        />
                    )}
                    <input
                        type="range"
                        value={tiempos.line}
                        max={tiempos.max}
                        step={0.0001}
                        onChange={(e)=>cambiar(Number(e.target.value))}
                        className='px-3 w-[100%]'
                    />
                </div>
            </div>
        </div>
    );
}