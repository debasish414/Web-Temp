import React from 'react'
import Header from './production/Header'
import Home from './production/Home'
import Footer from './production/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout