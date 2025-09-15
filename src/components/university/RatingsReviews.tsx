import React from 'react';
import { Star, TrendingUp, Users, Award, ThumbsUp, MessageCircle } from 'lucide-react';

const RatingsReviews = () => {
  const platforms = [
    {
      name: 'Google Reviews',
      rating: 4.8,
      reviews: 1247,
      logo: '🔍',
      color: 'blue'
    },
    {
      name: 'Facebook',
      rating: 4.9,
      reviews: 856,
      logo: '📘',
      color: 'indigo'
    },
    {
      name: 'Trustpilot',
      rating: 4.7,
      reviews: 623,
      logo: '⭐',
      color: 'green'
    },
    {
      name: 'Study Abroad Reviews',
      rating: 4.8,
      reviews: 445,
      logo: '🎓',
      color: 'purple'
    }
  ];

  const badges = [
    {
      title: 'Top Rated University',
      subtitle: '2024 Excellence Award',
      icon: Award,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Student Choice Award',
      subtitle: 'Best International Support',
      icon: ThumbsUp,
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Parent Recommended',
      subtitle: '98% Satisfaction Rate',
      icon: Users,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Rising Star',
      subtitle: 'Fastest Growing University',
      icon: TrendingUp,
      color: 'from-blue-400 to-cyan-500'
    }
  ];

  const recentReviews = [
    {
      name: 'Dr. Amit Kumar (Parent)',
      rating: 5,
      text: 'Excellent faculty and infrastructure. My daughter is getting world-class medical education.',
      date: '2 days ago',
      verified: true
    },
    {
      name: 'Mrs. Fatima Al-Zahra',
      rating: 5,
      text: 'The university exceeded our expectations. Great support for international students.',
      date: '1 week ago',
      verified: true
    },
    {
      name: 'Mr. John Williams',
      rating: 5,
      text: 'Transparent admission process and excellent communication throughout.',
      date: '2 weeks ago',
      verified: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Ratings & Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what students and parents are saying about their experience with our university 
            across multiple review platforms.
          </p>
        </div>

        {/* Review Badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg`}>
                <badge.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Platform Ratings */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Platform Ratings</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{platform.logo}</span>
                      <h4 className="font-semibold text-gray-900">{platform.name}</h4>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="text-xl font-bold text-gray-900">{platform.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">{platform.reviews.toLocaleString()} reviews</span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(platform.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Reviews */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Reviews</h3>
            <div className="space-y-6">
              {recentReviews.map((review, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-blue-500"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h5 className="font-semibold text-gray-900">{review.name}</h5>
                        {review.verified && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Verified
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Overall Statistics */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Overall Satisfaction Metrics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-3xl font-bold text-blue-600 mb-2">4.8/5</h4>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-3xl font-bold text-green-600 mb-2">3,171</h4>
              <p className="text-gray-600">Total Reviews</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ThumbsUp className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="text-3xl font-bold text-purple-600 mb-2">98%</h4>
              <p className="text-gray-600">Recommend Rate</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h4 className="text-3xl font-bold text-orange-600 mb-2">95%</h4>
              <p className="text-gray-600">Parent Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RatingsReviews;