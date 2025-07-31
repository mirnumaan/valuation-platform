import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const InsuranceValuations: React.FC = () => {
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
            <DocumentTextIcon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Insurance Valuations</h1>
          <p className="text-xl text-gray-600">
            Ensure adequate coverage with accurate insurance valuations. We help you 
            determine the right level of business insurance by providing detailed 
            valuations of assets, revenue streams, and business interruption impacts.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Insurance Valuation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Business interruption analysis</h4>
                  <p className="text-gray-600 text-sm">Calculate potential loss of income during disruptions</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Asset replacement costs</h4>
                  <p className="text-gray-600 text-sm">Current market value of business assets</p>
                </div>
              </li>
            </ul>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Key person valuations</h4>
                  <p className="text-gray-600 text-sm">Impact assessment of key personnel loss</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Coverage recommendations</h4>
                  <p className="text-gray-600 text-sm">Optimal insurance levels based on actual risk</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <ShieldCheckIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Risk Assessment</h3>
            <p className="text-gray-600">
              Comprehensive analysis of business risks and vulnerabilities.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <ExclamationTriangleIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Gap Analysis</h3>
            <p className="text-gray-600">
              Identify potential gaps in your current insurance coverage.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 text-center">
            <ClockIcon className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-3">Regular Reviews</h3>
            <p className="text-gray-600">
              Ongoing valuation updates as your business grows and changes.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Review Your Insurance Coverage?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't be under-insured. Contact us to ensure your business has adequate 
            insurance coverage based on accurate valuations.
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

export default InsuranceValuations;
