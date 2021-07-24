import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/add", ({ name, number }) => {
  return {
    payload: {
      name: name,
      number: number,
      id: shortid.generate(),
    },
  };
});

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

export default { addContact, deleteContact, changeFilter };
