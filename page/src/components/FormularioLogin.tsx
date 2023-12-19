import { loggear } from "../slice/userSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import React from "react";


const initalState = { userName: '', password: '' };
const labelStyle =
    'text-rojoVideos-800 text-xl mb-2';
const inputStyle =
    'p-1 outline-none bg-rojoVideos-50 text-rojoVideos-950 rounded-md placeholder:text-rojoVideos-400 text-xl mb-5 border-[1px] border-rojoVideos-500';


export function FormularioLogin() {
    const state = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();

    const [texto, setTexto] = React.useState<UsuarioLogin>(initalState);
    const escribirUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTexto({ ...texto, userName: e.target.value });
    }
    const escribirPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTexto({ ...texto, password: e.target.value });
    }
    console.log(state);
    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(texto.password && texto.userName){
            dispatch(loggear(texto));
        }
    }
    return (
        <form
            onSubmit={subir}
            className=
            'border-2 border-rojoVideos-900 w-[40rem] flex flex-col m-auto mt-8 p-5 px-20 rounded-2xl bg-rojoVideos-100'
        >
            <label
                htmlFor="username"
                className={labelStyle}
            >User Name</label>
            <input
                type="text"
                id="username"
                className={inputStyle}
                placeholder="Escribir"
                value={texto.userName}
                onChange={escribirUserName}
            />
            <label
                htmlFor="password"
                className={labelStyle}
            >Password</label>
            <input
                type="password"
                id="password"
                placeholder="Escribir"
                className={inputStyle}
                value={texto.password}
                onChange={escribirPassword}
            />
            <button
                type="submit"
                className='rounded-xl border-2 text-rojoVideos-950 border-rojoVideos-950 w-fit m-auto p-1 px-4 text-xl mt-2 hover:bg-rojoVideos-950 bg-rojoVideos-200 hover:text-rojoVideos-50'
            >Entrar</button>
        </form>
    );
}