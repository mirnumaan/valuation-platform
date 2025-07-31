import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ChartBarIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  FlagIcon,
  ClockIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const ExitStrategy: React.FC = () => {
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
            <ChartBarIcon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Exit Strategy Valuations</h1>
          <p className="text-xl text-gray-600">
            Maximize your business value before sale. Our exit strategy valuations include 
            detailed analysis of value drivers and growth opportunities to optimize your 
            business's worth before going to market.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Strategic Exit Planning</h2>
            <p className="text-gray-600 mb-6">
              A successful business exit requires careful planning and strategic preparation. 
              Our comprehensive exit strategy valuations don't just tell you what your 
              business is worth today—they identify specific opportunities to enhance 
              value before you go to market.
            </p>
            <p className="text-gray-600 mb-6">
              We analyze market conditions, competitive positioning, and buyer expectations 
              to help you time your exit optimally and position your business for maximum 
              value realization. Our detailed reports provide actionable insights for 
              value enhancement initiatives.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Pre-sale valuations</h4>
                  <p className="text-gray-600 text-sm">Current market value assessment and projections</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Value enhancement strategies</h4>
                  <p className="text-gray-600 text-sm">Specific recommendations to increase business value</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Market positioning analysis</h4>
                  <p className="text-gray-600 text-sm">Understanding your competitive advantage</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Exit timing optimization</h4>
                  <p className="text-gray-600 text-sm">Strategic timing recommendations for maximum value</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Exit Strategy Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <FlagIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Current Valuation</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive assessment of your business's current market value
              </p>
            </div>
            <div className="text-center">
              <ArrowTrendingUpIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Value Drivers Analysis</h3>
              <p className="text-gray-600 text-sm">
                Identify key factors that influence your business value
              </p>
            </div>
            <div className="text-center">
              <ChartBarIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Enhancement Plan</h3>
              <p className="text-gray-600 text-sm">
                Develop strategies to maximize value before exit
              </p>
            </div>
            <div className="text-center">
              <ClockIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Timing Strategy</h3>
              <p className="text-gray-600 text-sm">
                Optimize exit timing based on market conditions
              </p>
            </div>
          </div>
        </div>

        {/* Value Enhancement Opportunities */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Common Value Enhancement Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Financial Optimization</h3>
              <p className="text-gray-600">
                Improve financial performance through cost management, revenue 
                diversification, and cash flow optimization.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Operational Efficiency</h3>
              <p className="text-gray-600">
                Streamline operations, implement best practices, and reduce 
                dependencies on key personnel.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Market Position</h3>
              <p className="text-gray-600">
                Strengthen competitive advantages, expand market share, and 
                develop sustainable competitive moats.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Growth Initiatives</h3>
              <p className="text-gray-600">
                Identify and execute growth opportunities that demonstrate 
                future potential to buyers.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Risk Mitigation</h3>
              <p className="text-gray-600">
                Address key business risks that could negatively impact 
                valuation or deal completion.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600">
                Improve financial reporting, systems, and processes to 
                increase buyer confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Typical Exit Planning Timeline</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                1-2
              </div>
              <h3 className="font-semibold mb-2">Years Before Exit</h3>
              <p className="text-gray-600 text-sm">
                Initial valuation, identify value enhancement opportunities, 
                begin implementation of improvement strategies
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                6-12
              </div>
              <h3 className="font-semibold mb-2">Months Before Exit</h3>
              <p className="text-gray-600 text-sm">
                Updated valuation, prepare marketing materials, engage 
                advisors, optimize financials
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold">
                3-6
              </div>
              <h3 className="font-semibold mb-2">Months Before Exit</h3>
              <p className="text-gray-600 text-sm">
                Market the business, manage due diligence, negotiate terms, 
                finalize transaction
              </p>
            </div>
          </div>
        </div>

        {/* Types of Exits */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Exit Strategy Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Strategic Sale</h3>
              <p className="text-gray-600">
                Sale to a strategic buyer who can realize synergies, often 
                resulting in premium valuations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Financial Sale</h3>
              <p className="text-gray-600">
                Sale to private equity or other financial buyers focused 
                on return on investment.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Management Buyout</h3>
              <p className="text-gray-600">
                Sale to existing management team, often with external 
                financing support.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Initial Public Offering</h3>
              <p className="text-gray-600">
                Going public through IPO for larger businesses seeking 
                liquidity and growth capital.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Ready to Plan Your Exit?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            The best time to start planning your exit is now. Contact us to understand 
            your current value and develop a strategy to maximize your business worth.
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

export default ExitStrategy;
