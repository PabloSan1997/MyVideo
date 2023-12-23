/// <reference types="vite/client" />


type UsuarioLogin = {
	userName: string;
	password: string;
};

type Respuesta = {
    statusCode:number;
    message:string;
    results:object|object[]
}
type UserInitialState = {
    url_image: string,
    name: string,
    token: string,
    loading: boolean,
    modo:boolean;
}

type Children = {
    children:JSX.Element|JSX.Element[]
}

interface PortadaInterface {
	id_portada: string;
	nombre: string;
	miniDesc: string;
	url_image: string;
	createdAt: string;
}

interface LosVideosInteface {
	id_video: string;
	descripcion: string;
	url_video: string;
    portada:{
        nombre:string,
        createdAt:string
    }
}

interface VideoNuevoInterface{
    nombre: string,
	miniDesc:string,
	url_image: string,
	descripcion: string,
	url_video: string
}