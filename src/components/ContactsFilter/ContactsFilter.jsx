import { Component } from 'react';

import style from './ContactsFilter.module.css';

export class ContactsFilter extends Component {
    handleChange(event) {
        const filterQuery = event.target.value.trim().toLowerCase();

        this.props.changeFilter(filterQuery);
    }

    render() {
        return (
            <>
                <label className={style.label} htmlFor='contactSearch'>Find contacts by name</label>
                <input
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    id='contactSearch'
                />
            </>
        )
    }
}
