export interface NewsItem {
  id: number;
  title: string;
  content: string;
  image: string;
  date: string;
  type: string;
  location?: string;
  urgent?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Emergency: Campus Closure Due to Weather Conditions",
    content: "Due to severe weather conditions affecting the Bishkek area, the university campus will be closed today, January 15, 2025. All classes, examinations, and campus activities are postponed. Students and staff should stay indoors and prioritize safety. Online learning platforms remain accessible for continued education. The university administration is monitoring the situation closely and will provide updates as conditions improve.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "January 15, 2025",
    type: "announcement",
    urgent: true
  },
  {
    id: 2,
    title: "New Medical Equipment Inauguration Ceremony",
    content: "Kyrgyzstan University proudly announces the inauguration of cutting-edge medical equipment in our teaching hospital. The new MRI machine, digital X-ray systems, and advanced surgical instruments will enhance both patient care and student learning experiences. The ceremony will feature demonstrations and presentations from leading medical professionals.",
    image: "https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "January 14, 2025",
    type: "event",
    location: "Main Hospital"
  },
  {
    id: 3,
    title: "Outstanding Research Achievement in Infectious Diseases",
    content: "Our research team, led by Dr. Maria Kuznetsova, has published groundbreaking research on antibiotic resistance in leading international medical journals. This achievement puts Kyrgyzstan University on the global map of medical research excellence and opens doors for future collaboration with international institutions.",
    image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "January 12, 2025",
    type: "achievement"
  },
  {
    id: 4,
    title: "MBBS Application Deadline Extended to February 15",
    content: "In response to numerous requests from prospective students, the university has extended the MBBS application deadline to February 15, 2025. This extension provides additional time for students to complete their applications, gather required documents, and prepare for entrance examinations. All applicants are encouraged to submit their materials well before the deadline.",
    image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "January 10, 2025",
    type: "admission"
  },
  {
    id: 5,
    title: "International Medical Conference 2025 Registration Open",
    content: "Registration is now open for the Annual International Medical Conference hosted by Kyrgyzstan University. This year's theme focuses on 'Global Health Challenges and Innovative Solutions.' The conference will feature renowned speakers, workshops, and networking opportunities for medical professionals and students from around the world.",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "January 8, 2025",
    type: "event",
    location: "University Auditorium"
  },
  {
    id: 6,
    title: "New Scholarship Program for International Students",
    content: "Kyrgyzstan University is pleased to announce the launch of a new merit-based scholarship program for international students pursuing MBBS degrees. The program covers up to 50% of tuition fees for academically excellent students from developing countries, reinforcing our commitment to accessible quality medical education.",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "January 6, 2025",
    type: "admission"
  },
  {
    id: 7,
    title: "Faculty Development Workshop on Digital Teaching Methods",
    content: "A comprehensive three-day workshop on modern digital teaching methodologies will be conducted for all faculty members. The program covers online learning platforms, interactive teaching tools, and assessment techniques in the digital age. This initiative aims to enhance the quality of medical education delivery at our institution.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "January 4, 2025",
    type: "academic",
    location: "Faculty Development Center"
  },
  {
    id: 8,
    title: "Student Health and Wellness Center Expansion",
    content: "The university is expanding its Student Health and Wellness Center to better serve our growing student population. The expansion includes new counseling services, fitness facilities, and medical consultation rooms. Construction is expected to complete by the end of March 2025, with services beginning in April.",
    image: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "January 2, 2025",
    type: "announcement",
    location: "Campus Health Center"
  }
];