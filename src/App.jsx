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
    contacts: [],
  }

  handleAddContact(data) {
    const id = nanoid();

    const newProduct = { ...data, id };

    this.setState((state) => ({
      contacts: state.contacts.concat(newProduct)
    }));
  }

  render() {
    console.log(this.state.contacts)

    return (
      <>
        <ContactsForm handleAddContact={this.handleAddContact} />
        <ContactsFilter />
        <ContactsList contacts={this.state.contacts} />
      </>
    );
  }
};