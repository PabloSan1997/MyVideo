/// <reference types="vite/client" />


interface UsuarioInterface {
	token:string,
    name:string,
    url_image:string
}

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
    loading: boolean
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