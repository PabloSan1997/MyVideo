

interface PortadaInterface {
	id_portada: string;
	nombre: string;
	miniDesc: string;
	url_image: string;
	fecha: date;
}

interface LosVideosInteface {
	id_video: string;
	descripcion: string;
	url_video: string;
}

interface UsuarioInterface {
	id_usuario: string;
	name: string;
	userName: string;
	url_image: string;
	password: string;
	rol: string;
}

type UsuarioAgregar = {
	name: string;
	userName: string;
	url_image: string;
	password: string;
	rol: string;
};

type UsuarioLogin = {
	userName: string;
	password: string;
};

type Respuesta = {
	statusCode: number;
	message: string;
	results: object | object[]
}

type TokenResponse = {
	user:string,
	rol:string
}

