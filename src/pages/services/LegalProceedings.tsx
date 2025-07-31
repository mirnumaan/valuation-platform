import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ScaleIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const LegalProceedings: React.FC = () => {
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
            <ScaleIcon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Legal Proceedings & Disputes</h1>
          <p className="text-xl text-gray-600">
            Expert valuations that stand up to legal scrutiny. We provide detailed, 
            well-documented business valuations for legal proceedings, shareholder disputes, 
            and partnership dissolutions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Court-Ready Valuations</h2>
            <p className="text-gray-600 mb-6">
              Our legal valuation reports are prepared with the understanding that they may 
              be scrutinized in court proceedings. We maintain the highest standards of 
              documentation and methodology to ensure our valuations are defensible under 
              cross-examination.
            </p>
            <p className="text-gray-600 mb-6">
              Our team has extensive experience providing expert witness testimony and 
              supporting legal teams throughout the litigation process. We understand the 
              critical importance of accuracy, reliability, and clear communication in 
              legal contexts.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Court-admissible valuation reports</h4>
                  <p className="text-gray-600 text-sm">Reports that meet all legal standards and requirements</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Expert witness testimony</h4>
                  <p className="text-gray-600 text-sm">Professional testimony to support your case</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Dispute resolution support</h4>
                  <p className="text-gray-600 text-sm">Assistance throughout the dispute resolution process</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Detailed methodology explanation</h4>
                  <p className="text-gray-600 text-sm">Clear documentation of all valuation approaches</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Legal Valuation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <DocumentTextIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Initial Assessment</h3>
              <p className="text-gray-600">
                We review the legal context and requirements to ensure our valuation 
                meets the specific needs of your case.
              </p>
            </div>
            <div className="text-center">
              <UserGroupIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Collaborative Approach</h3>
              <p className="text-gray-600">
                We work closely with your legal team to understand the case strategy 
                and provide relevant insights.
              </p>
            </div>
            <div className="text-center">
              <ShieldCheckIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Defensible Results</h3>
              <p className="text-gray-600">
                Our final report includes comprehensive documentation and methodology 
                that can withstand legal scrutiny.
              </p>
            </div>
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Common Legal Valuation Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Shareholder Disputes</h3>
              <p className="text-gray-600">
                Resolving conflicts between business partners and shareholders with 
                fair and independent valuations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Partnership Dissolutions</h3>
              <p className="text-gray-600">
                Determining fair value for partnership interests during business 
                dissolution proceedings.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Breach of Contract</h3>
              <p className="text-gray-600">
                Calculating damages and losses resulting from contractual breaches 
                affecting business value.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Minority Interest Disputes</h3>
              <p className="text-gray-600">
                Assessing the value of minority shareholdings in closely held 
                business entities.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Need a Legal Valuation?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced team understands the complexities of legal proceedings. 
            Contact us to discuss your specific requirements and timeline.
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

export default LegalProceedings;
