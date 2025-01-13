const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {
				full_name: "",
				phone: "",
				email: "",
				address: "",
			},

		},
		actions: {
			
			/*
						showContacts: async () => {
							try {
								const response = await fetch('https://playground.4geeks.com/apis/fake/contact/agenda/my_agenda');
								if (!response.ok) throw new Error("Failed to load contacts");
								const data = await response.json();
								setStore({ contacts: data });
							} catch (error) {
								console.error("Error loading contacts:", error);
							}
						}, 
						this one would be GET
			*/

			// Add a new contact
			addContactToList: async (contact) => {
				try {
					const store = getStore();
					setStore({ contacts: [...store.contacts, newContact] });
					const response = await fetch('https://playground.4geeks.com/contact/agendas/my_contacts/contacts', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({
							...contact,
						}),
					});
					if (!response.ok) throw new Error(`Failed to add contact: ${response.status} {response.statusText}`);
					const newContact = await response.json();

					// Update the global store
					
				} catch (error) {
					console.error("Error adding contact:", error);
				}
			},

			// Edit an existing contact
			editContact: async (id, updatedContact) => {
				try {
					const store = getStore();
					const updatedContacts = store.contacts.map((contact) =>
						contact.id === id ? updated : contact
					);
					setStore({ contacts: updatedContacts });
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/my_contacts/contacts/${id}`, {
						method: 'PUT',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(updatedContact),
					});
					if (!response.ok) throw new Error(`Failed to edit contact: ${response.status} {response.statusText}`);
					const updated = await response.json();

					// Update the global store
				} catch (error) {
					console.error("Error editing contact:", error);
				}
			},

			// Delete a contact
			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/my_contacts/contacts/${id}`, {
						method: 'DELETE',
					});
					if (!response.ok) throw new Error("Failed to delete contact");

					// Remove the contact from the global store
					const store = getStore();
					const updatedContacts = store.contacts.filter((contact) => contact.id !== id);
					setStore({ contacts: updatedContacts });
				} catch (error) {
					console.error("Error deleting contact:", error);
				}
			},
		},

	};
};

export default getState;