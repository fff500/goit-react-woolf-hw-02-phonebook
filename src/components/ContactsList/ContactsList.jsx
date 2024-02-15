import { Component } from 'react';

import ContactsItem from 'components/ContactsItem/ContactsItem';

export class ContactsList extends Component {
    render() {
        return (
            <>
                <ul>
                    {this.props.contacts.map(({ name, number, id }) => {
                        return (
                            <ContactsItem
                                key={id}
                                id={id}
                                name={name}
                                number={number}
                                deleteContact={this.props.deleteContact}
                            />
                        )
                    })}
                </ul>
            </>
        )
    }
}