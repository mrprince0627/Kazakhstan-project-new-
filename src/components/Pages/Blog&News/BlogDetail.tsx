import React from 'react';
import { ArrowLeft, Calendar,  Clock, Share2,  Tag } from 'lucide-react';
import { blogPosts } from './blogData';
import BlogCard from './BlogCard';

interface BlogDetailProps {
  postId: number;
  onBack: () => void;
}

const BlogDetail: React.FC<BlogDetailProps> = ({ postId, onBack }) => {
  const post = blogPosts.find(p => p.id === postId);
  const relatedPosts = blogPosts.filter(p => p.id !== postId && p.category === post?.category).slice(0, 3);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Post not found</h2>
        <button
          onClick={onBack}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          ← Back to Blog
        </button>
      </div>
    );
  }

  const fullContent = getFullContent(post.id);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to Blog</span>
      </button>

      {/* Article Header */}
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 mb-12">
        <div className="relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="bg-white/90 backdrop-blur-sm text-slate-700 px-4 py-2 rounded-full text-sm font-medium capitalize mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        <div className="p-8">
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-slate-800">{post.author.name}</p>
                <p className="text-sm text-slate-600">{post.author.role}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium ml-auto">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
              {post.excerpt}
            </div>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              {fullContent.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-slate-600">
                <Tag className="w-4 h-4" />
                <span className="font-medium">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {getTagsForPost(post.category).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-3"></div>
            Related Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.id} post={relatedPost} onPostSelect={() => {}} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get full content for each post
const getFullContent = (postId: number): string[] => {
  const contentMap: { [key: number]: string[] } = {
    1: [
      "The landscape of medical education is rapidly evolving, driven by technological advancements and changing healthcare needs. At Kyrgyzstan University, we are at the forefront of this transformation, integrating cutting-edge technology into our curriculum to prepare students for the challenges of modern healthcare.",
      "Virtual reality (VR) simulations have revolutionized how we teach complex medical procedures. Students can now practice surgeries, diagnose conditions, and interact with virtual patients in a risk-free environment. This technology allows for repeated practice and immediate feedback, significantly improving learning outcomes.",
      "Our digital learning platforms provide 24/7 access to educational resources, enabling students to learn at their own pace. Interactive modules, video lectures, and virtual laboratories complement traditional classroom instruction, creating a comprehensive learning experience.",
      "Artificial intelligence is being integrated into diagnostic training, helping students understand pattern recognition and decision-making processes. AI-powered tools assist in analyzing medical images, interpreting lab results, and suggesting treatment options, preparing students for AI-assisted healthcare delivery.",
      "The integration of telemedicine training has become essential, especially in light of recent global health challenges. Students learn to conduct virtual consultations, use remote monitoring devices, and maintain patient relationships through digital platforms.",
      "Simulation-based learning extends beyond individual procedures to include team-based scenarios. Students practice communication, leadership, and crisis management skills in realistic hospital environments, preparing them for collaborative healthcare delivery.",
      "Our commitment to technological advancement doesn't replace human interaction but enhances it. We maintain strong emphasis on bedside manner, empathy, and patient communication while leveraging technology to improve diagnostic accuracy and treatment outcomes.",
      "Looking ahead, we continue to invest in emerging technologies such as augmented reality, 3D printing for anatomical models, and blockchain for secure medical records. These innovations will further enhance our students' educational experience and prepare them for the future of healthcare."
    ],
    2: [
      "Living and studying in Bishkek offers international students a unique blend of academic excellence and cultural immersion. The city, nestled in the heart of Central Asia, provides an ideal environment for medical education while offering rich cultural experiences.",
      "Our campus accommodation facilities are designed to create a home away from home. Modern dormitories feature comfortable living spaces, study areas, high-speed internet, and recreational facilities. Students from over 30 countries live together, creating a vibrant international community.",
      "The Student Union organizes numerous activities throughout the year, including cultural festivals, sports competitions, academic conferences, and social events. These activities help students build lasting friendships and develop leadership skills outside the classroom.",
      "Bishkek's location offers incredible opportunities for outdoor activities. Students can explore the nearby Ala-Too mountains, enjoy hiking and skiing, or visit the beautiful Issyk-Kul lake during weekends and holidays. These experiences provide necessary breaks from intensive medical studies.",
      "The cost of living in Kyrgyzstan is significantly lower than many Western countries, making quality medical education accessible to students from diverse economic backgrounds. Local markets, restaurants, and transportation are affordable, allowing students to enjoy a comfortable lifestyle.",
      "Language support services help international students adapt to their new environment. While medical instruction is in English, we offer Russian and Kyrgyz language classes to help students communicate with local patients during clinical rotations.",
      "Clinical exposure begins early in the program, with students gaining hands-on experience in our affiliated hospitals. This practical training, combined with theoretical knowledge, ensures graduates are well-prepared for medical practice anywhere in the world.",
      "Our alumni network spans the globe, providing mentorship and career guidance to current students. Regular alumni events and networking sessions help students understand career paths and build professional connections for their future medical careers."
    ],
    3: [
      "Cardiovascular disease remains one of the leading causes of mortality worldwide, making research in this field critically important. Our research team at Kyrgyzstan University has been working tirelessly to develop innovative approaches to cardiovascular treatment and prevention.",
      "The breakthrough research focuses on novel therapeutic targets for treating heart failure and coronary artery disease. Our team has identified specific molecular pathways that could be targeted with new medications, potentially offering hope to millions of patients worldwide.",
      "Advanced imaging techniques developed in our laboratories allow for earlier detection of cardiovascular problems. These non-invasive methods can identify at-risk patients before symptoms appear, enabling preventive interventions that could save lives.",
      "Collaboration with international research institutions has been crucial to our success. We work closely with universities in Europe, Asia, and North America, sharing data, expertise, and resources to accelerate the pace of discovery.",
      "Our research has practical applications in clinical settings. Several of our findings have already been translated into treatment protocols used in our affiliated hospitals, directly benefiting patients in our community.",
      "Student involvement in research projects provides valuable learning opportunities. Undergraduate and graduate students work alongside experienced researchers, gaining hands-on experience in laboratory techniques, data analysis, and scientific writing.",
      "Funding for our research comes from various sources, including government grants, international organizations, and private foundations. This diverse funding base ensures the sustainability and independence of our research programs.",
      "The implications of our research extend beyond cardiovascular medicine. The methodologies and technologies we develop often have applications in other medical fields, contributing to the broader advancement of healthcare science.",
      "Looking forward, we are expanding our research to include personalized medicine approaches, using genetic information to tailor cardiovascular treatments to individual patients. This represents the future of precision medicine in cardiology."
    ],
    4: [
      "The MBBS program at Kyrgyzstan University offers world-class medical education that meets international standards. Our comprehensive curriculum, experienced faculty, and modern facilities prepare students for successful medical careers globally.",
      "Admission requirements include completion of secondary education with strong performance in science subjects, particularly biology, chemistry, and physics. We also consider English proficiency, as all instruction is conducted in English to prepare students for international medical practice.",
      "The entrance examination tests students' knowledge in basic sciences and their aptitude for medical studies. We provide preparation materials and guidance to help prospective students succeed in the examination process.",
      "Our scholarship programs make quality medical education accessible to deserving students regardless of their economic background. Merit-based scholarships cover up to 75% of tuition fees, while need-based assistance is available for students facing financial hardships.",
      "The application process is streamlined and student-friendly. Online applications can be submitted through our website, and our admissions team provides support throughout the process. We also have representatives in various countries to assist international applicants.",
      "Clinical training begins in the third year, with students gaining exposure to real patients under supervision. Our affiliated hospitals provide diverse clinical experiences, from primary care to specialized treatments, ensuring comprehensive medical training.",
      "International recognition of our degree allows graduates to practice medicine worldwide. Our MBBS degree is recognized by major medical councils and organizations, including WHO, and graduates can pursue residency training in various countries.",
      "Student support services include academic counseling, career guidance, and personal support. We understand that medical education can be challenging, and we provide comprehensive support to help students succeed academically and personally.",
      "The duration of the MBBS program is six years, including one year of internship. This comprehensive timeline ensures students receive thorough theoretical knowledge and practical experience before beginning independent medical practice."
    ],
    5: [
      "The success of our graduates serves as the best testament to the quality of education at Kyrgyzstan University. Our alumni have gone on to build remarkable careers in medicine, contributing to healthcare systems worldwide.",
      "Dr. Priya Sharma, a 2018 graduate, completed her residency in internal medicine in the United States and now works as a hospitalist in New York. She credits her strong foundation in clinical skills and patient care to her education at our university.",
      "Many graduates pursue specialized training in fields such as cardiology, neurology, pediatrics, and surgery. The comprehensive education they receive provides an excellent foundation for any medical specialty they choose to pursue.",
      "Our alumni work in diverse healthcare settings, from large urban hospitals to rural clinics, from private practice to public health organizations. This diversity reflects the versatility of their education and their commitment to serving communities worldwide.",
      "Research opportunities during their studies have led many graduates to pursue academic careers. Several alumni now hold faculty positions at prestigious universities, conducting research and training the next generation of medical professionals.",
      "The global network of our alumni provides valuable support for recent graduates. Mentorship programs connect new graduates with experienced professionals, helping them navigate career decisions and professional development.",
      "Entrepreneurial graduates have established healthcare startups, medical device companies, and telemedicine platforms. Their innovative approaches to healthcare delivery demonstrate the creative thinking fostered during their education.",
      "Continuing education and professional development remain priorities for our alumni. We maintain connections through regular conferences, webinars, and networking events, ensuring our graduates stay current with medical advances.",
      "The impact of our graduates extends beyond individual success to community health improvement. Many alumni work in underserved areas, providing essential healthcare services and improving health outcomes in their communities."
    ],
    6: [
      "The Clinical Skills Laboratory at Kyrgyzstan University represents a cornerstone of our medical education program. This state-of-the-art facility provides students with opportunities to practice essential medical procedures in a controlled, safe environment before working with actual patients.",
      "Our laboratory features high-fidelity mannequins and simulators that can replicate various medical conditions and scenarios. Students can practice everything from basic physical examinations to complex emergency procedures, receiving immediate feedback on their performance.",
      "Standardized patients, trained actors who portray specific medical conditions, provide realistic practice opportunities for students. These interactions help students develop communication skills, bedside manner, and diagnostic abilities in a supportive learning environment.",
      "The laboratory is equipped with the latest medical instruments and technology used in modern healthcare settings. Students become familiar with equipment they will use in their professional careers, from basic stethoscopes to advanced monitoring devices.",
      "Small group sessions in the laboratory ensure personalized attention and instruction. Faculty members work closely with students, providing guidance, correction, and encouragement as they develop their clinical skills.",
      "Assessment in the clinical skills laboratory uses objective structured clinical examinations (OSCEs), which evaluate students' practical abilities in standardized scenarios. This assessment method ensures all students meet competency standards before advancing in their studies.",
      "The laboratory supports interdisciplinary learning, with students from different healthcare programs working together on team-based scenarios. This collaboration mirrors real healthcare environments where professionals from various disciplines work together.",
      "Continuous updates to equipment and scenarios ensure our training remains current with medical advances and best practices. We regularly review and update our curriculum based on feedback from students, faculty, and healthcare professionals.",
      "The skills learned in our laboratory translate directly to clinical practice. Students report feeling more confident and prepared when they begin working with real patients, thanks to their extensive practice in the laboratory setting."
    ]
  };

  return contentMap[postId] || ["Content not available for this post."];
};

// Helper function to get tags for each category
const getTagsForPost = (category: string): string[] => {
  const tagMap: { [key: string]: string[] } = {
    academic: ["Medical Education", "Technology", "Innovation", "Curriculum"],
    "student-life": ["Campus Life", "International Students", "Culture", "Community"],
    research: ["Medical Research", "Innovation", "Healthcare", "Science"],
    admissions: ["MBBS", "Applications", "Scholarships", "Requirements"],
    career: ["Alumni", "Success Stories", "Professional Development", "Healthcare Careers"]
  };

  return tagMap[category] || ["University", "Medical Education"];
};

export default BlogDetail;