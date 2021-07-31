import { connect } from "react-redux"

import ContactForm from "../../components/ContactForm"
import ContactList from "../../components/ContactsList"
import Filter from "../../components/Filter"

const ContactsView = ({ contactsLength }) => (
  <div>
    <h1>Add New Contacts</h1>
    <ContactForm />
    {contactsLength > 1 ? <Filter /> : <span></span>}
    <ContactList />
  </div>
)

const mapStateToProps = (state) => ({
  contactsLength: state.contacts.items.length,
})

export default connect(mapStateToProps)(ContactsView)
