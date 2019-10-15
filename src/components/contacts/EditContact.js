import React, { Component } from 'react'
import { Consumer } from '../../Context';
import TextInputGroup from './../layout/TextInputGroup';
import axios from 'axios';


class EditContact extends Component {
    
    state = {
        name: '',
        email: '',
        phone: '',
        error: {}
    }

    async componentDidMount(){
        const { id } = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const value = res.data;
        console.log(res);
        this.setState({
            name: value.name,
            email: value.email,
            phone: value.phone,
        });
    }

    onSubmit =  async (dispath, e) => {
        e.preventDefault();
        const  {name, email, phone} = this.state;

        //Check For Errors
        if(name === ''){
            this.setState({error: {name: 'this is name wrong or invalid !'}})
            return;
        }
        
        if(phone === ''){
            this.setState({error: {phone: 'this is phone wrong or invalid !'}})
            return;
        }

        if(email === ''){
            this.setState({error: {email: 'this is email wrong or invalid !'}})
            return;
        }
        
        const newContact = {
            name,
            email,
            phone
        };

        const { id } = this.props.match.params;
        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, newContact);
        dispath({type: 'Update_Contact', payload: res.data});

        this.props.history.push('/');
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
                    <div className="card-header"><h3>Edit Contact</h3></div>
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
                                value="Update Contact" 
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

export default EditContact;