import React from 'react';
import { Calendar, User, ChevronRight } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  category: string;
  readTime: string;
}

interface BlogCardProps {
  post: BlogPost;
  onPostSelect: (postId: number) => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onPostSelect }) => {
  return (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 group">
      <div className="relative overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-3 text-sm text-slate-500">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{post.date}</span>
          </div>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center space-x-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="font-medium text-slate-800 text-sm">{post.author.name}</p>
              <p className="text-xs text-slate-500">{post.author.role}</p>
            </div>
          </div>
          
          <button 
            onClick={() => onPostSelect(post.id)}
            className="flex items-center space-x-1 text-red-600 hover:text-red-700 font-medium text-sm group"
          >
            <span>Read</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;