import { Boom } from '@hapi/boom';
import { Request, Response, NextFunction } from 'express';
import { respuestaFormat } from '../utilities/responseFormat';

export function boomHandle(error: Boom, req: Request, res: Response, next: NextFunction) {
	if (error.isBoom) {
		const { payload } = error.output;
		respuestaFormat(
			res,
			{ message: payload.message },
			payload.statusCode,
			payload.error
		);
	}
	next(error);
}