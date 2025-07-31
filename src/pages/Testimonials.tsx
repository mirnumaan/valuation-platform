import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Michael and Karen Mazzarella",
      location: "Sutherland",
      text: "The valuer was genuine, friendly and very professional. They arranged a valuation of our business quickly and was flexible to our time schedule. The final report is better than we expected.",
      image: "/images/129 Xclussive Business Sales Headshots Newcastle Feb 2022_ Noni Carroll Photography.jpg",
      business: "Retail Business Owner"
    },
    {
      name: "Chris Sarris",
      location: "Hunters Hill",
      text: "Thank you for the valuation of our business. My partner and I appreciate your prompt service and that you explained to us how you arrived at the valuation before the report.",
      image: "/images/152  Xclussive Headshots Newcastle Feb 2022_ Noni Carroll Photography.jpg",
      business: "Manufacturing Company"
    },
    {
      name: "Daniela De Vita",
      location: "Concord",
      text: "Engaging them to complete a comprehensive valuation of our business was an easy process from the beginning to end. Their knowledge around market trends really helped us to understand the final valuation.",
      image: "/images/57 Zoran Sarabaca-Xcllusive Headshots Mar 2021_Noni Carroll Photography.jpg",
      business: "Service Industry Professional"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">What Our Clients Say</h1>
          <p className="text-xl text-gray-600">
            Read testimonials from business owners who have experienced our professional valuation services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              </div>
              <div className="p-8 relative">
                <span className="text-5xl font-serif text-primary/10 absolute top-4 right-4">"</span>
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md -mt-16"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                    <p className="text-primary text-sm">{testimonial.location}</p>
                    <p className="text-gray-600 text-sm">{testimonial.business}</p>
                  </div>
                </div>
                <blockquote className="text-gray-600 leading-relaxed relative">
                  <p className="italic">"{testimonial.text}"</p>
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Ready for Your Business Valuation?</h2>
          <p className="text-gray-600 mb-8">
            Join our satisfied clients and get a professional valuation that you can trust.
          </p>
          <Link to="/contact" className="btn btn-primary inline-block px-8 py-3">
            Get Your Valuation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
