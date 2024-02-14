import { Component } from 'react'

export class ContactsFilter extends Component {
    handleChange(event) {
        const filterQuery = event.target.value.trim().toLowerCase();

        this.props.handleFilterChange(filterQuery);
    }

    render() {
        return (
            <>
                <label htmlFor='contactSearch'>Find contacts by name</label>
                <input
                    type="text"
                    onChange={this.handleChange.bind(this)}
                    id='contactSearch'
                />
            </>
        )
    }
}
