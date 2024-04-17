import React from 'react'
import Nav from './production/Account/Nav'
import Foot from './production/Account/Foot'
import { Outlet } from 'react-router-dom'

export default function AccLayout() {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Foot/>
    </>
  )
}
