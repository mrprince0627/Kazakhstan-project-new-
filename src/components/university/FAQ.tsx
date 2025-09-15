import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What are the eligibility criteria for MBBS admission?',
      answer: 'Students must have completed 12th grade with Physics, Chemistry, and Biology with a minimum of 50% marks. NEET qualification is required for Indian students. Age should be between 17-25 years at the time of admission.'
    },
    {
      question: 'Is the degree recognized internationally?',
      answer: 'Yes, our MBBS degree is recognized by WHO, NMC (India), and other major medical councils worldwide. Graduates can practice medicine in their home countries after clearing the respective licensing examinations.'
    },
    {
      question: 'What is the medium of instruction?',
      answer: 'The entire MBBS program is taught in English. All lectures, practical sessions, and examinations are conducted in English to ensure international students can follow the curriculum effectively.'
    },
    {
      question: 'What are the total fees for the complete MBBS course?',
      answer: 'The total tuition fee ranges from $21,000 to $27,000 for the complete 6-year program. This includes tuition fees only. Additional costs include accommodation, food, and personal expenses, which are very affordable in Kyrgyzstan.'
    },
    {
      question: 'Is hostel accommodation mandatory?',
      answer: 'While not mandatory, we highly recommend staying in university hostels, especially for first-year students. Our hostels provide a safe, comfortable environment with 24/7 security, internet connectivity, and are located within the campus.'
    },
    {
      question: 'What is the FMGE/NExT pass rate of your graduates?',
      answer: 'Our graduates have an excellent FMGE pass rate of 85%, which is significantly higher than the national average. We provide special coaching and preparation classes for licensing examinations.'
    },
    {
      question: 'How safe is Kyrgyzstan for international students?',
      answer: 'Kyrgyzstan is very safe for international students. The country has a peaceful environment, and the local people are friendly and welcoming. The university provides 24/7 security and support for international students.'
    },
    {
      question: 'What documents are required for admission?',
      answer: 'Required documents include: 10th & 12th mark sheets, passport copy, NEET scorecard, birth certificate, medical certificate, passport-size photos, bank statements, and police clearance certificate.'
    },
    {
      question: 'Is there any entrance exam for admission?',
      answer: 'No entrance exam is required by the university. Admission is based on your 12th-grade marks and NEET qualification (for Indian students). The process is straightforward and merit-based.'
    },
    {
      question: 'What clinical exposure do students get?',
      answer: 'Students get extensive clinical exposure from the 3rd year onwards in our affiliated hospitals. The final year includes a full internship program where students work directly with patients under supervision.'
    },
    {
      question: 'Can students work part-time while studying?',
      answer: 'Student visa regulations generally do not permit part-time work. However, students can engage in research projects and academic activities within the university that may provide stipends.'
    },
    {
      question: 'What support is provided for visa processing?',
      answer: 'We provide complete visa assistance including invitation letters, document guidance, and support throughout the visa application process. Our dedicated team helps students from application to arrival.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about studying MBBS at our university. 
            Can't find what you're looking for? Contact our admissions team.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <HelpCircle className="h-8 w-8" />
            <h3 className="text-2xl font-bold">Still Have Questions?</h3>
          </div>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our admissions counselors are available 24/7 to answer any questions about 
            the MBBS program, admission process, or life at our university.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Chat with Counselor
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200">
              Schedule Video Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;