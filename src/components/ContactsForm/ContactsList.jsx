import { Component } from 'react';

import ContactsItem from 'components/ContactsItem/ContactsItem';

export class ContactsList extends Component {
    render() {
        console.log(this.props)

        return (
            <>
                <ul>
                    {this.props.contacts.map(({ name, number, id }) => {
                        return (
                            <ContactsItem key={id} id={id} name={name} number={number} handleRemoveContact={this.props.handleRemoveContact} />
                        )
                    })}
                </ul>
            </>
        )
    }
}