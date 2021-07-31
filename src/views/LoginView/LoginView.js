import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, TextField } from "@material-ui/core"
import authOperations from "../../redux/auth/auth-operations"

import s from "./LoginView.module.css"

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onLogin(this.state)
    this.setState({ name: "", email: "", password: "" })
  }

  render() {
    const { email, password } = this.state

    return (
      <div>
        <h2>LOG IN</h2>

        <form className={s.form} onSubmit={this.onSubmit} autoComplete="on">
          <TextField
            id="outlined-basic"
            name="email"
            type="email"
            label="Email"
            value={email}
            onChange={this.onChange}
          />
          <TextField
            id="outlined-basic"
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={this.onChange}
          />

          <Button type="submit" variant="contained" color="primary">
            Log In
          </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
}

export default connect(null, mapDispatchToProps)(LoginView)
