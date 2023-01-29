import { createAction } from "@reduxjs/toolkit"

// request
// success
// error

export const fetchContactsRequest = createAction('');
export const fetchContactsSuccess = createAction('');
export const fetchContactsError = createAction('');

export const addContact = createAction('');
export const deleteContact = createAction('');