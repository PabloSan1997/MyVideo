import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "../store/store";


export function BotonAgregar(data:{className:string, onClick():void}) {
    const state = useAppSelector(state => state.user);
    if (!state.modo) return null;
    return (
        <PlusCircleIcon {...data}/>
    );
}