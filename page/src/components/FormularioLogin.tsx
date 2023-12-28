/* eslint-disable react-hooks/exhaustive-deps */
import { loggear } from "../slice/userSlice";
import { useAppDispatch, useAppSelector } from "../store/store";
import React from "react";

const initalState = { userName: '', password: '' };
const labelStyle =
    'text-rojoVideos-800 text-xl mb-2';
const inputStyle =
    'p-1 outline-none bg-rojoVideos-50 text-rojoVideos-950 rounded-md placeholder:text-rojoVideos-400 text-xl mb-5 border-[1px] border-rojoVideos-500';


export function FormularioLogin() {
    const dispatch = useAppDispatch();
    const error = useAppSelector(state => state.user.error);
    const [texto, setTexto] = React.useState<UsuarioLogin>(initalState);
    const [errorTexto, setErrorTexto] = React.useState<UsuarioLoginChecarUsuario>({ userName: false, password: false });

    const escribirUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTexto({ ...texto, userName: e.target.value });
    }
    const escribirPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTexto({ ...texto, password: e.target.value });
    }

    const subir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (texto.password && texto.userName) {
            dispatch(loggear(texto));
        } else {
            setErrorTexto({
                userName: !texto.userName,
                password: !texto.password
            });
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
            {errorTexto.userName && <p className="text-red-800">Escriba su nombre de usuario</p>}
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
            {errorTexto.password && <p className="text-red-800">Escriba su contraseña</p>}
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
            {error && (
                <p
                    className="mt-3 text-red-800"
                >Usuario o contraseña incorectos</p>
            )}
        </form>
    );
}