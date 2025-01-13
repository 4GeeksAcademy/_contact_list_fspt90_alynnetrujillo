import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const FormToAddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();

    const [info, setInfo] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://playground.4geeks.com/contact/agendas/my_contacts/contacts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info),
            });

            if (!response.ok) {
                throw new Error(`Failed to add contact: ${response.status} ${response.statusText}`);
            }

            const newContact = await response.json();
            actions.showContacts(newContact);
            navigate("/contacts");
        } catch (error) {
            console.error("Error adding contact:", error);
            alert(`Failed to add contact. Please try again later. Error: ${error.message}`);
        }

        if (id) {
            actions.editContact(id, info);
        } else {
            actions.addContactToList(info);
        }

        alert("The information has been saved");
    };

    useEffect(() => {
        if (id && store.contacts.length > 0) {
            const contactToEdit = store.contacts.find(contact => contact.id === id);
            if (contactToEdit) {
                setInfo(contactToEdit);
            }
        }
    }, [id, store.contacts]);

    return (
        <div className="container">
            <h1 className="text-center">Add New Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        id="exampleInputName"
                        onChange={(e) => handleChange(e)}
                        value={info.name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        id="exampleInputEmail1"
                        onChange={(e) => handleChange(e)}
                        value={info.email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputAddress" className="form-label">Address</label>
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Address"
                        id="exampleInputAddress"
                        onChange={(e) => handleChange(e)}
                        value={info.address}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPhoneNum" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        id="exampleInputPhoneNum"
                        onChange={(e) => handleChange(e)}
                        value={info.phone}
                    />
                </div>
                <div className="mb-12">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
            <Link to="/contacts">Or Go Back To Contacts</Link>
        </div>
    );
};