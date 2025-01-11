import React, { useState, useEffect, useRef, useContext } from "react";
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/ContactCard.jsx";

export const Contacts = () => {

    const { store, actions } = useContext(Context)
    console.log(store.contact)

    return (

        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/addcontact">
                    <button className="btn btn-success">Add New contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.contact && store.contact.length > 0 && store.contact.map((contact, index) => {
                    return (
                        <ContactCard contact={contact} key={index} />
                    )
                })}
            </ul>
        </div>
    );
};