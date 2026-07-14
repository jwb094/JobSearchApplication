import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';

function Default(props) {
    return (
               <HelmetProvider>
                <main>
                    <Header />
                    <Outlet />
                    <Footer />
                </main>
            </HelmetProvider>
    );
}

export default Default;