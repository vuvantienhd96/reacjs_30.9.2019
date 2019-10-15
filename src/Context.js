import React, {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type) {
        case 'Delete_contact':
            return {
                ...state,
                Contacts: state.Contacts.filter(Contact => 
                    Contact.id !== action.payload)
            };
        case 'Add_contact':
            return {
                ...state,
                Contacts: [action.payload,
                ...state.Contacts]
            };
        case 'Update_Contact':
            return {
                Contacts: state.Contacts.map(contact => contact.id === action.payload.id 
                    ? (contact = action.payload) 
                    :contact)
            };
        default:
            return state;
    }
}

export class Provider extends Component {
    
    state = {
        Contacts: [],
        dispath: action => {
            this.setState( state => reducer(state, action))
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(function (res) {
            // handle success
            return this.setState({
                Contacts: res.data
            });
        }.bind(this)).catch(function (error) {
            console.log(error);
        }).finally(function () {
            // always excuted
        })
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