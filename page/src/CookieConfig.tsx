import { CookiesProvider, useCookies } from "react-cookie";
import React from "react";
import { useDispatch } from "react-redux";
import { ponerToken } from "./slice/userSlice";
import { storageUsuario } from "./storage/usuarioStorage";


export function CookieConfig({children}:Children){
    const [cookie] = useCookies(['usuario']);
    const dispatch = useDispatch();
    React.useEffect(()=>{
        if(cookie.usuario){
            const {name, url_image} = storageUsuario.leer();
            dispatch(ponerToken({token:cookie.usuario, name, url_image}));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);    
    return(
        <CookiesProvider>
            {children}
        </CookiesProvider>
    );
}