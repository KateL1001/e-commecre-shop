import React from 'react';
import { Footer } from '../../../widgets/Footer';
import { Header } from '../../../widgets/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer />            
        </>
    );
};

export default MainLayout;