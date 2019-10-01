import React, { Component } from 'react'
import Contact from './Contact';
import { Consumer } from '../../Context';

class Contacts extends Component {
    
    render() {

        return (
            <Consumer>
                {value => {
                    const { Contacts } = value;
                    return (
                        <React.Fragment>
                            {Contacts.map(contact =>
                                <Contact key={contact.id} contact={contact} 
                                    />
                            )}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;