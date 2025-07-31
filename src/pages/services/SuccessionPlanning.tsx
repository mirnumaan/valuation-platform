import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BuildingOfficeIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ChartBarIcon,
  DocumentChartBarIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const SuccessionPlanning: React.FC = () => {
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
            <BuildingOfficeIcon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Succession Planning</h1>
          <p className="text-xl text-gray-600">
            Plan your business transition with confidence. Our succession planning valuations 
            help you understand your business's true worth and establish fair terms for 
            ownership transfers.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Strategic Succession Planning</h2>
            <p className="text-gray-600 mb-6">
              Succession planning is one of the most critical decisions a business owner will make. 
              Our comprehensive valuations provide the foundation for fair and effective transition 
              strategies, whether you're planning to pass the business to family members, sell to 
              employees, or prepare for an external sale.
            </p>
            <p className="text-gray-600 mb-6">
              We consider both tangible and intangible assets, including goodwill, customer 
              relationships, and intellectual property, to ensure a complete picture of your 
              business value. Our analysis also identifies potential value enhancement 
              opportunities to maximize your transition outcomes.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Family business transition planning</h4>
                  <p className="text-gray-600 text-sm">Structured approaches for generational transfers</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Management buyout valuations</h4>
                  <p className="text-gray-600 text-sm">Fair pricing for employee ownership transitions</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Employee share schemes</h4>
                  <p className="text-gray-600 text-sm">Valuation support for employee ownership programs</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Generational transfer strategies</h4>
                  <p className="text-gray-600 text-sm">Tax-effective succession planning approaches</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Succession Planning Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <DocumentChartBarIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Current State Analysis</h3>
              <p className="text-gray-600">
                We assess your current business value and identify the key value 
                drivers that will impact your succession strategy.
              </p>
            </div>
            <div className="text-center">
              <ChartBarIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Future Value Modeling</h3>
              <p className="text-gray-600">
                We model different scenarios to show how value might change under 
                various succession strategies and timeframes.
              </p>
            </div>
            <div className="text-center">
              <UserGroupIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Implementation Support</h3>
              <p className="text-gray-600">
                We provide ongoing valuation support as you implement your 
                succession plan and monitor progress.
              </p>
            </div>
          </div>
        </div>

        {/* Succession Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Succession Planning Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Family Succession</h3>
              <p className="text-gray-600">
                Transferring ownership to family members while ensuring fair 
                treatment of all stakeholders and maintaining business continuity.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Management Buyout</h3>
              <p className="text-gray-600">
                Selling to existing management team with valuations that support 
                financing arrangements and fair pricing negotiations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Employee Ownership</h3>
              <p className="text-gray-600">
                Implementing employee share ownership plans (ESOPs) with proper 
                valuation frameworks for ongoing operations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Gradual Transition</h3>
              <p className="text-gray-600">
                Phased ownership transfers over time with regular revaluations 
                to ensure fair pricing throughout the process.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Benefits of Professional Succession Valuation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">Fair Pricing</h3>
              <p className="text-gray-600 text-sm">
                Ensure all parties receive fair value based on objective market analysis
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Tax Optimization</h3>
              <p className="text-gray-600 text-sm">
                Structure transitions to minimize tax implications for all parties
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Risk Mitigation</h3>
              <p className="text-gray-600 text-sm">
                Identify and address potential risks before they impact the transition
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Family Harmony</h3>
              <p className="text-gray-600 text-sm">
                Independent valuations help maintain family relationships during transitions
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Business Continuity</h3>
              <p className="text-gray-600 text-sm">
                Ensure smooth operations throughout the succession process
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Future Planning</h3>
              <p className="text-gray-600 text-sm">
                Establish frameworks for ongoing valuation and decision-making
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Ready to Plan Your Succession?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Start planning your business succession today. Our expert team will help you 
            understand your options and create a strategy that works for your unique situation.
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

export default SuccessionPlanning;
