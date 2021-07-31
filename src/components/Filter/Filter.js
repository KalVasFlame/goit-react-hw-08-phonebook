import React from "react"
import { connect } from "react-redux"
import * as contactsActions from "../../redux/contacts/contacts-actions"
import { getFilter } from "../../redux/contacts/contacts-selectors"
import { TextField } from "@material-ui/core"
const Filter = ({ value, changeFilterInput }) => (
  <TextField
    type="text"
    name="filter"
    label="Filter by name"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
    value={value}
    onChange={changeFilterInput}
  />
)

const mapStateToProps = (state) => ({
  value: getFilter(state),
})

const mapDispatchToProps = (dispatch) => ({
  changeFilterInput: (e) => dispatch(contactsActions.changeFilter(e.target.value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
