import React from 'react';
import { articalData } from './articalData';
import { ArrowLeft } from 'lucide-react';

interface ArticalDetailProps {
  articalId: number;
  onBack: () => void;
}

const ArticalDetail: React.FC<ArticalDetailProps> = ({ articalId, onBack }) => {
  const artical = articalData.find((a) => a.id === articalId);

  if (!artical) {
    return (
      <div className="text-center py-8">
        <p className="text-xl text-red-600">Artical not found.</p>
        <button
          onClick={onBack}
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <ArrowLeft className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
          Back to Articals
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <button
        onClick={onBack}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mb-6"
      >
        <ArrowLeft className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
        Back to Articals
      </button>
      <img src={artical.imageUrl} alt={artical.title} className="w-full h-96 object-cover rounded-lg mb-6" />
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">{artical.title}</h1>
      <p className="text-lg text-slate-600 mb-6">By {artical.author} on {artical.date}</p>
      <div className="prose prose-lg max-w-none text-slate-800">
        <p>{artical.excerpt} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
      </div>
    </div>
  );
};

export default ArticalDetail;