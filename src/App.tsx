import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutUs from "./Components/AboutUs";
import AgendaAccordion from './Components/Agenda';
import PresentationAgenda from './Components/PresentationAgenda';
// import CommunitySponsors from "./Components/CommunitySponsors";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
// import Sponsors from './Components/Sponsors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/presentation" element={<PresentationAgenda />} />
        <Route
          path="/"
          element={
            <div className="relative overflow-hidden bg-gradient-to-br from-pink-400 to-purple-500">
              <div className="relative ">
                <Navbar />
                <Home />
                {/* <Sponsors /> */}

                <AgendaAccordion />
                {/* <CommunitySponsors /> */}
                {/* <AboutUs /> */}

                <Footer />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
