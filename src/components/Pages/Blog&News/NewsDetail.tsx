import React from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Share2, AlertTriangle, Bell } from 'lucide-react';
import { newsItems } from './newsData';
import NewsCard from './NewsCard';

interface NewsDetailProps {
  newsId: number;
  onBack: () => void;
}

const NewsDetail: React.FC<NewsDetailProps> = ({ newsId, onBack }) => {
  const news = newsItems.find(n => n.id === newsId);
  const relatedNews = newsItems.filter(n => n.id !== newsId && n.type === news?.type).slice(0, 3);

  if (!news) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">News not found</h2>
        <button
          onClick={onBack}
          className="text-red-600 hover:text-red-700 font-medium"
        >
          ← Back to News
        </button>
      </div>
    );
  }

  const fullContent = getFullNewsContent(news.id);
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'announcement':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'event':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'achievement':
        return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      case 'admission':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium mb-8 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>Back to News</span>
      </button>

      {/* News Article */}
      <article className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 mb-12">
        {/* Urgent Banner */}
        {news.urgent && (
          <div className="bg-red-500 text-white px-6 py-3">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">URGENT ANNOUNCEMENT</span>
            </div>
          </div>
        )}

        <div className="relative">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className={`px-4 py-2 rounded-full text-sm font-medium capitalize mb-4 inline-block border ${getTypeColor(news.type)}`}>
              {news.type}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {news.title}
            </h1>
          </div>
        </div>

        <div className="p-8">
          {/* News Meta */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-200">
            <div className="flex items-center space-x-6 text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{news.date}</span>
              </div>
              {news.location && (
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>{news.location}</span>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>3 min read</span>
              </div>
            </div>

            <button className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium ml-auto">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>

          {/* News Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-xl text-slate-700 mb-8 leading-relaxed font-medium">
              {news.content}
            </div>
            
            <div className="space-y-6 text-slate-700 leading-relaxed">
              {fullContent.map((paragraph, index) => (
                <p key={index} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          {news.urgent && (
            <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-start space-x-3">
                <Bell className="w-5 h-5 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-800 mb-2">Important Notice</h3>
                  <p className="text-red-700 text-sm">
                    This is an urgent announcement. Please ensure you read the complete information and take necessary actions as required. 
                    For immediate assistance or questions, contact the university administration.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Information */}
          {(news.type === 'announcement' || news.urgent) && (
            <div className="mt-8 p-6 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm text-slate-600">
                <p><strong>Administration Office:</strong> +996 312 123-456</p>
                <p><strong>Email:</strong> info@kyrgyzstanuniversity.edu.kg</p>
                <p><strong>Emergency Hotline:</strong> +996 312 911-911</p>
              </div>
            </div>
          )}
        </div>
      </article>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full mr-3"></div>
            Related News
          </h2>
          <div className="grid gap-6">
            {relatedNews.map((relatedNewsItem) => (
              <NewsCard key={relatedNewsItem.id} news={relatedNewsItem} onNewsSelect={() => {}} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get full content for each news item
const getFullNewsContent = (newsId: number): string[] => {
  const contentMap: { [key: number]: string[] } = {
    1: [
      "The university administration has been closely monitoring weather conditions throughout the night and early morning. Meteorological reports indicate severe snowfall and strong winds that pose significant risks to student and staff safety.",
      "All scheduled examinations for today have been postponed and will be rescheduled once normal operations resume. Students who were scheduled for exams today will receive notification about new dates through official university channels.",
      "The university's online learning management system remains fully operational. Students are encouraged to use this time for independent study, accessing course materials, and participating in virtual discussions with classmates and faculty.",
      "Residence hall students should remain in their dormitories and avoid unnecessary outdoor activities. The dining halls will continue to operate with modified hours to ensure students have access to meals throughout the day.",
      "Faculty members are available for virtual office hours and can be reached through email or the university's communication platform. Academic support services, including tutoring and counseling, are available online.",
      "The university's emergency response team is coordinating with local authorities to monitor conditions and ensure campus safety. Updates will be provided every few hours through official university communication channels.",
      "Students living off-campus are strongly advised to stay indoors and avoid travel unless absolutely necessary. Public transportation services have been suspended due to hazardous road conditions.",
      "We expect to resume normal operations tomorrow, January 16, 2025, pending improved weather conditions. A final decision will be made by 6:00 AM and communicated to all students and staff."
    ],
    2: [
      "The new medical equipment represents a significant investment in the future of medical education and patient care at Kyrgyzstan University. This state-of-the-art technology will enhance both teaching capabilities and clinical services.",
      "The MRI machine features the latest imaging technology, providing high-resolution images that will improve diagnostic accuracy. Students will have the opportunity to learn from real cases and understand the interpretation of complex medical imaging.",
      "Digital X-ray systems offer immediate image processing and enhanced image quality while reducing radiation exposure for patients. This technology represents the current standard in modern healthcare facilities worldwide.",
      "Advanced surgical instruments include minimally invasive surgery equipment, robotic-assisted surgical tools, and precision instruments that allow for more accurate and less invasive procedures.",
      "The inauguration ceremony will feature live demonstrations of the equipment by leading medical professionals from Europe and Asia. These experts will showcase the capabilities of each device and discuss their applications in modern medicine.",
      "Training programs for faculty and students will begin immediately following the inauguration. Comprehensive workshops will ensure that all users are proficient in operating the new equipment safely and effectively.",
      "The equipment was acquired through a combination of government funding, international grants, and private donations from alumni and supporters of the university. This collaborative funding approach demonstrates the community's commitment to medical education excellence.",
      "Patient care services at the university hospital will be significantly enhanced with this new equipment. Local residents will benefit from improved diagnostic capabilities and more advanced treatment options.",
      "Research opportunities will expand with access to this advanced technology. Faculty and students will be able to conduct cutting-edge research projects that contribute to the global body of medical knowledge."
    ],
    3: [
      "The research achievement represents years of dedicated work by our multidisciplinary team of researchers, including microbiologists, pharmacologists, and clinical specialists. Their collaborative approach has been key to this breakthrough.",
      "Antibiotic resistance poses one of the greatest threats to global health, with millions of deaths annually attributed to resistant infections. Our research addresses this critical challenge with innovative solutions.",
      "The published studies appear in three prestigious international journals: The Lancet Infectious Diseases, Nature Microbiology, and the Journal of Antimicrobial Chemotherapy. This recognition validates the quality and significance of our work.",
      "Our research has identified novel mechanisms by which bacteria develop resistance to commonly used antibiotics. Understanding these mechanisms is crucial for developing new treatment strategies and preserving the effectiveness of existing antibiotics.",
      "The practical applications of this research are already being implemented in our affiliated hospitals. New protocols for antibiotic use and infection control have been developed based on our findings.",
      "International collaboration has been essential to this success. We have worked with research institutions in Germany, Japan, and the United States, sharing data and expertise to accelerate discovery.",
      "Funding for this research came from the World Health Organization, the European Union's Horizon 2020 program, and the National Science Foundation of Kyrgyzstan. This diverse funding base enabled comprehensive research activities.",
      "The research team includes both faculty members and graduate students, providing valuable training opportunities for the next generation of medical researchers. Several students have co-authored publications and presented findings at international conferences.",
      "Future research directions include developing new antimicrobial compounds and exploring personalized medicine approaches to treating resistant infections. We are also investigating the role of the microbiome in antibiotic resistance."
    ],
    4: [
      "The decision to extend the application deadline was made in response to numerous requests from prospective students and their families. We recognize that the application process requires careful preparation and adequate time for document gathering.",
      "This extension provides additional opportunities for students who may have missed the original deadline due to various circumstances, including delays in obtaining required documents or completing prerequisite courses.",
      "The admissions committee will continue to review applications on a rolling basis, with early applicants receiving priority consideration for scholarships and preferred housing assignments.",
      "Prospective students can use this additional time to strengthen their applications by retaking standardized tests, obtaining additional letters of recommendation, or completing prerequisite coursework.",
      "Information sessions and virtual campus tours will continue throughout the extended application period. These sessions provide valuable insights into university life and the MBBS program structure.",
      "The university's admissions counselors are available to assist applicants with questions about the application process, required documents, and program requirements. Individual consultations can be scheduled through our website.",
      "Financial aid applications should also be submitted by the extended deadline to ensure consideration for all available scholarships and assistance programs. Early submission is recommended for maximum consideration.",
      "International students should pay particular attention to visa processing requirements, which may take several weeks or months depending on their country of origin. Early application submission helps ensure adequate time for visa processing.",
      "The quality of our incoming class remains our top priority. The extended deadline allows us to attract the most qualified and diverse group of students possible for our MBBS program."
    ],
    5: [
      "The Annual International Medical Conference has become a premier event in the Central Asian medical community, attracting participants from over 40 countries. This year's theme reflects the global nature of current health challenges.",
      "Keynote speakers include Dr. Maria Santos from the World Health Organization, Professor James Chen from Harvard Medical School, and Dr. Fatima Al-Zahra from the American University of Beirut Medical Center.",
      "The conference program includes over 100 presentations covering topics such as infectious disease management, cardiovascular innovations, mental health in medical practice, and the integration of artificial intelligence in healthcare.",
      "Workshops will provide hands-on training in advanced medical procedures, research methodologies, and the use of new medical technologies. These sessions are designed for both practicing physicians and medical students.",
      "Networking opportunities include welcome receptions, poster sessions, and organized social events that facilitate professional connections and collaborative relationships among participants.",
      "Continuing Medical Education (CME) credits will be available for licensed physicians attending the conference. The program is accredited by international medical education organizations.",
      "Student participation is strongly encouraged, with special registration rates and dedicated sessions focusing on medical education, career development, and research opportunities for students.",
      "The conference will feature an exhibition area where medical device companies, pharmaceutical firms, and educational organizations will showcase their latest products and services.",
      "Proceedings from the conference will be published in a special issue of the Central Asian Journal of Medicine, providing lasting access to the knowledge shared during the event.",
      "Registration includes access to all sessions, conference materials, meals, and networking events. Early bird registration discounts are available until February 1, 2025."
    ],
    6: [
      "The new scholarship program represents our commitment to making quality medical education accessible to talented students regardless of their economic circumstances. This initiative will benefit students from over 20 developing countries.",
      "Eligibility criteria include academic excellence, demonstrated financial need, and a commitment to serving underserved communities after graduation. Preference will be given to students from countries with physician shortages.",
      "The scholarship covers up to 50% of tuition fees, with additional support available for living expenses, books, and other educational materials. Recipients may also be eligible for research assistantships and work-study opportunities.",
      "Application for scholarships is integrated into the regular admissions process. Prospective students need only indicate their interest in scholarship consideration on their application form.",
      "Selection criteria emphasize not only academic achievement but also leadership potential, community service experience, and commitment to improving healthcare in their home countries.",
      "Scholarship recipients will participate in a mentorship program connecting them with faculty members and alumni who can provide guidance throughout their medical education and career development.",
      "The program is funded through a combination of university resources, government support, and donations from alumni and international partners. This sustainable funding model ensures the program's long-term viability.",
      "Recipients are expected to maintain high academic standards and participate in community service activities during their studies. They will also serve as ambassadors for the university in their home countries.",
      "Upon graduation, scholarship recipients are encouraged to return to their home countries to practice medicine, though this is not a binding requirement. Many choose to specialize in areas of greatest need in their communities.",
      "The first cohort of scholarship recipients will begin their studies in September 2025. We anticipate awarding scholarships to approximately 50 students in the inaugural year of the program."
    ],
    7: [
      "The faculty development workshop is part of our ongoing commitment to educational excellence and innovation in medical education. This comprehensive program will enhance teaching effectiveness across all departments.",
      "Workshop topics include the use of learning management systems, creation of interactive online content, virtual patient simulations, and assessment techniques for online learning environments.",
      "Expert facilitators include educational technology specialists from leading medical schools, instructional designers, and faculty members who have successfully implemented digital teaching methods.",
      "Hands-on sessions will allow faculty to practice using new technologies and develop digital content for their courses. Technical support staff will be available to assist with implementation.",
      "The workshop addresses the changing needs of modern medical education, where digital literacy is essential for both educators and students. These skills are increasingly important in contemporary healthcare practice.",
      "Participants will learn about best practices in online pedagogy, including strategies for maintaining student engagement, facilitating virtual discussions, and providing effective feedback in digital environments.",
      "Assessment and evaluation methods for online learning will be thoroughly covered, including the design of valid and reliable online examinations and alternative assessment strategies.",
      "The program includes sessions on accessibility and inclusive design, ensuring that digital learning materials are accessible to students with diverse learning needs and abilities.",
      "Follow-up support will be provided after the workshop, including ongoing consultation services and regular meetings to share experiences and troubleshoot challenges.",
      "This initiative reflects our commitment to continuous improvement in medical education and our recognition that effective teaching requires ongoing professional development and adaptation to new technologies."
    ],
    8: [
      "The expansion of the Student Health and Wellness Center reflects our holistic approach to student success, recognizing that physical and mental health are fundamental to academic achievement.",
      "New counseling services will include individual therapy, group counseling sessions, stress management workshops, and crisis intervention services. Licensed mental health professionals will staff these services.",
      "Fitness facilities will feature modern exercise equipment, group fitness classes, and recreational sports programs. These facilities promote physical wellness and provide healthy outlets for academic stress.",
      "Medical consultation rooms will be equipped with modern diagnostic equipment and staffed by qualified healthcare professionals. Students will have access to routine healthcare, preventive services, and treatment for common illnesses.",
      "The expansion will double the center's capacity, allowing us to serve our growing student population more effectively. Extended hours will ensure services are available when students need them most.",
      "Wellness programs will include nutrition counseling, sleep hygiene education, and lifestyle coaching. These programs address common health challenges faced by medical students during their intensive studies.",
      "Peer support programs will train student volunteers to provide initial support and referrals to their classmates. This peer-to-peer approach has proven effective in university settings worldwide.",
      "The center will also serve as a training site for medical students interested in primary care, mental health, and preventive medicine. This provides valuable clinical experience while serving the student community.",
      "Funding for the expansion comes from student fees, university resources, and grants from health organizations. The investment reflects our commitment to student wellbeing and success.",
      "Services will be available to all enrolled students at no additional cost. The center will also provide health education programs and wellness initiatives for the broader university community."
    ]
  };

  return contentMap[newsId] || ["Additional content not available for this news item."];
};

export default NewsDetail;