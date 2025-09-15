import React from 'react';
import { Calendar, MapPin, ChevronRight, Clock } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  type: string;
  location?: string;
  urgent?: boolean;
}

interface NewsCardProps {
  news: NewsItem;
  onNewsSelect: (newsId: number) => void;
}

const NewsCard: React.FC<NewsCardProps> = ({ news, onNewsSelect }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'announcement':
        return 'bg-blue-100 text-blue-700';
      case 'event':
        return 'bg-green-100 text-green-700';
      case 'achievement':
        return 'bg-yellow-100 text-yellow-700';
      case 'admission':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <article className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div className="relative overflow-hidden h-48 md:h-full">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {news.urgent && (
              <div className="absolute top-4 left-4">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                  URGENT
                </span>
              </div>
            )}
          </div>
        </div>
        
        <div className="md:w-2/3 p-6">
          <div className="flex items-center space-x-3 mb-3">
            <span className={`px-3 py-1 rounded-full text-sm font-medium capitalize ${getTypeColor(news.type)}`}>
              {news.type}
            </span>
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{news.date}</span>
              </div>
              {news.location && (
                <>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{news.location}</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">
            {news.title}
          </h3>
          
          <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
            {news.content}
          </p>
          
          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <div className="flex items-center space-x-2 text-sm text-slate-500">
              <Clock className="w-4 h-4" />
              <span>2 min read</span>
            </div>
            
            <button 
              onClick={() => onNewsSelect(news.id)}
              className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium group"
            >
              <span>Read More</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;