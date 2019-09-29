import React, { Component } from 'react'
import Contact from './Contact';

class Contacts extends Component {
    
    constructor() {
        super();
        this.state = {
            Contacts: [
                {
                    id: 1,
                    name: 'John Doe',
                    email: 'john@gmail.com',
                    phone: '455-555-4444'
                },
                {
                    id: 2,
                    name: 'Karen Wiliam',
                    email: 'Karen@gmail.com',
                    phone: '455-255-4444'
                },
                {
                    id: 3,
                    name: 'Henry Thosmson',
                    email: 'Henry@gmail.com',
                    phone: '425-225-1444'
                },
            ]
        }
    }

    deleteContact = (id, e) =>{
        const {Contacts} = this.state;
        const newContacts = Contacts.filter(contact => 
            contact.id !== id
        );
        this.setState({
            Contacts: newContacts
        })
        console.log(id);
    }
    render() {
        const {Contacts} = this.state;
        return (
            <div>
                {Contacts.map(contact =>
                    <Contact key={contact.id} contact={contact} deleteClickHandleer={this.deleteContact.bind(this,contact.id)}/>
                )}
            </div>
        )
    }
}

export default Contacts;