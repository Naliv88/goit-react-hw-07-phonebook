import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // reducers: {
  //   add: (state, action) => [...state, action.payload],
  //   delet: (state, action) =>
  //     state.filter(contact => contact.id !== action.payload),
  // },
  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContacts.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },
    [fetchContacts.rejected]: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContact.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },
    [addContact.rejected]: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    },
    [deleteContact.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContact.fulfilled]: (state, {payload}) => {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: (state, {payload}) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
// export const { add, delet } = contactsSlice.actions; 

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    change: (state, action) => (state = action.payload),
  },
});
export const { change } = filterSlice.actions;
