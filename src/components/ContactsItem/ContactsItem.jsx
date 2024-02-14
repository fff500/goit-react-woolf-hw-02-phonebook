import { Component } from 'react'

export default class ContactsItem extends Component {
    render() {
        return (
            <li>
                {this.props.name}: {this.props.number}
            </li>
        )
    }
}
