import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MobileCallButton from './components/MobileCallButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import WhyUs from './pages/WhyUs';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';

// Service pages
import LegalProceedings from './pages/services/LegalProceedings';
import SuccessionPlanning from './pages/services/SuccessionPlanning';
import ExitStrategy from './pages/services/ExitStrategy';
import TaxPurposes from './pages/services/TaxPurposes';
import MergersAcquisitions from './pages/services/MergersAcquisitions';
import FamilyLaw from './pages/services/FamilyLaw';
import InsolvencyBankruptcy from './pages/services/InsolvencyBankruptcy';
import InsuranceValuations from './pages/services/InsuranceValuations';
import FinancialReporting from './pages/services/FinancialReporting';

import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/legal-proceedings" element={<LegalProceedings />} />
            <Route path="/services/succession-planning" element={<SuccessionPlanning />} />
            <Route path="/services/exit-strategy" element={<ExitStrategy />} />
            <Route path="/services/tax-purposes" element={<TaxPurposes />} />
            <Route path="/services/mergers-acquisitions" element={<MergersAcquisitions />} />
            <Route path="/services/family-law" element={<FamilyLaw />} />
            <Route path="/services/insolvency-bankruptcy" element={<InsolvencyBankruptcy />} />
            <Route path="/services/insurance-valuations" element={<InsuranceValuations />} />
            <Route path="/services/financial-reporting" element={<FinancialReporting />} />
            <Route path="/team" element={<Team />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <MobileCallButton />
      </div>
    </Router>
  );
}

export default App;
