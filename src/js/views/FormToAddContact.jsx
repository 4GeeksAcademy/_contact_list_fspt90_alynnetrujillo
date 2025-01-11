import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const FormToAddContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    const { id } = useParams(); 

    const [contact, setContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });
    
    const handleChange = (e) => {
        setContact({ 
          ...contact, 
          [e.target.name]: e.target.value 
        }); 
      };

    const saveContact = (e) => {
        e.preventDefault();

        if (Object.values(contact).some((value) => value.trim() === "")) {
            alert("You Have Empty Fields");
            return;
        }
        if (id) {
            actions.editContact(id, contact);
        } else {
            actions.addContact(contact);
        }
        alert("The information has been saved");
        navigate("/contacts"); 
        setContact({ name: "", phone: "", email: "", address: "" }); 
    };

    useEffect(() => {
        if (id && store.contacts.length > 0) {
            const currentContact = store.contacts.find((contact) => contact.id == id);
            if (currentContact) setContact(currentContact);
        }
    }, [id, store.contacts]);

    return (
        <div className="container">
            <h1 className="text-center">Add New Contact</h1>
            <form onSubmit={saveContact}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Full Name"
                        id="exampleInputName"
                        value={contact.name}
                        onChange={handleChange}
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
                        value={contact.email}
                        onChange={handleChange}
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
                        value={contact.address}
                        onChange={handleChange}
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
                        value={contact.phone}
                        onChange={handleChange}
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