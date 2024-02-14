import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactsForm } from './components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsForm/ContactsList';
import { ContactsFilter } from 'components/ContactsFilter/ContactsFilter';

export class App extends Component {
  constructor() {
    super();
    this.handleAddContact = this.handleAddContact.bind(this);
  }

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }

  handleAddContact(data) {
    const id = nanoid();

    const newProduct = { ...data, id };

    this.setState((state) => ({
      contacts: state.contacts.concat(newProduct)
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
    console.log(this.filterContacts())

    return (
      <>
        <h1>Phonebook</h1>
        <ContactsForm handleAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <ContactsFilter handleFilterChange={this.setFilter.bind(this)} />
        <ContactsList contacts={this.filterContacts()} />
      </>
    );
  }
};