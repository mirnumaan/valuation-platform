import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpenIcon,
  CheckCircleIcon,
  DocumentChartBarIcon,
  ScaleIcon,
  ChartBarIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const FinancialReporting: React.FC = () => {
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
            <BookOpenIcon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Financial Reporting</h1>
          <p className="text-xl text-gray-600">
            Meet your financial reporting obligations with compliant valuations. Our reports 
            adhere to relevant accounting standards and provide the documentation you need 
            for statutory reporting, including impairment testing and purchase price allocation.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Financial Reporting Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Impairment testing</h4>
                  <p className="text-gray-600 text-sm">Regular asset impairment assessments</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Purchase price allocation</h4>
                  <p className="text-gray-600 text-sm">Fair value measurements for acquisitions</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">AASB compliance</h4>
                  <p className="text-gray-600 text-sm">Reports meeting Australian accounting standards</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Audit support</h4>
                  <p className="text-gray-600 text-sm">Documentation to satisfy external auditors</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <DocumentChartBarIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Standards Review</h3>
            <p className="text-gray-600">
              Ensure compliance with all relevant accounting standards.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <ScaleIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Fair Value Measurement</h3>
            <p className="text-gray-600">
              Accurate valuations using appropriate methodologies.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <ChartBarIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Comprehensive Documentation</h3>
            <p className="text-gray-600">
              Detailed reports supporting all valuation conclusions.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Need Financial Reporting Valuations?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ensure compliance with accounting standards and satisfy audit requirements 
            with our professional financial reporting valuations.
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

export default FinancialReporting;
