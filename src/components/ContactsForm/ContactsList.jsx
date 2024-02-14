import { Component } from 'react';

import ContactsItem from 'components/ContactsItem/ContactsItem';

export class ContactsList extends Component {
    render() {
        console.log(this.props.contacts)

        return (
            <>
                <ul>
                    {this.props.contacts.map(({ name, number, id }) => {
                        return (
                            <ContactsItem key={id} name={name} number={number} />
                        )
                    })}
                </ul>
            </>
        )
    }
}