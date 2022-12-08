import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Footer, Box } from '../components/Common/';

const Layout = () => {
  return (
    <Box
      display='grid'
      width='100%'
      minHeight='100vh'
      gridTemplateRows='minmax(80px, auto) 1fr minmax(300px, auto)'
    >
      <AppBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
};

export default Layout;
