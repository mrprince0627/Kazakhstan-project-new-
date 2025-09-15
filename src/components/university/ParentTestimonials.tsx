import React from 'react';
import { Star, Quote, User, MapPin } from 'lucide-react';

const ParentTestimonials = () => {
  const testimonials = [
    {
      name: 'Mrs. Priya Sharma',
      location: 'Mumbai, India',
      studentName: 'Rahul Sharma',
      year: '4th Year MBBS',
      rating: 5,
      text: 'Choosing Kyrgyz Medical University for my son was the best decision. The faculty is excellent, facilities are world-class, and the support for international students is outstanding. Rahul is thriving in his studies.',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg'
    },
    {
      name: 'Mr. Ahmed Hassan',
      location: 'Dhaka, Bangladesh',
      studentName: 'Fatima Hassan',
      year: '3rd Year MBBS',
      rating: 5,
      text: 'The university provides excellent education at affordable fees. My daughter feels safe and supported. The English medium instruction and international environment have helped her grow tremendously.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Mrs. Sarah Johnson',
      location: 'Lagos, Nigeria',
      studentName: 'David Johnson',
      year: '2nd Year MBBS',
      rating: 5,
      text: 'The admission process was smooth and transparent. The university staff guided us through every step. David is getting quality education and practical training that will make him a skilled doctor.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      name: 'Mr. Rajesh Patel',
      location: 'Gujarat, India',
      studentName: 'Anita Patel',
      year: '5th Year MBBS',
      rating: 5,
      text: 'My daughter is in her final year and has secured excellent internship opportunities. The university\'s focus on practical training and clinical exposure has prepared her well for her medical career.',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg'
    },
    {
      name: 'Mrs. Kamala Wickramasinghe',
      location: 'Colombo, Sri Lanka',
      studentName: 'Saman Wickramasinghe',
      year: 'Graduate (2023)',
      rating: 5,
      text: 'Our son graduated last year and successfully cleared FMGE on his first attempt. The university\'s preparation and support throughout his 6 years was exceptional. Highly recommended!',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg'
    },
    {
      name: 'Mr. Mohammad Ali',
      location: 'Karachi, Pakistan',
      studentName: 'Ayesha Ali',
      year: '1st Year MBBS',
      rating: 5,
      text: 'As new parents to this university, we are impressed by the orientation program and continuous communication. The faculty genuinely cares about each student\'s progress and well-being.',
      image: 'https://images.pexels.com/photos/1181717/pexels-photo-1181717.jpeg'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Parents Say About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from parents of our international students about their experience 
            and why they trust us with their children's medical education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <MapPin className="h-3 w-3" />
                    <span>{testimonial.location}</span>
                  </div>
                  <p className="text-sm text-blue-600 font-medium">Parent of {testimonial.studentName}</p>
                </div>
              </div>

              <div className="mb-4">
                <Quote className="h-8 w-8 text-blue-300 mb-3" />
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">{testimonial.studentName}</p>
                  <p className="text-xs text-gray-600">{testimonial.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Family of Satisfied Parents</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Over 3,000 parents trust us with their children's medical education. 
            Experience the same peace of mind and excellent results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-full">
                <User className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Parent Satisfaction</p>
                <p className="text-blue-200">98% Positive Feedback</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-white p-2 rounded-full">
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <div className="text-left">
                <p className="font-semibold">Average Rating</p>
                <p className="text-blue-200">4.9/5 Stars</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParentTestimonials;