import React from "react"
import { Button } from "@material-ui/core"

import s from "./ContactItem.module.css"

const ContactItem = ({ id, name, number, onDeleteClick }) => {
  const descNumber = `(${number.slice(0, 3)}) ${number.slice(3, 6)} ${number.slice(6, 8)} ${number.slice(8, 10)}`

  return (
    <li key={id} cas>
      <p className={s.contact}>
        {name}: {descNumber}
      </p>
      <Button variant="contained" color="primary" type="button" onClick={() => onDeleteClick(id)}>
        Delete
      </Button>
    </li>
  )
}

export default ContactItem
