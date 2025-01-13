import React from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../store/appContext'
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const ContactCard = (props) => {
    const { store, actions } = useContext(Context)

    
    return (
        <div className="card">
            <div className="col-md-7">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">
                        <i className="fa-solid fa-location-dot me-2"></i>{props.address}
                    </p>
                    <p className="card-text">
                        <i className="fa-solid fa-phone-flip me-2"></i>{props.phone}
                    </p>
                    <p className="card-text">
                        <i className="fa-solid fa-envelope me-2"></i>{props.email}
                    </p>
                    <button className="btn btn-danger" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrash} /> Delete
                    </button>
                </div>
            </div>
        </div>
    )
}
