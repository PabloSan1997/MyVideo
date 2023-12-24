import { AddVideo } from "../components/AddVideo";
import { Header } from "../components/Header";
import { useAppSelector } from "../store/store";


export function NuevoVideo(){
    const state = useAppSelector(state=>state.user);
    return(
        <>
        <Header {...state}/>
        <AddVideo token={state.token}/>
        </>
    );
}