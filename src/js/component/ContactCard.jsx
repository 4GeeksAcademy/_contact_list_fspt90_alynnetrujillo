import React from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'; 

export const ContactCard = ( {name,phone,email,address,id} ) => {
    const { store, actions } = useContext(Context)

    const permDeleteContact = () => {
        actions.deleteContact(id);
    }

    const editSpecificContact = () => {
        actions.editContact({ name, phone, email, address }, id); 
    };
    return (
        <div className="card">
            <div className="col-md-7">
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">
                        <i className="fa-solid fa-phone-flip me-2"></i>{phone}
                    </p>
                    <p className="card-text">
                        <i className="fa-solid fa-envelope me-2"></i>{email}
                    </p>
                    <p className="card-text">
                        <i className="fa-solid fa-location-dot me-2"></i>{address}
                    </p>
                    <Link to={`/editcontact/${id}`}> 
                        <button className="btn btn-danger" onClick={ () => editSpecificContact(id)}>
                            <FontAwesomeIcon icon={faPenToSquare} /> Edit
                        </button>
                    </Link>
                    <button className="btn btn-danger" onClick={ () => permDeleteContact(id)}>
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                    
                </div>
            </div>
        </div>

    )
}