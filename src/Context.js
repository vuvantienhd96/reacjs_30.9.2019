import React, {Component} from 'react';
import Contact from './components/Contact';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'Delete_contact':
            return {
                ...state,
                Contacts: state.Contacts.filter(Contact => 
                    Contact.id !== action.payload)
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
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
        ],
        dispath: action => {
            this.setState( state => reducer(state, action))
        }
    }

    render(){
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;