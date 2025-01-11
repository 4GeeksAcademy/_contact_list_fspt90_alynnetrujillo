import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Context } from "../store/appContext.js";


export const EditContact = () => {
    const { store, actions } = useContext(Context)

    return (
        <div className="container">
            <h1 className="text-center">Edit Contact Information</h1>
            <form className="row g-3" onSubmit={actions.handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputName" className="form-label">Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" id="exampleInputName" onChange={actions.handleChange} value={store.contact.name} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputAddress" className="form-label">Address</label>
                    <input type="text" className="form-control" placeholder="Address" id="exampleInputAddress" onChange={actions.handleChange} value={store.contact.address} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPhoneNum" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" placeholder="Phone Number" id="exampleInputPhoneNum" aria-describedby="emailHelp" onChange={actions.handleChange} value={store.contact.phone} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={actions.handleChange} value={store.contact.email} />
                </div>
                <div className="mb-12">
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </form>
            <Link to="/contacts">Or Go Back To Contacts</Link>
        </div>
    )
}


