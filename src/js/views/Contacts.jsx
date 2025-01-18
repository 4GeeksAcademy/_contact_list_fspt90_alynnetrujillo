import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/ContactCard.jsx";

export const Contacts = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
            </div>
            <ul className="list-group mt-3">
                {store.contacts && store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <ContactCard 
                        name={contact.name} 
                        phone={contact.phone} 
                        email={contact.email} 
                        address={contact.address} 
                        key={index} />
                    ))
                ) : (
                    <li className="list-group-item">No contacts found</li>
                )}
            </ul>
        </div>
    );
};