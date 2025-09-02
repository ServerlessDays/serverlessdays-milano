import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AboutUs from "./Components/AboutUs";
import AgendaAccordion from './Components/Agenda';
import CurrentAgenda from './Components/CurrentAgenda';
import FullAgenda from './Components/FullAgenda';
// import CommunitySponsors from "./Components/CommunitySponsors";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import NotFound from './Components/NotFound';
import Sponsors from './Components/Sponsors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/presentation/current" element={<CurrentAgenda />} />
        <Route path="/presentation/full" element={<FullAgenda />} />
        <Route path="/presentation" element={<CurrentAgenda />} />
        <Route
          path="/"
          element={
            <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600">
              {/* Animated background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
                <div className="absolute top-1/4 -right-20 w-60 h-60 bg-pink-300 bg-opacity-20 rounded-full animate-bounce"></div>
                <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-300 bg-opacity-15 rounded-full animate-pulse delay-1000"></div>
                <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-300 bg-opacity-25 rounded-full animate-bounce delay-500"></div>
              </div>

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black bg-opacity-5"></div>

              <div className="relative z-10">
                <Navbar />
                <Home />
                <Sponsors />

                <AgendaAccordion />
                {/* <CommunitySponsors /> */}
                {/* <AboutUs /> */}

                <Footer />
              </div>
            </div>
          }
        />
        {/* Catch-all route for 404 pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
