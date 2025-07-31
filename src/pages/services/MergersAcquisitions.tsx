import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CurrencyDollarIcon,
  CheckCircleIcon,
  UserGroupIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const MergersAcquisitions: React.FC = () => {
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
            <CurrencyDollarIcon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Mergers & Acquisitions</h1>
          <p className="text-xl text-gray-600">
            Make informed M&A decisions with accurate valuations. We provide comprehensive 
            analysis for both buyers and sellers, including synergy potential and risk 
            assessment backed by extensive market data from actual transactions.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Strategic M&A Advisory</h2>
            <p className="text-gray-600 mb-6">
              Mergers and acquisitions represent some of the most significant decisions 
              in business. Our comprehensive M&A valuations provide the critical insights 
              needed to negotiate fair deals, identify synergies, and mitigate risks 
              throughout the transaction process.
            </p>
            <p className="text-gray-600 mb-6">
              We draw on extensive market data from actual transactions to provide 
              realistic valuations that reflect current market conditions. Our analysis 
              goes beyond basic valuation to include strategic considerations, cultural 
              fit, and integration complexities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Buy-side due diligence</h4>
                  <p className="text-gray-600 text-sm">Comprehensive target company analysis and valuation</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Sell-side preparation</h4>
                  <p className="text-gray-600 text-sm">Optimize business value and prepare for sale</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Synergy valuation</h4>
                  <p className="text-gray-600 text-sm">Quantify potential cost savings and revenue synergies</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Post-merger integration planning</h4>
                  <p className="text-gray-600 text-sm">Support successful integration and value realization</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our M&A Valuation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <DocumentMagnifyingGlassIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Due Diligence</h3>
              <p className="text-gray-600">
                Comprehensive analysis of financial performance, market position, 
                and operational capabilities.
              </p>
            </div>
            <div className="text-center">
              <ChartBarIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Valuation Analysis</h3>
              <p className="text-gray-600">
                Multiple valuation approaches including DCF, comparable transactions, 
                and market multiples.
              </p>
            </div>
            <div className="text-center">
              <UserGroupIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Deal Support</h3>
              <p className="text-gray-600">
                Ongoing support throughout negotiations, structuring, 
                and closing processes.
              </p>
            </div>
          </div>
        </div>

        {/* Buy-Side vs Sell-Side */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Buy-Side vs Sell-Side Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Buy-Side Advisory</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Target identification and screening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Financial and commercial due diligence</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Valuation and pricing analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Synergy identification and quantification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Risk assessment and mitigation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Negotiation support and deal structuring</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Sell-Side Advisory</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Business preparation and optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Marketing materials and pitch books</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Buyer identification and outreach</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Process management and coordination</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Auction management and negotiation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-600">Deal execution and closing support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Synergy Types */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Types of M&A Synergies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Revenue Synergies</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cross-selling opportunities</li>
                <li>• Market expansion</li>
                <li>• Product complementarity</li>
                <li>• Customer base growth</li>
                <li>• Pricing power enhancement</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Cost Synergies</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Economies of scale</li>
                <li>• Operational efficiencies</li>
                <li>• Overhead reduction</li>
                <li>• Procurement savings</li>
                <li>• Technology integration</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Financial Synergies</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Tax optimization</li>
                <li>• Lower cost of capital</li>
                <li>• Improved cash flow</li>
                <li>• Risk diversification</li>
                <li>• Capital efficiency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Transaction Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Types of M&A Transactions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Strategic Acquisitions</h3>
              <p className="text-gray-600">
                Acquisitions by operating companies seeking strategic benefits 
                such as market expansion, technology, or operational synergies.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Financial Acquisitions</h3>
              <p className="text-gray-600">
                Private equity and other financial buyer transactions focused 
                on financial returns and operational improvements.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Merger of Equals</h3>
              <p className="text-gray-600">
                Combinations of similar-sized companies to create a larger, 
                more competitive entity with shared governance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Asset Acquisitions</h3>
              <p className="text-gray-600">
                Purchase of specific business units, assets, or product lines 
                rather than entire companies.
              </p>
            </div>
          </div>
        </div>

        {/* Success Factors */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">M&A Success Factors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Strategic Rationale</h3>
              <p className="text-gray-600">
                Clear strategic logic and compelling business case for the transaction.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Cultural Integration</h3>
              <p className="text-gray-600">
                Successful integration of different organizational cultures and values.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Value Realization</h3>
              <p className="text-gray-600">
                Effective execution of synergy capture and value creation plans.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Planning an M&A Transaction?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you're buying or selling, our experienced M&A team can help you 
            navigate the complexities and maximize value throughout the process.
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

export default MergersAcquisitions;
