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


        if (id) {
            actions.editContact(id, info);
            navigate("/")
        } else {
            actions.addContactToList(info);
            navigate("/")
        }
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
                <div className="mb-12">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
            <Link to="/">Or Go Back To Contacts</Link>
        </div>
    );
};