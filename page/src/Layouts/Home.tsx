

import { Header } from "../components/Header";
import { useAppSelector } from "../store/store";
import { Navigate } from "react-router-dom";
import { rutas } from "../Routes";
import { ContenedorPortadas } from "../components/ContenedorPortadas";

export function Home() {
  const state = useAppSelector(state => state.user);
  window.document.title = 'MyVideos | Home';
  if (!state.token) return <Navigate to={rutas.login} />
  return (
    <>
      <Header {...state} />
      <ContenedorPortadas/>
    </>
  );
}
