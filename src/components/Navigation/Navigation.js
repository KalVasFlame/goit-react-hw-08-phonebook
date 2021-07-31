import React from "react"
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import authSelectors from "../../redux/auth/auth-selectors"

import s from "./Navigation.module.css"

const Navigation = ({ isAuthenticated }) => (
  <nav className={s.nav}>
    <NavLink to="/" exact activeClassName={s.isActive}>
      Home
    </NavLink>

    {isAuthenticated && (
      <NavLink to="/contacts" activeClassName={s.isActive}>
        Contacts
      </NavLink>
    )}
  </nav>
)

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps)(Navigation)
