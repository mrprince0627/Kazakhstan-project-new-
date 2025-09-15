import React, { useState } from 'react';
import { Search, Calendar, MapPin, ChevronRight, Bell } from 'lucide-react';
import NewsCard from './NewsCard';
import { newsItems } from './newsData';

interface NewsProps {
  onNewsSelect: (newsId: number) => void;
}

const News: React.FC<NewsProps> = ({ onNewsSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');

  const types = ['all', 'announcement', 'event', 'achievement', 'admission', 'academic'];

  const filteredNews = newsItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || item.type === selectedType;
    return matchesSearch && matchesType;
  });

  const latestNews = filteredNews.slice(0, 3);
  const otherNews = filteredNews.slice(3);

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">University News</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Stay informed with the latest news, announcements, and updates from Kyrgyzstan University. 
          From academic achievements to campus events, find everything happening in our community.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news and announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5 text-slate-400" />
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white"
            >
              <option value="all">All Types</option>
              <option value="announcement">Announcements</option>
              <option value="event">Events</option>
              <option value="achievement">Achievements</option>
              <option value="admission">Admissions</option>
              <option value="academic">Academic</option>
            </select>
          </div>
        </div>
      </div>

      {/* Latest News */}
      {searchTerm === '' && selectedType === 'all' && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-3"></div>
            Breaking News
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${
                      item.type === 'announcement' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'event' ? 'bg-green-100 text-green-700' :
                      item.type === 'achievement' ? 'bg-yellow-100 text-yellow-700' :
                      item.type === 'admission' ? 'bg-purple-100 text-purple-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-red-600 text-sm font-medium">URGENT</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-3">{item.content.slice(0, 120)}...</p>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All News */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-3"></div>
          {searchTerm || selectedType !== 'all' ? 'Search Results' : 'All News & Updates'}
        </h2>
        {filteredNews.length > 0 ? (
          <div className="grid gap-6">
            {(searchTerm || selectedType !== 'all' ? filteredNews : otherNews).map((item) => (
              <NewsCard key={item.id} news={item} onNewsSelect={onNewsSelect} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-2">No news found</h3>
            <p className="text-slate-600">Try adjusting your search terms or filter options.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;