import React from 'react';
import { ChartBarIcon } from '@heroicons/react/24/outline';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Zoran Sarabaca",
      qualifications: [
        "Registered Business Valuer (RBV®) – AIBB",
        "Certified Practicing Business Broker (CPBB®) – AIBB"
      ],
      image: "/images/57 Zoran Sarabaca-Xcllusive Headshots Mar 2021_Noni Carroll Photography.jpg"
    },
    {
      name: "Bernetta Lee",
      qualifications: [
        "Certified Public Accountant – CPA Australia"
      ],
      image: "/images/129 Xclussive Business Sales Headshots Newcastle Feb 2022_ Noni Carroll Photography.jpg"
    },
    {
      name: "Adeel Momin",
      qualifications: [
        "M.com (UNSW), MBA (UCP)",
        "Registered Business Valuer (RBV®) – AIBB",
        "Certified Practicing Business Broker (CPBB®) – AIBB"
      ],
      experience: "Professional Experience = 28 Years",
      industryExperience: "Experience in the Industry = 11 years",
      image: "/images/152  Xclussive Headshots Newcastle Feb 2022_ Noni Carroll Photography.jpg"
    },
    {
      name: "Choon Ng",
      qualifications: [
        "Bachelors of Engineering",
        "Masters of Business",
        "Registered Business Valuer (RBV®) – AIBB",
        "Certified Practicing Business Broker (CPBB®) – AIBB"
      ],
      image: "/images/240412_2485.jpg"
    },
    {
      name: "Robert Hurst",
      qualifications: [
        "Registered Business Valuer (RBV®) – AIBB"
      ],
      industryExperience: "Experience in the Industry = 40 Years",
      image: "/images/440946072_848545393957195_6555881535635515585_n.jpg"
    },
    {
      name: "Fred Fareau",
      qualifications: [
        "Master of Business Management",
        "Registered Business Valuer (RBV®) – AIBB",
        "Certified Practicing Business Broker (CPBB®) – AIBB",
        "Certified Business Coach"
      ],
      industryExperience: "Experience in the industry = 12 Years",
      image: "/images/xclusive-office-visit-35.jpg"
    }
  ];

  const scenarios = [
    {
      title: "Family Law Settlements",
      description: "Expert valuations for fair asset division in divorce proceedings, ensuring both parties receive equitable treatment.",
      count: "150+"
    },
    {
      title: "Partnership Disputes",
      description: "Impartial valuations to resolve disagreements between business partners and facilitate smooth transitions.",
      count: "100+"
    },
    {
      title: "Tax Restructures",
      description: "Strategic valuations for optimal tax planning and compliance with ATO requirements.",
      count: "75+"
    },
    {
      title: "Litigation Support",
      description: "Court-ready valuations and expert witness testimony for legal proceedings.",
      count: "80+"
    },
    {
      title: "Strategic Planning",
      description: "Forward-looking valuations to support business growth and investment decisions.",
      count: "120+"
    },
    {
      title: "Business Sales",
      description: "Comprehensive valuations to maximize sale price and facilitate successful transactions.",
      count: "200+"
    }
  ];

  return (
    <div className="py-16">
      <div className="container">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        {/* Team Overview Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">A Team of Diverse Experts</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Our team comprises over 40 professionals across Australia, including registered business valuers, 
            mergers and acquisitions specialists, business sales experts, MBAs, Commerce Graduates and CPAs. 
            This diverse blend of academic knowledge and hands-on experience ensures that our valuations are 
            both precise and practical.
          </p>
        </section>

        {/* Journey Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">From Business Sales to Valuations: Bridging the Gap Between Theory and Reality</h2>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Our journey began with a focus on business sales, where we identified a significant gap in the market: 
            the need for business valuations that are not only academically sound but also grounded in real-world 
            market conditions. Traditional valuations often relied heavily on theoretical models, sometimes producing 
            figures that didn't align with actual sale prices. Recognising this disconnect, we established a dedicated 
            business valuation division to provide assessments that truly reflect market realities.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-semibold mb-4">Extensive Experience Across Various Scenarios</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              With over 500 successful valuations completed, our expertise spans across all business scenarios. 
              Each valuation is handled with the specific requirements and nuances that different situations demand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="flex items-start mb-4">
                  <ChartBarIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div className="ml-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{scenario.title}</h3>
                      <span className="text-primary font-bold">{scenario.count}</span>
                    </div>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {scenario.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-gray-700 text-lg text-center leading-relaxed max-w-3xl mx-auto">
              Our experience across these diverse scenarios ensures that regardless of your situation, 
              you'll receive a valuation that's not only accurate but also perfectly suited to your specific needs. 
              Each valuation draws on our comprehensive database of actual business sales and market data.
            </p>
          </div>
        </section>

        {/* Court Testing Section */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6">Court-Tested and Defensible Valuations</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our valuations have stood up in court, with our experts serving as credible witnesses in legal proceedings. 
            This track record underscores our commitment to delivering assessments that are not only accurate but also 
            defensible under scrutiny.
          </p>
        </section>

        {/* Team Members Section */}
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Key Valuation Professionals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                {member.image && (
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{member.name}</h3>
                  <div className="space-y-2">
                    {member.qualifications?.map((qual, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">{qual}</p>
                    ))}
                    {member.experience && (
                      <p className="text-gray-600 text-sm">{member.experience}</p>
                    )}
                    {member.industryExperience && (
                      <p className="text-gray-600 text-sm">{member.industryExperience}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-6">Work With Our Expert Team</h2>
          <p className="text-gray-600 mb-8">
            Get a professional business valuation from our experienced team.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team;
