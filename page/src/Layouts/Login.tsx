import { rutas } from "../Routes";
import { FormularioLogin } from "../components/FormularioLogin";
import { Header } from "../components/Header";
import { useAppSelector } from "../store/store";
import {Navigate} from 'react-router-dom';

export function Login(){
    const data = useAppSelector(state=>state.user);
    if(data.token) return <Navigate to={rutas.home}/>
    return(
        <>
        <Header {...data}/>
        <FormularioLogin/>
        </>
    )
}