

import React from "react";
import { Header } from "../components/Header";
import { useAppSelector } from "../store/store";
import { Navigate } from "react-router-dom";
import { rutas } from "../Routes";

export function Home() {
  const state = useAppSelector(state => state.user);
  if (!state.token) return <Navigate to={rutas.login} />
  return (
    <>
      <Header {...state} />
    </>
  );
}
