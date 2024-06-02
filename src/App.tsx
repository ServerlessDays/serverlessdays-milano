import './App.css';
// import AboutUs from "./Components/AboutUs";
import AgendaAccordion from './Components/Agenda';
// import CommunitySponsors from "./Components/CommunitySponsors";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Sponsors from './Components/Sponsors';

function App() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500">
      <div className="relative ">
        <Navbar />
        <Home />
        <Sponsors />

        <AgendaAccordion />
        {/* <CommunitySponsors /> */}
        {/* <AboutUs /> */}

        <Footer />
      </div>
    </div>
  );
}

export default App;
