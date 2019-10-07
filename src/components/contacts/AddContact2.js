import React, { Component } from 'react'
import { Consumer } from '../../Context';
import uuid from 'uuid';
import TextInputGroup from './../layout/TextInputGroup';

class AddContact extends Component {
    
    state = {
        name: '',
        email: '',
        phone: ''
    }
    
    onSubmit = (dispath, e) => {
        e.preventDefault();
        const  {name, email, phone} = this.state;

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
            phone:''
        });
    };
    
    onChange = (e) => this.setState({ [e.target.name] : e.target.value});

    render() {
        const { name, phone, email } = this.state; 

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
                            />
                            <TextInputGroup 
                                label="Phone"
                                name="phone"
                                placeholder="Enter phone"
                                value={phone}
                                onChange={this.onChange}
                            />
                            <TextInputGroup 
                                label="Email"
                                name="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={this.onChange}
                                type="email"
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