import  { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What are the eligibility criteria for MBBS in Kyrgyzstan?",
    answer: "Students must have completed 12th grade with Physics, Chemistry, and Biology with at least 50% marks. NEET qualification is required for Indian students. Age should be between 17-25 years."
  },
  {
    question: "Are Kyrgyzstan medical universities recognized globally?",
    answer: "Yes, all major medical universities in Kyrgyzstan are recognized by WHO, UNESCO, MCI (NMC), and other international medical councils. Graduates can practice worldwide after clearing respective licensing exams."
  },
  {
    question: "What is the medium of instruction?",
    answer: "Most universities offer MBBS programs in English medium. Some universities also provide instruction in Russian. All clinical training and interactions with patients are conducted in English or Russian."
  },
  {
    question: "What are the living costs in Kyrgyzstan?",
    answer: "Living costs are very affordable. Monthly expenses including accommodation, food, transportation, and personal expenses range from $200-400. University hostels are available at $50-100 per month."
  },
  {
    question: "Is the climate suitable for international students?",
    answer: "Kyrgyzstan has a continental climate with warm summers and cold winters. The climate is generally pleasant and suitable for students. Proper winter clothing is recommended for the cold season."
  },
  {
    question: "What documents are required for admission?",
    answer: "Required documents include: 10th & 12th mark sheets, passport, birth certificate, medical certificate, HIV test report, NEET scorecard (for Indian students), and passport-size photographs."
  },
  {
    question: "Can students work part-time while studying?",
    answer: "International students can work part-time with proper work permits. However, it's recommended to focus primarily on studies during the initial years as the curriculum is intensive."
  },
  {
    question: "What about food and dietary requirements?",
    answer: "Universities provide diverse food options including vegetarian meals. Indian, Chinese, and local cuisines are readily available. Students can also cook in hostel kitchens if preferred."
  },
  {
    question: "How is the exam pattern and assessment?",
    answer: "The assessment includes continuous evaluation, practical exams, and final theory exams. The grading system follows international standards with regular assessments throughout the semester."
  },
  {
    question: "What career opportunities exist after graduation?",
    answer: "Graduates can pursue residency programs worldwide, work in hospitals, start private practice, or pursue higher specialization. Many graduates successfully clear USMLE, PLAB, and other international licensing exams."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-red-600 mr-2" />
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about studying MBBS in Kyrgyzstan. 
            Can't find your answer? Contact our expert counselors.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-red-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default FAQ;