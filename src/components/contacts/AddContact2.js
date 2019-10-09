import React, { Component } from 'react'
import { Consumer } from '../../Context';
import uuid from 'uuid';
import TextInputGroup from './../layout/TextInputGroup';

class AddContact extends Component {
    
    state = {
        name: '',
        email: '',
        phone: '',
        error: {}
    }
    
    onSubmit = (dispath, e) => {
        e.preventDefault();
        const  {name, email, phone} = this.state;

        //Check For Errors
        if(name == ''){
            this.setState({error: {name: 'this is name wrong or invalid !'}})
            return;
        }
        
        if(phone == ''){
            this.setState({error: {phone: 'this is phone wrong or invalid !'}})
            return;
        }

        if(email == ''){
            this.setState({error: {email: 'this is email wrong or invalid !'}})
            return;
        }

        const newContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispath({type: 'Add_contact', payload: newContact})
        this.setState({
            name: '',
            email: '',
            phone:'', 
            error: {}
        });
    };
    
    onChange = (e) => this.setState({ [e.target.name] : e.target.value});

    render() {
        const { name, phone, email, error } = this.state; 

        return (
            <Consumer>
                {value => {
                    const {dispath} = value;
                    return (
                <div className="card mb-3">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit.bind(this, dispath)}>
                            <TextInputGroup 
                                label="Name"
                                name="name"
                                placeholder="Enter name"
                                value={name}
                                onChange={this.onChange}
                                error= {error.name}
                            />
                            <TextInputGroup 
                                label="Phone"
                                name="phone"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={this.onChange}
                                error= {error.phone}
                            />
                            <TextInputGroup 
                                label="Email"
                                name="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={this.onChange}
                                type="email"
                                error= {error.email}
                            />
                            <input 
                                type="submit" 
                                value="Add Contact" 
                                className="btn btn-light btn-block"
                                />
                        </form>
                    </div>
                </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContact;