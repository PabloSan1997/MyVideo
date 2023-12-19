/* eslint-disable react-hooks/exhaustive-deps */

import React from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { llamarPortadas } from "../slice/videosSlice";
import { Portada } from "./Portada";


export function ContenedorPortadas() {
    const portadas = useAppSelector(state => state.losVideos.portadas);
    const token = useAppSelector(state => state.user.token);
    const dispatch = useAppDispatch();

    React.useEffect(() => {
        dispatch(llamarPortadas(token));
    }, [])
    return (
        <div
        className='w-11/12 m-auto mt-9 flex flex-col'
        >
            {portadas.map(p => (
                <Portada key={p.id_portada} {...p} />
            ))}
        </div>
    );
}
