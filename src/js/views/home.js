import React, { useContext } from "react";
import "../../styles/home.css";
import { ContactCard } from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";


export const Home = () => {
	const { store } = useContext(Context);
	return (
		<div className="text-center mt-5">
			{store.contacts && store.contacts.length > 0 ? (
				store.contacts.map((contact, index) => (
					<ContactCard
						name={contact.name}
						phone={contact.phone}
						email={contact.email}
						address={contact.address}
						id={contact.id}
						key={index} />
				))
			) : (
				<li className="list-group-item">No contacts found</li>
			)}
		</div>
	)
};
