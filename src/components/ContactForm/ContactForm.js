import React, { Component } from "react"
import { connect } from "react-redux"
import { contactsOperations } from "../../redux/contacts"
import { getContacts } from "../../redux/contacts/contacts-selectors"
import { TextField, Button, Link } from "@material-ui/core"

import s from "./ContactForm.module.css"

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  }

  onChange = (event) => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value })
  }

  onFormSubmit = (event) => {
    event.preventDefault()

    const { name } = this.state
    const { contacts, onSubmit } = this.props

    contacts.some((item) => item.name === name) ? alert(`${name} is already in contacts`) : onSubmit({ ...this.state })

    this.resetState()
  }

  resetState = () => {
    this.setState({
      name: "",
      number: "",
    })
  }
  render() {
    const { name, number } = this.state
    return (
      <form className={s.form} onSubmit={this.onFormSubmit}>
        <TextField
          name="name"
          type="text"
          label="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={this.onChange}
        />
        <TextField
          type="tel"
          name="number"
          label="Name"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          value={number}
          onChange={this.onChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Add contact
        </Button>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) => dispatch(contactsOperations.addContact(name, number)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
