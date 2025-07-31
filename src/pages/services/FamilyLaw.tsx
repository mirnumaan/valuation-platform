import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DocumentChartBarIcon,
  CheckCircleIcon,
  ScaleIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const FamilyLaw: React.FC = () => {
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
            <DocumentChartBarIcon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Family Law Matters</h1>
          <p className="text-xl text-gray-600">
            Navigate family law proceedings with fair, independent valuations. Our reports 
            help both parties understand business value in divorce settlements and ensure 
            equitable distribution of assets.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Family Law Valuation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Matrimonial settlements</h4>
                  <p className="text-gray-600 text-sm">Fair business valuations for divorce proceedings</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Asset division analysis</h4>
                  <p className="text-gray-600 text-sm">Comprehensive assessment of business assets</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Independent expert reports</h4>
                  <p className="text-gray-600 text-sm">Neutral valuations for court proceedings</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Court-ready documentation</h4>
                  <p className="text-gray-600 text-sm">Reports that meet legal standards</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <ScaleIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Independent Assessment</h3>
            <p className="text-gray-600">
              We maintain strict neutrality to provide fair and unbiased valuations.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <UserGroupIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Clear Communication</h3>
            <p className="text-gray-600">
              Complex valuations explained in clear terms for all parties.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <ShieldCheckIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Court Defensible</h3>
            <p className="text-gray-600">
              Reports prepared to withstand legal scrutiny and cross-examination.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Need a Family Law Valuation?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We understand the sensitive nature of family law matters. Contact us for 
            professional, independent business valuations.
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

export default FamilyLaw;
