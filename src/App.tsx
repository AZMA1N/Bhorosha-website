import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ListLandWizard from './pages/ListLandWizard';
import AdminDashboard from './pages/AdminDashboard';
import LandLeaserDashboard from './pages/LandLeaserDashboard';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ROICalculator from './pages/ROICalculator';
import Marketplace from './pages/Marketplace';
import MyLands from './pages/MyLands';
import Financials from './pages/Financials';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/my-lands" element={<MyLands />} />
        <Route path="/dashboard/financials" element={<Financials />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/land-leaser" element={<LandLeaserDashboard />} />
        <Route path="/list-land" element={<ListLandWizard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/roi-calculator" element={<ROICalculator />} />
        <Route path="/marketplace" element={<Marketplace />} />
      </Routes>
    </Router>
  );
}

export default App;
