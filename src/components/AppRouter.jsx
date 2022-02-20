import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '..';

const AppRouter = () => {
  const {auth} = useContext(Context);
  const user = useAuthState(auth);

  return (
    <Routes>
      {user[0] !== null
        ? (privateRoutes.map(({ path, Element, toPath }) => <Route key={path} path={path} element={<Element to={toPath ? toPath : ''}/>} />))
        : publicRoutes.map(({ path, Element, toPath }) => <Route key={path} path={path} element={<Element to={toPath ? toPath : ''}/>} />)}
    </Routes>
  )
}

export default AppRouter