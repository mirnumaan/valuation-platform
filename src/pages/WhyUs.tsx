import React from 'react';
import {
  DocumentTextIcon,
  ChartBarIcon,
  StarIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  ScaleIcon,
  DocumentChartBarIcon,
  CalculatorIcon,
} from '@heroicons/react/24/outline';

const WhyUs: React.FC = () => {
  const trustPoints = [
    {
      icon: DocumentTextIcon,
      title: "Tailored to Your Purpose",
      description: "Whether for legal proceedings, succession planning, exit strategy, or tax purposes - you'll receive a valuation that's precise, relevant, and ready to be relied on."
    },
    {
      icon: ChartBarIcon,
      title: "Backed by Real Market Data",
      description: "Your valuation is grounded in current, comparable sales from across Australia - powered by insights from 200+ business sales we handle every year, combined with access to a comprehensive national database of business transactions across Australia."
    },
    {
      icon: StarIcon,
      title: "Gives You Clarity on What Really Matters",
      description: "Understand not just the numbers, but the story behind them. We uncover the value drivers, hidden risks, and future potential that most overlook."
    },
    {
      icon: ShieldCheckIcon,
      title: "Proven, Trusted, Respected",
      description: "Over 500 valuations delivered. Trusted by lawyers, accountants, and business owners who need clarity, accuracy, and results."
    },
    {
      icon: BuildingOfficeIcon,
      title: "Built to Hold Up — In Court, in Negotiation, in Strategy",
      description: "From legal disputes to boardroom decisions, our valuations are independent, logical, and confidently defendable. We've stood by them as expert witnesses."
    },
    {
      icon: CurrencyDollarIcon,
      title: "More Than Valuers — Business Sales Experts",
      description: "With deep experience in selling businesses, we bring live market understanding to every valuation - not static theory."
    },
    {
      icon: AcademicCapIcon,
      title: "Academic Knowledge + Real-World Business Experience",
      description: "You benefit from a team that blends CPAs, MBAs, Commerce Graduates, Registered Business Valuers, and M&A professionals - combining technical precision with practical insight from real business sales."
    },
    {
      icon: GlobeAltIcon,
      title: "Australia-Wide Reach, Specialist Insight",
      description: "You benefit from a team of 8 in-house valuers across the country, each with specialist knowledge in diverse industries and niches."
    },
    {
      icon: ScaleIcon,
      title: "Supports Smoother Resolutions in Family Law",
      description: "When emotions run high and one party owns the business, our fair, independent valuations help both sides reach agreement faster and with less stress."
    },
    {
      icon: DocumentChartBarIcon,
      title: "Works Even When Records Aren't Perfect",
      description: "No clean data? No problem. We ask the right questions, reconstruct where needed, and deliver a valuation that moves the process forward with confidence."
    },
    {
      icon: CalculatorIcon,
      title: "We Use the Best Method for the Job",
      description: "You get a valuation built on the method that best fits your needs - whether it's market-based, asset-based, discounted cash flow, or future maintainable earnings. Often, we apply multiple approaches to ensure accuracy and credibility."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-4">Why Clients Trust Us With Their Business Valuations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <point.icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Let our expert team help you understand the true value of your business.
          </p>
          <a href="/contact" className="btn btn-primary">
            Request a Valuation
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
