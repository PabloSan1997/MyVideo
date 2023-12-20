/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import React from "react";
import { videoSeleccionado } from '../slice/videosSlice';
import { useCookies } from 'react-cookie';
import { Header } from '../components/Header';
import { Pantalla } from '../components/Pantalla';

export function Video() {
  const parametros = useParams() as { id_portada: string };
  const usuario = useAppSelector(state=>state.user);
  const video = useAppSelector(state=>state.losVideos.video);
  const [cookie] = useCookies(['usuario']);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(videoSeleccionado({ token: cookie.usuario, id_portada: parametros.id_portada }));
  }, []);

  return (
    <>
      <Header {...usuario} />
      <Pantalla url_video={video.url_video}/>
    </>
  );
}
