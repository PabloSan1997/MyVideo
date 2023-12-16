import express from 'express';
import { UsuarioController } from '../controllers/Usuario.controller';

export const usuarioRouter = express.Router();

const controller = new UsuarioController();
usuarioRouter.post('/add', controller.agregarNuevoUsuario);
usuarioRouter.post('/login', controller.login);