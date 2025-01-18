import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js";


export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams();

    const [contact, setContact] = useState(store.contacts);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        if (id) {
            actions.editContact(id, contact);
            navigate("/")
        } else {
            console.error("Error editing contact:", error);
        }
    }
    

    return (
        <div className="container">
            <h1 className="text-center">Edit Contact Information</h1>
            <form className="row g-3" >
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        id="exampleInputName"
                        onChange={(e) => handleChange(e)}
                        value={contact.name} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPhoneNum" className="form-label">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        id="exampleInputPhoneNum"
                        aria-describedby="emailHelp"
                        onChange={(e) => handleChange(e)}
                        value={contact.phone} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email address"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => handleChange(e)}
                        value={contact.email} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputAddress" className="form-label">Address</label>
                    <input
                        type="text"
                        name=""
                        className="form-control"
                        placeholder="Address"
                        id="exampleInputAddress"
                        onChange={(e) => handleChange(e)}
                        value={contact.address} />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
            <Link to="/contacts">Or Go Back To Contacts</Link>
        </div>
    )
};

