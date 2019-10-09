import React, { Component } from 'react'
import { Consumer } from '../../Context';
import PropTypes from 'prop-types';

class Contact extends Component {
    state = {
        showContactInfo: false
    };

    onShowClick = e =>{
        this.setState({
            showContactInfo: !this.state.showContactInfo
        })
    }
    
    onDeleteContact = (id, dispath) => {
        dispath({type: 'Delete_contact', payload: id});
    }

    render() {
        
        const {id, name , email, phone } = this.props.contact;
        const { showContactInfo } = this.state;

        return (

            <Consumer>
                {value => {
                    const  {dispath} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{name} {'  '}
                                <i onClick={this.onShowClick} 
                                className="fas fa-sort-down" style={{ cursor: 'pointer'}}></i>
                                <i onClick={this.onDeleteContact.bind(this, id, dispath)}
                                className="fas fa-times" style={{ cursor: 'pointer', color: 'red', float: 'right'}}></i>
                            </h4>
                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">{email}</li>
                                <li className="list-group-item">{phone}</li>
                            </ul>) : null}
                        </div>
                    );
                }}
            </Consumer>
            
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
}
export default Contact;