import { University, FAQItem } from '../types/scholarship';

export const universities: University[] = [
  {
    id: 'ala-too',
    name: 'Ala-Too International University',
    city: 'Bishkek',
    country: 'Kyrgyzstan',
    scholarships: [
      {
        id: 'merit-scholarship',
        name: 'Merit-Based Scholarship',
        levels: ['MBBS'],
        amount: '$2,000 - $4,000',
        percentage: 30,
        deadline: '2024-06-30',
        eligibility: [
          'NEET qualified with minimum 50th percentile',
          'Class 12 with 75% in PCB subjects',
          'Age between 17-25 years',
          'English proficiency (IELTS 6.0 or equivalent)',
          'Clean medical fitness certificate'
        ],
        seats: '25 seats available',
        applicationMode: 'direct',
        detailsSlug: 'ala-too-merit-scholarship',
        type: 'merit',
        coverage: ['Tuition Fee Reduction', 'Library Access'],
        duration: '6 years',
        renewalConditions: ['Maintain 75% attendance', 'Pass all subjects in first attempt']
      }
    ]
  },
  {
    id: 'kyrgyz-state',
    name: 'Kyrgyz State Medical Academy',
    city: 'Bishkek',
    country: 'Kyrgyzstan',
    scholarships: [
      {
        id: 'government-scholarship',
        name: 'Government Excellence Scholarship',
        levels: ['MBBS'],
        amount: '$3,500',
        percentage: 50,
        deadline: '2024-07-15',
        eligibility: [
          'NEET score above 400 marks',
          'Class 12 aggregate 80% or above',
          'Age limit: 17-25 years',
          'No backlogs in qualifying exam',
          'Medical fitness as per university standards'
        ],
        seats: '15 seats per intake',
        applicationMode: 'through_ministry',
        detailsSlug: 'kyrgyz-state-government-scholarship',
        type: 'government',
        coverage: ['50% Tuition Waiver', 'Hostel Accommodation', 'Medical Insurance'],
        duration: '6 years',
        renewalConditions: ['GPA above 3.5', '90% attendance', 'No disciplinary issues']
      }
    ]
  },
  {
    id: 'international-school',
    name: 'International School of Medicine',
    city: 'Bishkek',
    country: 'Kyrgyzstan',
    scholarships: [
      {
        id: 'need-based-scholarship',
        name: 'Financial Aid Scholarship',
        levels: ['MBBS'],
        amount: '$1,500 - $3,000',
        percentage: 25,
        deadline: '2024-08-01',
        eligibility: [
          'NEET qualified (minimum cut-off)',
          'Family income below $15,000 annually',
          'Class 12 with minimum 70% in PCB',
          'Age between 17-24 years',
          'Clean academic record'
        ],
        seats: '20 scholarships available',
        applicationMode: 'through_university',
        detailsSlug: 'ism-need-based-scholarship',
        type: 'need',
        coverage: ['Partial Tuition Fee', 'Study Materials'],
        duration: '6 years',
        renewalConditions: ['Maintain 70% attendance', 'Pass annual exams']
      }
    ]
  },
  {
    id: 'asian-medical',
    name: 'Asian Medical Institute',
    city: 'Kant',
    country: 'Kyrgyzstan',
    scholarships: [
      {
        id: 'early-bird-scholarship',
        name: 'Early Application Scholarship',
        levels: ['MBBS'],
        amount: '$2,500',
        percentage: 35,
        deadline: '2024-05-30',
        eligibility: [
          'Apply before May 30th deadline',
          'NEET score above 350 marks',
          'Class 12 with 75% aggregate',
          'Age: 17-25 years',
          'English language proficiency'
        ],
        seats: '30 early bird scholarships',
        applicationMode: 'direct',
        detailsSlug: 'ami-early-bird-scholarship',
        type: 'merit',
        coverage: ['Tuition Discount', 'Welcome Package', 'Orientation Support'],
        duration: '6 years'
      }
    ]
  },
  {
    id: 'jalalabad-state',
    name: 'Jalalabad State University',
    city: 'Jalalabad',
    country: 'Kyrgyzstan',
    scholarships: [
      {
        id: 'regional-scholarship',
        name: 'Regional Excellence Award',
        levels: ['MBBS'],
        amount: '$4,000',
        percentage: 40,
        deadline: '2024-07-30',
        eligibility: [
          'NEET qualified with state rank under 5000',
          'Class 12 topper in district/state',
          'Age between 17-25 years',
          'Extracurricular achievements preferred',
          'Clean disciplinary record'
        ],
        seats: '10 regional scholarships',
        applicationMode: 'through_university',
        detailsSlug: 'jsu-regional-scholarship',
        type: 'merit',
        coverage: ['Tuition Fee Reduction', 'Hostel Priority', 'Mentorship Program'],
        duration: '6 years',
        renewalConditions: ['Top 20% class performance', '85% attendance']
      }
    ]
  },
  {
    id: 'osh-state',
    name: 'Osh State University Medical Faculty',
    city: 'Osh',
    country: 'Kyrgyzstan',
    scholarships: [
      {
        id: 'sports-scholarship',
        name: 'Sports Excellence Scholarship',
        levels: ['MBBS'],
        amount: '$1,800',
        percentage: 20,
        deadline: '2024-06-15',
        eligibility: [
          'NEET qualified (any score)',
          'State/National level sports achievement',
          'Class 12 with minimum 65%',
          'Age: 17-26 years',
          'Medical fitness for sports'
        ],
        seats: '12 sports scholarships',
        applicationMode: 'direct',
        detailsSlug: 'osu-sports-scholarship',
        type: 'merit',
        coverage: ['Partial Tuition Waiver', 'Sports Facility Access'],
        duration: '6 years',
        renewalConditions: ['Continue sports participation', 'Pass all subjects']
      }
    ]
  }
];

export const globalDocuments = [
  'Valid Passport (minimum 2 years validity)',
  'Class 10th & 12th Mark Sheets and Certificates',
  'NEET Scorecard and Admit Card',
  'Medical Fitness Certificate',
  'HIV/AIDS Test Report',
  'Statement of Purpose (SOP)',
  'Letters of Recommendation (2-3)',
  'Financial Statements/Bank Statements',
  'Passport Size Photographs (8-10)',
  'Birth Certificate',
  'Character Certificate from School/College',
  'English Language Proficiency Test (if required)',
  'Apostilled/Notarized Documents (as per embassy requirements)'
];

export const faqs: FAQItem[] = [
  {
    question: 'What is the difference between merit-based and need-based scholarships?',
    answer: 'Merit-based scholarships are awarded based on academic performance, NEET scores, and other achievements. Need-based scholarships consider your family\'s financial situation and income level. Some scholarships combine both criteria.'
  },
  {
    question: 'Are scholarship deadlines rolling or fixed?',
    answer: 'Most scholarships have fixed deadlines, but some universities offer rolling admissions with multiple deadlines throughout the year. Early applications generally have better chances. Check individual university deadlines carefully.'
  },
  {
    question: 'Can I combine multiple scholarships from the same university?',
    answer: 'Generally, you cannot combine multiple scholarships from the same institution. However, you can apply for external scholarships alongside university scholarships. Always check the terms and conditions for specific restrictions.'
  },
  {
    question: 'What are the renewal conditions for scholarships?',
    answer: 'Scholarship renewal typically requires maintaining minimum GPA (usually 3.0-3.5), attendance above 75-85%, passing all subjects in first attempt, and good disciplinary record. Some require community service or research participation.'
  },
  {
    question: 'Is there a service bond or commitment after graduation?',
    answer: 'Most private university scholarships don\'t have service bonds. However, government-sponsored scholarships may require you to practice in specific regions or serve in public healthcare for a certain period after graduation.'
  },
  {
    question: 'What happens to my scholarship if my visa gets rejected?',
    answer: 'Most universities have refund policies for visa rejections. Scholarship amounts are typically refunded if you cannot join due to visa issues, but processing fees may be non-refundable. Check the refund policy before applying.'
  },
  {
    question: 'Is NEET mandatory for all MBBS scholarships in Kyrgyzstan?',
    answer: 'Yes, NEET qualification is mandatory for Indian students applying for MBBS programs in Kyrgyzstan, including scholarship applications. The minimum score requirements vary by university and scholarship type.'
  }
];