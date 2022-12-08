import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Home,
  Blog,
  Shop,
  Cart,
  Contacts,
  About,
  Layout,
  NoMatch,
} from '../../pages';
import { routes } from '../../routes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={routes.shop} element={<Shop />} />
        <Route path={routes.blog} element={<Blog />} />
        <Route path={routes.about} element={<About />} />
        <Route path={routes.contacts} element={<Contacts />} />
        <Route path={routes.cart} element={<Cart />} />
        <Route path={routes.other} element={<NoMatch />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
