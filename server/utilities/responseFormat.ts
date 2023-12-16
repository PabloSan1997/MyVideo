import {Response} from 'express';




export function respuestaFormat(res:Response, results:object|object[], statusCode:number = 200, message:string='Ok request'):void{
	const response: Respuesta = {
		statusCode,
		message,
		results
	};
	res.status(statusCode).json(response);
}