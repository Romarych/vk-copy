import { Grid } from '@mui/material';
import React, { FC } from 'react'
import { HashRouter, Route, Routes} from 'react-router-dom'
import Header from '../layout/header/Header';
import Sidebar from '../layout/sidebar/Sidebar';
import Auth from '../pages/auth/Auth';
import { useAuth } from '../providers/useAuth';
import { routes } from './list';

// type Props = {};
// const Routers: React.FC<PropsWithChildren<Props>>
const Routers:FC = () => {
  const {user} = useAuth()
  return (
    <HashRouter>
      <Header />
      <Grid container spacing={2} marginX={5} marginTop={2}>
        {user && (
        <Grid item md={2}>
          <Sidebar />
        </Grid>
        )}
        <Grid item md={user ? 10 : 12}>
          <Routes>
            {routes.map(route => (
              <Route key={route.path} path={route.path} element={route.auth && !user ? <Auth /> : <route.component />} />
            ))}
          </Routes>
        </Grid>
      </Grid>
     
    </HashRouter>
  )
}

export default Routers