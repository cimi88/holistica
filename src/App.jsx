import "../src/Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/home"
import About from "./Pages/about.jsx"
import Contact from "./Pages/contact.jsx"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />}>Acerca de mi</Route>
					<Route path="/contact" element={<Contact />}>Contacto</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
