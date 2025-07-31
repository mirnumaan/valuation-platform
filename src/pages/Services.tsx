import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronRightIcon, 
  ScaleIcon,
  DocumentChartBarIcon,
  BuildingOfficeIcon,
  CalculatorIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  BookOpenIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  const services = [
    {
      id: "legal-proceedings",
      title: "Legal Proceedings & Disputes",
      icon: ScaleIcon,
      description: "Expert valuations that stand up to legal scrutiny. We provide detailed, well-documented business valuations for legal proceedings, shareholder disputes, and partnership dissolutions. Our reports are court-ready and defendable, backed by real market data and thorough analysis.",
      features: [
        "Court-admissible valuation reports",
        "Expert witness testimony",
        "Dispute resolution support",
        "Detailed methodology explanation"
      ]
    },
    {
      id: "succession-planning",
      title: "Succession Planning",
      icon: BuildingOfficeIcon,
      description: "Plan your business transition with confidence. Our succession planning valuations help you understand your business's true worth and establish fair terms for ownership transfers. We consider both tangible and intangible assets to ensure a comprehensive valuation.",
      features: [
        "Family business transition planning",
        "Management buyout valuations",
        "Employee share schemes",
        "Generational transfer strategies"
      ]
    },
    {
      id: "exit-strategy",
      title: "Exit Strategy",
      icon: ChartBarIcon,
      description: "Maximize your business value before sale. Our exit strategy valuations include detailed analysis of value drivers and growth opportunities. We help you identify areas for improvement to increase your business's worth before going to market.",
      features: [
        "Pre-sale valuations",
        "Value enhancement strategies",
        "Market positioning analysis",
        "Exit timing optimization"
      ]
    },
    {
      id: "tax-purposes",
      title: "Tax Purposes",
      icon: CalculatorIcon,
      description: "Comply with tax requirements while optimizing your position. Our tax-purpose valuations meet ATO standards and help you make informed decisions about capital gains, restructuring, and tax planning.",
      features: [
        "Capital gains tax valuations",
        "Small business CGT concessions",
        "Division 7A compliance",
        "Tax restructuring support"
      ]
    },
    {
      id: "mergers-acquisitions",
      title: "Mergers & Acquisitions",
      icon: CurrencyDollarIcon,
      description: "Make informed M&A decisions with accurate valuations. We provide comprehensive analysis for both buyers and sellers, including synergy potential and risk assessment. Our valuations are backed by extensive market data from actual transactions.",
      features: [
        "Buy-side due diligence",
        "Sell-side preparation",
        "Synergy valuation",
        "Post-merger integration planning"
      ]
    },
    {
      id: "family-law",
      title: "Family Law Matters",
      icon: DocumentChartBarIcon,
      description: "Navigate family law proceedings with fair, independent valuations. Our reports help both parties understand business value in divorce settlements and ensure equitable distribution of assets. We maintain strict neutrality while providing clear, detailed explanations.",
      features: [
        "Matrimonial settlements",
        "Asset division analysis",
        "Independent expert reports",
        "Court-ready documentation"
      ]
    },
    {
      id: "insolvency-bankruptcy",
      title: "Insolvency & Bankruptcy",
      icon: ShieldCheckIcon,
      description: "Get accurate valuations in challenging circumstances. Our insolvency valuations help administrators, creditors, and stakeholders make informed decisions. We provide realistic assessments based on current market conditions.",
      features: [
        "Liquidation valuations",
        "Going concern assessments",
        "Asset realization estimates",
        "Creditor reports"
      ]
    },
    {
      id: "insurance-valuations",
      title: "Insurance Valuations",
      icon: DocumentTextIcon,
      description: "Ensure adequate coverage with accurate insurance valuations. We help you determine the right level of business insurance by providing detailed valuations of assets, revenue streams, and business interruption impacts.",
      features: [
        "Business interruption calculations",
        "Asset replacement valuations",
        "Key person insurance assessments",
        "Risk mitigation analysis"
      ]
    },
    {
      id: "financial-reporting",
      title: "Financial Reporting",
      icon: BookOpenIcon,
      description: "Meet your financial reporting obligations with compliant valuations. Our reports adhere to relevant accounting standards and provide the documentation you need for statutory reporting, including impairment testing and purchase price allocation.",
      features: [
        "IFRS compliance",
        "Impairment testing",
        "Purchase price allocation",
        "Fair value assessments"
      ]
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600">
            Comprehensive business valuation services tailored to your specific needs. 
            Each valuation is backed by real market data and extensive industry experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 p-6 cursor-pointer ${
                activeService === service.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveService(service.id === activeService ? null : service.id)}
            >
              <div className="flex items-start mb-4">
                <service.icon className="w-8 h-8 text-primary flex-shrink-0 mr-4" />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <Link 
                    to={`/services/${service.id}`}
                    className="text-primary hover:text-primary-dark text-sm font-medium inline-flex items-center gap-1"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {service.description}
              </p>
              {activeService === service.id && (
                <div className="mt-4 space-y-4 animate-fadeIn">
                  <h4 className="font-semibold text-gray-800">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <ChevronRightIcon className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
          <br />
          <br />
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let our expert team help you understand the true value of your business.
            We provide accurate, reliable, and defensible valuations for any purpose.
          </p>
          <Link 
            to="/contact" 
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Request a Valuation
            <ArrowRightIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
