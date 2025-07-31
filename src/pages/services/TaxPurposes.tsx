import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CalculatorIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  BanknotesIcon,
  ShieldCheckIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';

const TaxPurposes: React.FC = () => {
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
            <CalculatorIcon className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-6">Tax Purpose Valuations</h1>
          <p className="text-xl text-gray-600">
            Comply with tax requirements while optimizing your position. Our tax-purpose 
            valuations meet ATO standards and help you make informed decisions about 
            capital gains, restructuring, and tax planning.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-6">ATO-Compliant Valuations</h2>
            <p className="text-gray-600 mb-6">
              Tax valuations require strict adherence to Australian Taxation Office guidelines 
              and relevant tax legislation. Our experienced team understands the specific 
              requirements for different tax scenarios and ensures your valuations meet 
              all regulatory standards.
            </p>
            <p className="text-gray-600 mb-6">
              We stay current with changing tax legislation and ATO rulings to provide 
              valuations that not only comply with current requirements but also position 
              your business advantageously for tax optimization opportunities.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold mb-6">Key Features</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Capital gains tax valuations</h4>
                  <p className="text-gray-600 text-sm">Accurate valuations for CGT compliance and optimization</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Small business CGT concessions</h4>
                  <p className="text-gray-600 text-sm">Maximize available concessions with proper valuations</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Division 7A compliance</h4>
                  <p className="text-gray-600 text-sm">Ensure compliance with deemed dividend provisions</p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium">Tax restructuring support</h4>
                  <p className="text-gray-600 text-sm">Strategic valuations for business restructuring</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Our Tax Valuation Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <DocumentTextIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Compliance Review</h3>
              <p className="text-gray-600">
                We review all relevant tax legislation and ATO guidelines 
                to ensure full compliance with your specific requirements.
              </p>
            </div>
            <div className="text-center">
              <BanknotesIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Valuation Analysis</h3>
              <p className="text-gray-600">
                Comprehensive valuation using appropriate methodologies 
                that meet tax requirements and optimize your position.
              </p>
            </div>
            <div className="text-center">
              <ShieldCheckIcon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600">
                Detailed reports with supporting documentation that 
                withstand ATO scrutiny and audit processes.
              </p>
            </div>
          </div>
        </div>

        {/* Common Tax Scenarios */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Common Tax Valuation Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Capital Gains Tax Events</h3>
              <p className="text-gray-600 mb-4">
                Valuations for CGT events including business sales, asset disposals, 
                and ownership transfers.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Business sale transactions</li>
                <li>• Share transfers and disposals</li>
                <li>• Asset revaluations</li>
                <li>• Restructuring events</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Small Business Concessions</h3>
              <p className="text-gray-600 mb-4">
                Maximize available CGT concessions with proper valuations and 
                compliance documentation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Small business rollover relief</li>
                <li>• 15-year exemption</li>
                <li>• Retirement exemption</li>
                <li>• 50% active asset reduction</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Division 7A Compliance</h3>
              <p className="text-gray-600 mb-4">
                Ensure compliance with deemed dividend provisions through 
                accurate asset and benefit valuations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Loan benefit calculations</li>
                <li>• Property benefit valuations</li>
                <li>• Forgiven debt assessments</li>
                <li>• UPE calculations</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-3">Business Restructuring</h3>
              <p className="text-gray-600 mb-4">
                Strategic valuations to support tax-effective business 
                restructuring and succession planning.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Entity conversions</li>
                <li>• Asset transfers</li>
                <li>• Share buy-backs</li>
                <li>• Group restructures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CGT Concessions Section */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-center">Small Business CGT Concessions</h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            We help you maximize the benefit of small business CGT concessions through proper 
            valuations and compliance strategies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <h3 className="font-semibold mb-2">15-Year Exemption</h3>
              <p className="text-gray-600 text-sm">
                Complete exemption for assets owned for 15+ years by qualifying taxpayers
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">50% Active Asset Reduction</h3>
              <p className="text-gray-600 text-sm">
                Reduce capital gain by 50% for active assets meeting eligibility criteria
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Retirement Exemption</h3>
              <p className="text-gray-600 text-sm">
                Up to $500,000 lifetime exemption for taxpayers over 55 years
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-semibold mb-2">Rollover Relief</h3>
              <p className="text-gray-600 text-sm">
                Defer capital gains through qualifying replacement asset acquisitions
              </p>
            </div>
          </div>
        </div>

        {/* Benefits of Professional Tax Valuations */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">Benefits of Professional Tax Valuations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">ATO Compliance</h3>
              <p className="text-gray-600">
                Ensure your valuations meet all ATO requirements and withstand audit scrutiny.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Tax Optimization</h3>
              <p className="text-gray-600">
                Identify opportunities to minimize tax liabilities while maintaining compliance.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Risk Mitigation</h3>
              <p className="text-gray-600">
                Reduce the risk of penalties and disputes with properly documented valuations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Strategic Planning</h3>
              <p className="text-gray-600">
                Support long-term tax planning and business structuring decisions.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Documentation</h3>
              <p className="text-gray-600">
                Comprehensive reports that provide clear audit trails and supporting evidence.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <h3 className="text-lg font-semibold mb-3">Expert Support</h3>
              <p className="text-gray-600">
                Access to experienced professionals who understand complex tax legislation.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-semibold mb-6">Need a Tax Valuation?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't let tax compliance issues catch you off guard. Contact us to discuss 
            your tax valuation requirements and ensure you're fully compliant.
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

export default TaxPurposes;
