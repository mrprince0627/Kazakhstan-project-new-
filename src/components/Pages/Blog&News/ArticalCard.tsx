import React from 'react';
import { Calendar } from 'lucide-react';

interface Author {
  name: string;
  avatar: string;
  role: string;
}

interface Artical {
  id: number;
  title: string;
  author: Author;
  date: string;
  image: string;
  excerpt: string;
  category: string;
}

interface ArticalCardProps {
  artical: Artical;
  onArticalSelect: (articalId: number) => void;
}

const ArticalCard: React.FC<ArticalCardProps> = ({ artical, onArticalSelect }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => onArticalSelect(artical.id)}
    >
      <img className="w-full h-48 object-cover" src={artical.image} alt={artical.title} />
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-blue-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
            {artical.category}
          </span>
          <div className="flex items-center text-slate-500 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            {artical.date}
          </div>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{artical.title}</h3>
        <p className="text-sm text-slate-600 mb-4">By {artical.author.name}</p>
        <p className="text-slate-700">{artical.excerpt}</p>
      </div>
    </div>
  );
};

export default ArticalCard;