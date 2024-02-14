import { Component } from 'react'

export default class ContactsItem extends Component {
    handleRemove() {
        console.log(this.props.id)
        this.props.handleRemoveContact(this.props.id);
    }

    render() {
        return (
            <li>
                <span>{this.props.name}: {this.props.number}</span>
                <button onClick={this.handleRemove.bind(this)}>Remove</button>
            </li>
        )
    }
}
