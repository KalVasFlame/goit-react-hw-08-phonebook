import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { contactsOperations } from "../../redux/contacts"
import { filteredContacts } from "../../redux/contacts/contacts-selectors"

import ContactItem from "./ContactItem"

import s from "./ContactsList.module.css"

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts()
  }

  render() {
    const { contacts, onDeleteClick } = this.props
    return (
      <ul className={s.contactList}>
        {contacts.map(({ id, name, number }) => {
          return <ContactItem key={id} name={name} number={number} onDeleteClick={onDeleteClick} id={id} />
        })}
      </ul>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  contacts: filteredContacts(state),
})

const mapDispatchToProps = (dispatch) => ({
  onDeleteClick: (id) => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
