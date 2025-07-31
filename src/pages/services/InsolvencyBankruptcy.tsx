import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheckIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  BanknotesIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const InsolvencyBankruptcy: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <Link 
            to="/services" 
            className="inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex justify-center mb-6">
            <ShieldCheckIcon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Insolvency & Bankruptcy</h1>
          <p className="text-xl text-gray-600">
            Get accurate valuations in challenging circumstances. Our insolvency valuations 
            help administrators, creditors, and stakeholders make informed decisions with 
            realistic assessments based on current market conditions.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Insolvency Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Liquidation valuations</h4>
                  <p className="text-gray-600 text-sm">Asset valuations for forced sale scenarios</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Going concern assessments</h4>
                  <p className="text-gray-600 text-sm">Viability analysis for business continuation</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Asset realization estimates</h4>
                  <p className="text-gray-600 text-sm">Realistic recovery estimates for creditors</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Creditor reports</h4>
                  <p className="text-gray-600 text-sm">Detailed analysis for creditor decision-making</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <ExclamationTriangleIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Urgent Response</h3>
            <p className="text-gray-600">
              Fast turnaround times to meet critical insolvency deadlines.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <DocumentTextIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Detailed Analysis</h3>
            <p className="text-gray-600">
              Comprehensive assessment of assets and recovery prospects.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <BanknotesIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Recovery Optimization</h3>
            <p className="text-gray-600">
              Strategies to maximize asset recovery for stakeholders.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Need Insolvency Valuation?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Time-sensitive insolvency matters require expert analysis. Contact us for 
            urgent valuation support.
          </p>
          <div className="flex justify-center">
            <a 
              href="tel:1300-520-121" 
              className="btn btn-primary inline-flex items-center gap-2"
            >
              📞 Call: 1300 520 121
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsolvencyBankruptcy;
