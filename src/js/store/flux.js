const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: {
				name: "",
				address: "",
				phone: "",
				email: "",
				
			},
			contacts: [],
			deletecontact: {},
		},
		actions: {
			// Use getActions to call a function within a fuction
			contactInfo: () => {
				const options = {method: 'GET', headers: {'User-Agent': 'insomnia/10.3.0'}};

				fetch('https://playground.4geeks.com/contact/agendas/contact-info/contacts', options)
  				.then(response => response.json())
 				.then(response => console.log(response))
  				.catch(err => console.error(err));
			},


			addContactToList: () => {
				const options = {method: 'POST'};

				fetch('https://playground.4geeks.com/contact/agendas/contact-users/contacts', options)
  				.then(response => response.json())
  				.then(response => console.log(response))
  				.catch(err => console.error(err));
			},

			createContact: () => {
				const options = {method: 'POST'};

				fetch('https://playground.4geeks.com/contact/agendas/create-new/contacts', options)
  				.then(response => response.json())
 				.then(response => console.log(response))
  				.catch(err => console.error(err));
			},

			editContact: () => {
				const options = {method: 'PUT', };

				fetch('https://playground.4geeks.com/contact/agendas/edit-contact/contacts/1', options)
  				.then(response => response.json())
  				.then(response => console.log(response))
  				.catch(err => console.error(err));
			},

			delete_Contact: () => {
				const options = {method: 'DELETE'};

				fetch('https://playground.4geeks.com/contact/agendas/delete-contact/contacts/delete', options)
  				.then(response => response.json())
  				.then(response => console.log(response))
  				.catch(err => console.error(err));
			},

			/*
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				
			}, 
			*/

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
