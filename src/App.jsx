import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from './components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

export class App extends Component {
  constructor() {
    super();
    this.addContact = this.addContact.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  state = {
    contacts: [],
    filter: '',
  }

  addContact(data) {
    if (this.state.contacts.some(({ name }) => data.name === name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const id = nanoid();
    const newProduct = { ...data, id };

    this.setState((state) => ({
      contacts: state.contacts.concat(newProduct)
    }));
  }

  deleteContact(contactId) {
    this.setState((state) => ({
      contacts: state.contacts.filter(({ id }) => contactId !== id)
    }));
  }

  setFilter(filterQuery) {
    this.setState({ filter: filterQuery });
  }

  filterContacts() {
    if (!this.state.filter) return this.state.contacts
    else return this.state.contacts.filter(({ name }) => name.toLowerCase().includes(this.state.filter))
  }

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm addContact={this.addContact} />

        <h2>Contacts</h2>
        <ContactsFilter changeFilter={this.setFilter} />
        <ContactsList contacts={this.filterContacts()} deleteContact={this.deleteContact} />
      </>
    );
  }
};