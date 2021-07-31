import React from "react"
import { NavLink } from "react-router-dom"

import s from "./AuthNav.module.css"

const AuthNav = () => (
  <div className={s.container}>
    <NavLink to="/register" activeClassName={s.isActive}>
      Sign Up
    </NavLink>
    <NavLink to="/login" activeClassName={s.isActive}>
      Log In
    </NavLink>
  </div>
)

export default AuthNav
