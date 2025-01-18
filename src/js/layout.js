import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";


import { Home } from "./views/home.js";
import { FormToAddContact } from "./views/FormToAddContact.jsx";
import { Contacts } from "./views/Contacts.jsx";
import { EditContact } from "./views/EditContact.jsx";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";



import injectContext from "./store/appContext";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/addcontact" element={<FormToAddContact />} />
						<Route path="/editcontact/:id" element={<FormToAddContact />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
