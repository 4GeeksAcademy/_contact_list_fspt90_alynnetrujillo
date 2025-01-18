const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			showContacts: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/alynne_t/contacts', {
						headers: { 'Content-Type': 'application/json' },
					});

					if (!response.ok) {
						throw new Error(`Failed to load contacts: ${response}`);
					}
					const data = await response.json();
					setStore({ contacts: data.contacts });
				} catch (error) {
					console.error("Error loading contacts:", error);
				}
			},
			addContactToList: async (contact) => {
				try {
					const store = getStore();
					const response = await fetch('https://playground.4geeks.com/contact/agendas/alynne_t/contacts', {
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(contact),
					});

					if (!response.ok) {
						throw new Error(`Failed to add contact: ${response}`);
					}
					const newContact = await response.json();
					console.log(newContact);
					setStore({ contacts: [...store.contacts, newContact] });
					getActions().showContacts()
				} catch (error) {
					console.error("Error adding contact:", error);
				}
			},
			editContact: async (updatedContact, id) => {
				try {
					const store = getStore();

					const response = await fetch(`https://playground.4geeks.com/contact/agendas/alynne_t/contacts/${id}`, {
						method: 'PUT',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify(updatedContact),
					});

					if (!response.ok) {
						throw new Error(`Failed to edit contact: ${response}`);
					}

					const updatedData = await response.json();
					console.log(updatedData);

					const updatedContacts = store.contacts.map((contact) =>
						contact.id === id ? updatedData : contact
					);
					setStore({ contacts: updatedContacts });
				} catch (error) {

				}
			},
			deleteContact: async (id) => {
				try {
					const store = getStore();

					const response = await fetch(`https://playground.4geeks.com/contact/agendas/alynne_t/contacts/${id}`, {
						method: 'DELETE',
					});

					if (!response.ok) {
						throw new Error(`Failed to delete contact: ${response}`);
					}

					const updatedContacts = store.contacts.filter((contact) => contact.id !== id);
					setStore({ contacts: updatedContacts });
					getActions().showContacts()
				} catch (error) {
					console.error("Error deleting contact:", error);
				}
			},
		},
	};
};

export default getState;


// API and Fetching
//Do I need line 5?
//line 21-25
// double awaits after async ex: line 28-40

// Layout line 33. 