import React from 'react';
import { 
  GlobeAltIcon, 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  StarIcon, 
  DocumentTextIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  ScaleIcon,
  DocumentChartBarIcon,
  CalculatorIcon
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] h-auto flex items-center justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-20 w-full" style={{ background: 'linear-gradient(135deg, #006699 0%, #343652 100%)' }}>
          <div className="container mx-auto flex flex-col items-center justify-center min-h-[60vh] py-12">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight text-center px-4 py-12 drop-shadow-lg" style={{textShadow: '0 4px 24px rgba(0,0,0,0.25)'}}>
              Why clients trust us with their Business Valuations
            </h1>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      {/* <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Businesses Across Australia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our proven track record speaks for itself</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">500+</div>
              <div className="text-gray-600 font-medium">Valuations Completed</div>
              <div className="text-xs text-gray-500 mt-1">Since 2008</div>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="text-4xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
              <div className="text-xs text-gray-500 mt-1">Industry Leaders</div>
            </div>
            <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:col-span-2 lg:col-span-1">
              <div className="text-4xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
              <div className="text-xs text-gray-500 mt-1">5-Star Reviews</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Featured Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Valuation Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Professional, accurate, and defensible business valuations you can trust</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ChartBarIcon,
                title: "Tailored to Your Purpose",
                // description: "Whether for legal proceedings, succession planning, exit strategy, or tax purposes - you'll receive a valuation that's precise, relevant, and ready to be relied on.",
                color: "text-blue-600"
              },
              {
                icon: StarIcon,
                title: "Expert Team",
                description: "Your valuation is grounded in current, comparable sales from across Australia - powered by insights from 200+ business sales we handle every year, combined with access to a comprehensive national database of business transactions across Australia.",
                color: "text-yellow-600"
              },
              {
                icon: CurrencyDollarIcon,
                title: "Fair Pricing",
                description: "Transparent, competitive rates with no hidden fees",
                color: "text-green-600"
              },
              {
                icon: GlobeAltIcon,
                title: "National Coverage",
                description: "Serving businesses across all states and territories",
                color: "text-purple-600"
              },{
                icon: DocumentTextIcon,
                title: "Tailored to Your Purpose",
                description: "Whether for legal proceedings, succession planning, exit strategy, or tax purposes - you'll receive a valuation that's precise, relevant, and ready to be relied on.",
                color: "text-gray-600"
              },
              {
                icon: ChartBarIcon,
                title: "Backed by Real Market Data",
                description: "Your valuation is grounded in current, comparable sales from across Australia - powered by insights from 200+ business sales we handle every year, combined with access to a comprehensive national database of business transactions across Australia.",
                color: "text-blue-600"
              },
              {
                icon: StarIcon,
                title: "Gives You Clarity on What Really Matters",
                description: "Understand not just the numbers, but the story behind them. We uncover the value drivers, hidden risks, and future potential that most overlook.",
                color: "text-yellow-600"
              },
              {
                icon: ShieldCheckIcon,
                title: "Proven, Trusted, Respected",
                description: "Over 500 valuations delivered. Trusted by lawyers, accountants, and business owners who need clarity, accuracy, and results.",
                color: "text-green-600"
              },
              {
                icon: BuildingOfficeIcon,
                title: "Built to Hold Up — In Court, in Negotiation, in Strategy",
                description: "From legal disputes to boardroom decisions, our valuations are independent, logical, and confidently defendable. We've stood by them as expert witnesses.",
                color: "text-indigo-600"
              },
              {
                icon: CurrencyDollarIcon,
                title: "More Than Valuers — Business Sales Experts",
                description: "With deep experience in selling businesses, we bring live market understanding to every valuation - not static theory.",
                color: "text-green-600"
              },
              {
                icon: AcademicCapIcon,
                title: "Academic Knowledge + Real-World Business Experience",
                description: "You benefit from a team that blends CPAs, MBAs, Commerce Graduates, Registered Business Valuers, and M&A professionals - combining technical precision with practical insight from real business sales.",
                color: "text-red-600"
              },
              {
                icon: GlobeAltIcon,
                title: "Australia-Wide Reach, Specialist Insight",
                description: "You benefit from a team of 8 in-house valuers across the country, each with specialist knowledge in diverse industries and niches.",
                color: "text-purple-600"
              },
              {
                icon: ScaleIcon,
                title: "Supports Smoother Resolutions in Family Law",
                description: "When emotions run high and one party owns the business, our fair, independent valuations help both sides reach agreement faster and with less stress.",
                color: "text-teal-600"
              },
              {
                icon: DocumentChartBarIcon,
                title: "Works Even When Records Aren't Perfect",
                description: "No clean data? No problem. We ask the right questions, reconstruct where needed, and deliver a valuation that moves the process forward with confidence.",
                color: "text-orange-600"
              },
              {
                icon: CalculatorIcon,
                title: "We Use the Best Method for the Job",
                description: "You get a valuation built on the method that best fits your needs - whether it's market-based, asset-based, discounted cash flow, or future maintainable earnings. Often, we apply multiple approaches to ensure accuracy and credibility.",
                color: "text-sky-600"
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`w-16 h-16 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-md`}>
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
