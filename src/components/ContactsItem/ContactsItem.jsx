import { Component } from 'react';

import style from './ContactsItem.module.css';

export default class ContactsItem extends Component {
    handleDeleteClick() {
        this.props.deleteContact(this.props.id);
    }

    render() {
        return (
            <li className={style.item}>
                <span>{this.props.name}: {this.props.number}</span>
                <button className={style.button} onClick={this.handleDeleteClick.bind(this)}>Delete</button>
            </li>
        )
    }
}
