import React, { useState } from 'react';
import { Search, Calendar, ChevronRight, Tag } from 'lucide-react';
import BlogCard from './BlogCard';
import { blogPosts } from './blogData';

interface BlogProps {
  onPostSelect: (postId: number) => void;
}

const Blog: React.FC<BlogProps> = ({ onPostSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'academic', 'student-life', 'research', 'admissions', 'career'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const regularPosts = filteredPosts.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">University Blog</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Discover insights, stories, and updates from our vibrant university community. 
          Explore academic excellence, student experiences, and the latest in medical education.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Tag className="w-5 h-5 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors bg-white"
            >
              <option value="all">All Categories</option>
              <option value="academic">Academic</option>
              <option value="student-life">Student Life</option>
              <option value="research">Research</option>
              <option value="admissions">Admissions</option>
              <option value="career">Career</option>
            </select>
          </div>
        </div>
      </div>

      {/* Featured Post */}
      {searchTerm === '' && selectedCategory === 'all' && (
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-red-600 rounded-full mr-3"></div>
            Featured Article
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center text-slate-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredPost.date}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{featuredPost.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium text-slate-800">{featuredPost.author.name}</p>
                      <p className="text-sm text-slate-500">{featuredPost.author.role}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => onPostSelect(featuredPost.id)}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium group"
                  >
                    <span>Read More</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
          <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-green-600 rounded-full mr-3"></div>
          {searchTerm || selectedCategory !== 'all' ? 'Search Results' : 'Latest Articles'}
        </h2>
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <BlogCard key={post.id} post={post} onPostSelect={onPostSelect} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-medium text-slate-800 mb-2">No posts found</h3>
            <p className="text-slate-600">Try adjusting your search terms or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;