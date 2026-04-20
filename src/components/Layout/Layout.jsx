import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './../Header/Header';
import Details from './../../pages/Details/Details';
import Pricing from '../../pages/Pricing/Pricing';
import MotorcycleSlider from '../../pages/MotorcycleSlider/MotorcycleSlider';
import BrpMaverick from '../../pages/BrpMaverick/BrpMaverick';
import LocationFinder from '../../pages/LocationFinder/LocationFinder';
import CallbackForm from '../../pages/CallbackForm/CallbackForm';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  return (
    <div className="layout">
      <Header />
      <main className="layout__main" key={location.pathname}>
        <Outlet />
        <Details />
        <Pricing />
        <MotorcycleSlider />
        <BrpMaverick />
        <LocationFinder />
        <CallbackForm />
      </main>
    </div>
  );
};

export default Layout;