import React, { Component } from "react"
import { connect } from "react-redux"
import { Button, TextField } from "@material-ui/core"

import authOperations from "../../redux/auth/auth-operations"

import s from "./RegisterView.module.css"

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  }

  onChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.props.onRegister(this.state)

    this.setState({ name: "", email: "", password: "" })
  }

  render() {
    const { name, email, password } = this.state

    return (
      <div>
        <h2>SIGN UP</h2>

        <form className={s.form} onSubmit={this.onSubmit} autoComplete="on">
          <div className={s.container}>
            <TextField name="name" type="name" label="Name" value={name} onChange={this.onChange} />
            <TextField name="email" type="email" label="Email" value={email} onChange={this.onChange} />
            <TextField name="password" type="password" label="Password" value={password} onChange={this.onChange} />
          </div>
          {/* <button type="submit">Sing Up</button> */}
          <Button type="submit" variant="contained" color="primary">
            Sing In
          </Button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
}

export default connect(null, mapDispatchToProps)(RegisterView)
