import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Myprojects from "./components/myprojects/Myprojects";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import { Toaster } from "react-hot-toast";
import ReactGA from "react-ga4";

const App: React.FC = () => {
	ReactGA.initialize("G-4QJQTB4F1M");
	return (
		<>
			<Toaster />
			<Header />
			<Nav />
			<About />
			<Experience />
			<Myprojects />
			<Contacts />
			<Footer />
		</>
	);
};

export default App;
