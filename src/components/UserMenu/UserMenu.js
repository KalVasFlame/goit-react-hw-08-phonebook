import React from "react"
import { connect } from "react-redux"
import { Button } from "@material-ui/core"

import authSelectors from "../../redux/auth/auth-selectors"
import authOperations from "../../redux/auth/auth-operations"

import s from "./UserMenu.module.css"

const UserMenu = ({ name, onLogout }) => (
  <div>
    <span className={s.span}>Welcome, {name}!</span>
    <Button variant="contained" color="primary" type="button" onClick={onLogout}>
      Logout
    </Button>
  </div>
)

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
})

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
