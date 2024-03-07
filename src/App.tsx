import "./App.css";
import AboutUs from "./Components/AboutUs";
import Agenda from "./Components/Agenda";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Sponsors from "./Components/Sponsors";

function App() {
	return (
		<div className="relative ">
			<Navbar />
			<div className="w-screen h-screen bg-gradient-to-br from-pink-400 to-purple-500">
				<Home />
				<Sponsors />
				<Agenda />
				<AboutUs />
				<Footer />
			</div>
		</div>
	);
}

export default App;
