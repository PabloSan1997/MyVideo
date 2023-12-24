import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { useAppSelector } from "../store/store";
import { useNavigate, useLocation } from "react-router-dom";
import { rutas } from "../Routes";

export function BotonAgregar(data: { className: string }) {
    const state = useAppSelector(state => state.user);
    const navegar = useNavigate();
    const location = useLocation();
    
    const ir = () => { navegar(rutas.addVideo) };
    if (!state.modo || location.pathname===rutas.addVideo) return null;
    return (
        <PlusCircleIcon {...data} onClick={ir} />
    );
}