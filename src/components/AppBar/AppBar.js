import React from "react"
import { connect } from "react-redux"

import Navigation from "../Navigation"
import UserMenu from "../UserMenu"
import AuthNav from "../AuthNav"
import authSelectors from "../../redux/auth/auth-selectors"

const AppBar = ({ isLogin }) => (
  <header>
    <Navigation />
    {isLogin ? <UserMenu /> : <AuthNav />}
  </header>
)

const mapStateToProps = (state) => ({
  isLogin: authSelectors.getIsAuthenticated(state),
})

export default connect(mapStateToProps)(AppBar)
