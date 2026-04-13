import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './../Header/Header';
import Details from './../../pages/Details/Details';
import FAQ from '../FAQ/FAQ';
import './Layout.css';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="layout">
      <Header />
      <main className="layout__main" key={location.pathname}>
        <Outlet />
        <Details />
      </main>
      <FAQ />
    </div>
  );
};

export default Layout;