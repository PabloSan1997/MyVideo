/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import React from "react";
import { videoSeleccionado } from '../slice/videosSlice';
import { useCookies } from 'react-cookie';
import { Header } from '../components/Header';
import { Pantalla } from '../components/Pantalla';
import { NotFound } from '../components/Notfound';
import { rutas } from '../Routes';

export function Video() {
  const parametros = useParams() as { id_portada: string };
  const usuario = useAppSelector(state=>state.user);
  const video = useAppSelector(state=>state.losVideos.video);
  const [cookie] = useCookies(['usuario']);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(videoSeleccionado({ token: cookie.usuario, id_portada: parametros.id_portada }));
  }, []);
  if(!usuario.token) return <Navigate to={rutas.login}/>
  if(!video.id_video) return <NotFound/>
  return (
    <>
      <Header {...usuario} />
      <Pantalla {...video}/>
    </>
  );
}
