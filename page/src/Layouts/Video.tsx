/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/store';
import React from "react";
import { videoSeleccionado } from '../slice/videosSlice';
import { useCookies } from 'react-cookie';
import { Header } from '../components/Header';

export function Video() {
  const parametros = useParams() as { id_portada: string };
  const usuario = useAppSelector(state=>state.user);
  const [cookie] = useCookies(['usuario']);
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(videoSeleccionado({ token: cookie.usuario, id_portada: parametros.id_portada }));
  }, []);

  return (
    <>
      <Header {...usuario} />
    </>
  );
}
