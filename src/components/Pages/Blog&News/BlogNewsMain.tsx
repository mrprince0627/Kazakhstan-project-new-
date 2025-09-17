import  { useState ,useEffect} from 'react';
import {  BookOpen, Newspaper, FileText } from 'lucide-react';
import Blog from './Blog';
import News from './News';
import Artical from './Artical';
import BlogDetail from './BlogDetail';
import NewsDetail from './NewsDetail';
import ArticalDetail from './ArticalDetail';

function BlognewsMain() {
  const [activeTab, setActiveTab] = useState('blog');
  const [selectedBlogPost, setSelectedBlogPost] = useState<number | null>(null);
  const [selectedNewsItem, setSelectedNewsItem] = useState<number | null>(null);
  const [selectedArticalItem, setSelectedArticalItem] = useState<number | null>(null);

  const handleBlogPostSelect = (postId: number) => {
    setSelectedBlogPost(postId);
  };

  const handleNewsItemSelect = (newsId: number) => {
    setSelectedNewsItem(newsId);
  };

  const handleArticalItemSelect = (articalId: number) => {
    setSelectedArticalItem(articalId);
  };

  const handleBackToBlog = () => {
    setSelectedBlogPost(null);
  };

  const handleBackToNews = () => {
    setSelectedNewsItem(null);
  };

  const handleBackToArtical = () => {
    setSelectedArticalItem(null);
  };
useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
          
          {/* Navigation Tabs */}
          <div className="border-b border-slate-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('blog')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'blog'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-slate-500  hover:text-red-500  hover:border-red-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Blog</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'news'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-slate-500 hover:text-red-500  hover:border-red-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Newspaper className="w-4 h-4" />
                  <span>News</span>
                </div>
              </button>
              <button
                onClick={() => setActiveTab('artical')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === 'artical'
                    ? 'border-red-500 text-red-600'
                    : 'border-transparent text-slate-500 hover:text-red-500  hover:border-red-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4" />
                  <span>Artical</span>
                </div>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'blog' ? (
          selectedBlogPost ? (
            <BlogDetail postId={selectedBlogPost} onBack={handleBackToBlog} />
          ) : (
            <Blog onPostSelect={handleBlogPostSelect} />
          )
        ) : activeTab === 'news' ? (
          selectedNewsItem ? (
            <NewsDetail newsId={selectedNewsItem} onBack={handleBackToNews} />
          ) : (
            <News onNewsSelect={handleNewsItemSelect} />
          )
        ) : (
          selectedArticalItem ? (
            <ArticalDetail articalId={selectedArticalItem} onBack={handleBackToArtical} />
          ) : (
            <Artical onArticalSelect={handleArticalItemSelect} />
          )
        )}
      </main>

      
    </div>
  );
}

export default  BlognewsMain;